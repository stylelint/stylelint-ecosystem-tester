import { readFileSync, writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import process from 'node:process';

import testResults from './utils/testResults.js';

function npmBadge(pkg) {
	return `[![${pkg}](https://img.shields.io/npm/v/${pkg}.svg)](https://www.npmjs.com/package/${pkg})`;
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

const packageLines = [];

packageLines.push('| Package | npm | Latest Stylelint | Next Stylelint |');
packageLines.push('| :------ | :-- | :--------------: | :------------: |');

let packagesCount = 0;

for (const [pkg, result] of Object.entries(testResults)) {
	packageLines.push(
		`| \`${pkg}\` | ${npmBadge(pkg)} | ${statusEmoji(result.latest?.status)} | ${statusEmoji(result.next?.status)} |`,
	);
	packagesCount += 1;
}

packageLines.push('');
packageLines.push(`Total ${packagesCount} packages`);

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

const diff = execFileSync(
	'git',
	['diff', '--color', process.env.CI ? '--exit-code' : undefined, readmeFile].filter(Boolean),
).toString();

if (diff.trim().length === 0) {
	process.stdout.write(`${readmeFile} is not updated.\n`);
} else {
	process.stdout.write(`${readmeFile} is updated.\n`);
	process.stdout.write(`${'-'.repeat(32)}\n`);
	process.stdout.write(`${diff}\n`);
}
