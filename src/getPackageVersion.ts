import fs from 'fs';
import { join } from 'path';

/**
 * Find adobe.json with path.
 * @param path
 */
export const findPackageJson = (path: string): string => {
  return fs.readFileSync(join(path, 'adobe.json')).toString();
};

/**
 * Get version field within adobe.json
 * @param path
 */
export const getPackageVersion = (path: string): string => {
  const packageJson = findPackageJson(path);

  return JSON.parse(packageJson).version;
};

