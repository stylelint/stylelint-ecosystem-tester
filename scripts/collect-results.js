import { globSync, readFileSync } from 'node:fs';
import process from 'node:process';

import testResults, { writeTestResults } from './utils/testResults.js';
import ecosystemData from './utils/ecosystemData.js';

for (const file of globSync(process.argv[2])) {
	const { package: pkg, stylelintVersion, status } = JSON.parse(readFileSync(file, 'utf8'));

	testResults[pkg] ??= {};
	testResults[pkg][stylelintVersion] = { status };
}

const mergedResults = {};

for (const pkg of Object.keys(ecosystemData.packages)) {
	mergedResults[pkg] = testResults[pkg] ?? {};
}

writeTestResults(mergedResults);
