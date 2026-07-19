import { readFileSync } from 'node:fs';

import * as yaml from 'yaml';

const file = new URL('../../data/ecosystem.yml', import.meta.url);

export default yaml.parse(readFileSync(file, 'utf8'));
