import { readFileSync, writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import process from 'node:process';

import ecosystemData from './utils/ecosystemData.js';
import testResults from './utils/testResults.js';

function npmBadge(pkg) {
	return `[![${pkg}](https://img.shields.io/npm/v/${pkg}.svg)](https://www.npmjs.com/package/${pkg})`;
}

function isOfficial(pkg) {
	return ecosystemData.packages[pkg]?.official === true;
}

function statusEmoji(status) {
	switch (status) {
		case 'success':
			return '✅';
		case 'failure':
			return '❌';
		default:
			return '❔';
	}
}

const latestStylelintVersion = execFileSync('npm', ['view', 'stylelint', 'version'])
	.toString()
	.trim();

const packageLines = [];

packageLines.push(`| Package | npm | Stylelint ${latestStylelintVersion} | Stylelint HEAD |`);
packageLines.push('| :------ | :-- | :--------------: | :------------: |');

let packagesCount = 0;
const counts = {
	latest: { passed: 0, failed: 0 },
	next: { passed: 0, failed: 0 },
};

const sortedEntries = Object.entries(testResults).sort(([a], [b]) => isOfficial(b) - isOfficial(a));

for (const [pkg, result] of sortedEntries) {
	const pkgLabel = isOfficial(pkg) ? `\`${pkg}\` ⭐` : `\`${pkg}\``;

	packageLines.push(
		`| ${pkgLabel} | ${npmBadge(pkg)} | ${statusEmoji(result.latest?.status)} | ${statusEmoji(result.next?.status)} |`,
	);
	packagesCount += 1;

	for (const key of ['latest', 'next']) {
		switch (result[key]?.status) {
			case 'success':
				counts[key].passed += 1;
				break;
			case 'failure':
				counts[key].failed += 1;
				break;
		}
	}
}

function testSummaryLine(version, passed, failed) {
	return `- **Stylelint ${version}**: ${statusEmoji('success')} ${passed} passed, ${statusEmoji('failure')} ${failed} failed`;
}

packageLines.push('');
packageLines.push(`Total ${packagesCount} packages.`);
packageLines.push(
	testSummaryLine(latestStylelintVersion, counts.latest.passed, counts.latest.failed),
);
packageLines.push(testSummaryLine('HEAD', counts.next.passed, counts.next.failed));

const readmeFile = path.relative(
	process.cwd(),
	fileURLToPath(new URL('../README.md', import.meta.url)),
);
const readmeLines = readFileSync(readmeFile, 'utf8').split('\n');
const startLineIndex = readmeLines.indexOf('<!-- START:PACKAGES -->');
const endLineIndex = readmeLines.indexOf('<!-- END:PACKAGES -->');

readmeLines.splice(startLineIndex + 1, endLineIndex - startLineIndex - 1, ...packageLines);

writeFileSync(readmeFile, readmeLines.join('\n'), 'utf8');

execFileSync('npx', ['prettier', '--write', readmeFile]);

const diff = execFileSync('git', ['diff', '--color', readmeFile].filter(Boolean)).toString();

if (diff.trim().length === 0) {
	process.stdout.write(`${readmeFile} is not updated.\n`);
} else {
	process.stdout.write(`${readmeFile} is updated.\n`);
	process.stdout.write(`${'-'.repeat(32)}\n`);
	process.stdout.write(`${diff}\n`);
}
