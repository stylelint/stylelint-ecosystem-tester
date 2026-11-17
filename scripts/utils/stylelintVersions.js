import { execFileSync } from 'node:child_process';

const latest = execFileSync('npm', ['view', 'stylelint', 'version']).toString().trim();
const previousMajor = String(Number(latest.split('.')[0]) - 1);
// Use a semver range so that prereleases are excluded.
const previousVersions = JSON.parse(
	execFileSync('npm', ['view', `stylelint@${previousMajor}`, 'version', '--json']).toString(),
);
const previous = Array.isArray(previousVersions) ? previousVersions.at(-1) : previousVersions;

if (!previous) {
	throw new Error(`Cannot find the previous major version of Stylelint ${latest}`);
}

export default { previous, previousMajor, latest };
