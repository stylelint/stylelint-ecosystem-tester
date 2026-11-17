import { readFileSync, writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import process from 'node:process';

import hostedGitInfo from 'hosted-git-info';

import ecosystemData from './utils/ecosystemData.js';
import stylelintVersions from './utils/stylelintVersions.js';
import testResults from './utils/testResults.js';

function npmBadge(pkg) {
	return `[![${pkg}](https://img.shields.io/npm/v/${pkg}.svg)](https://www.npmjs.com/package/${pkg})`;
}

function repoLink(pkg) {
	let raw;

	try {
		raw = execFileSync('npm', ['view', pkg, 'repository', '--json']).toString().trim();
	} catch {
		return '';
	}

	if (!raw) return '';

	let repository = JSON.parse(raw);

	if (Array.isArray(repository)) {
		repository = repository.at(-1);
	}

	const url = typeof repository === 'string' ? repository : repository?.url;
	const info = hostedGitInfo.fromUrl(url);

	if (!info) return '';

	const directory = typeof repository === 'object' ? repository?.directory : undefined;

	return `[${info.type}](${info.browse(directory)})`;
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

const { previous: previousStylelintVersion, latest: latestStylelintVersion } = stylelintVersions;

const stylelintTargets = [
	{ key: 'previous', label: `Stylelint ${previousStylelintVersion}` },
	{ key: 'latest', label: `Stylelint ${latestStylelintVersion}` },
	{ key: 'next', label: 'Stylelint HEAD' },
];

const packageLines = [];

packageLines.push(
	`| Package | npm | Repo | ${stylelintTargets.map(({ label }) => label).join(' | ')} |`,
);
packageLines.push(
	`| :------ | :-- | :--- | ${stylelintTargets.map(() => ':--------------:').join(' | ')} |`,
);

let packagesCount = 0;
const counts = Object.fromEntries(
	stylelintTargets.map(({ key }) => [key, { passed: 0, failed: 0 }]),
);

const sortedEntries = Object.entries(testResults).sort(([a], [b]) => isOfficial(b) - isOfficial(a));

for (const [pkg, result] of sortedEntries) {
	const pkgLabel = isOfficial(pkg) ? `\`${pkg}\` ⭐` : `\`${pkg}\``;

	packageLines.push(
		`| ${pkgLabel} | ${npmBadge(pkg)} | ${repoLink(pkg)} | ${stylelintTargets
			.map(({ key }) => statusEmoji(result[key]?.status))
			.join(' | ')} |`,
	);
	packagesCount += 1;

	for (const { key } of stylelintTargets) {
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

function testSummaryLine(label, passed, failed) {
	return `- **${label}**: ${statusEmoji('success')} ${passed} passed, ${statusEmoji('failure')} ${failed} failed`;
}

packageLines.push('');
packageLines.push(`Total ${packagesCount} packages.`);

for (const { key, label } of stylelintTargets) {
	packageLines.push(testSummaryLine(label, counts[key].passed, counts[key].failed));
}

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
