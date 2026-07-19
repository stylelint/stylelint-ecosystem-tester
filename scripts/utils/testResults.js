import { readFileSync, writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import process from 'node:process';

import * as yaml from 'yaml';

const file = fileURLToPath(new URL('../../data/test-results.yml', import.meta.url));

export default yaml.parse(readFileSync(file, 'utf8'));

export function writeTestResults(results) {
	writeFileSync(file, yaml.stringify(results), 'utf8');

	execFileSync('npx', ['prettier', '--write', file]);

	process.stdout.write(`${path.relative(process.cwd(), file)} is updated.\n`);
}
