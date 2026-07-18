import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import process from 'node:process';

import * as yaml from 'yaml';

const file = fileURLToPath(new URL('../../data/test-results.yml', import.meta.url));

export default yaml.parse(readFileSync(file, 'utf8'));

export function writeTestResults(results) {
	writeFileSync(file, yaml.stringify(results), 'utf8');

	process.stdout.write(`${path.relative(process.cwd(), file)} is updated.\n`);
}
