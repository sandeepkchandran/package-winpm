import * as core from '@actions/core';
import { getNodeVersion } from './getNodeVersion';

async function run() {
  try {
    const path = core.getInput('path');

    core.debug(`Load  at ${path}`);

    const result = getNodeVersion(path);

    core.debug(`set output: full: ${result}`);
    core.setOutput('full', result);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();

