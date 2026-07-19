import process from 'node:process';

import ecosystemData from './utils/ecosystemData.js';

const inputPackageNames = new Set(
	(process.argv[2] ?? '')
		.split(/[\s,]+/) // space- or comma-separated
		.map((name) => name.trim())
		.filter(Boolean),
);

let packages = {};

if (inputPackageNames.size > 0) {
	const unknownPackageNames = [];

	for (const name of inputPackageNames) {
		const pkg = ecosystemData.packages[name];

		if (!pkg) {
			unknownPackageNames.push(name);
		}

		packages[name] = pkg;
	}

	if (unknownPackageNames.length > 0) {
		throw new Error(`Unknown packages: ${unknownPackageNames.join(', ')}`);
	}
} else {
	packages = ecosystemData.packages;
}

const DEFAULT_PACKAGE_INFO = {
	'install-deps-command': 'npm install --ignore-scripts --no-audit',
	'install-stylelint-command': 'npm install --ignore-scripts --no-audit --no-save --allow-git=all',
	'list-command': 'npm list stylelint',
	'build-command': 'npm run build --if-present',
	'test-command': 'npm test',
};

const ADVANCED_PACKAGE_INFO = {
	pnpm: {
		'install-deps-command': 'pnpm install --ignore-scripts --no-frozen-lockfile',
		'install-stylelint-command': 'pnpm add --ignore-scripts',
		'list-command': 'pnpm list stylelint',
		'test-command': 'pnpm test',
	},
	yarn: {
		'install-deps-command': 'yarn install --ignore-scripts',
		'install-stylelint-command': 'yarn add --ignore-scripts --pure-lockfile',
		'list-command': 'yarn list --pattern stylelint',
	},
};

for (const [name, info] of Object.entries(packages)) {
	const packageManager = info['package-manager'];
	const slug = name.toLowerCase().replaceAll('@', '').replaceAll('/', '-');

	packages[name] = {
		slug,
		...DEFAULT_PACKAGE_INFO,
		...ADVANCED_PACKAGE_INFO[packageManager],
		...info,
	};
}

const stylelint = {
	latest: {
		'stylelint-install': 'stylelint@latest',
		'stylelint-package-spec': 'latest',
	},
	next: {
		'stylelint-install': 'github:stylelint/stylelint',
		'stylelint-package-spec': 'github:stylelint/stylelint',
	},
};

process.stdout.write(JSON.stringify({ packages, stylelint }));
