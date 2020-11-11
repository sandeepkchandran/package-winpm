import fs from 'fs';

import { findPackageJson, getPackageVersion } from '../getPackageVersion';

const fixturePath = './src/__tests__/fixture';
const fixture = `./src/__tests__/fixture/adobe.json`;

describe('getPackageVersion', () => {
  describe('findPackageJson', () => {
    test('find adobe.json', () => {
      const result = findPackageJson(fixturePath);

      expect(result).toBe(fs.readFileSync(fixture).toString());
    });
  });

  describe('getPackageVersion', () => {
    test('get version text within adobe.json', () => {
      const result = getPackageVersion(fixturePath);

      expect(result).toBe('0.0.0');
    });
  });
});
