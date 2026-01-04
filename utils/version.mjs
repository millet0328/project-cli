import * as semver from 'semver';
import { log } from '@clack/prompts';

// 检查 Node.js 版本
export function checkNodeVersion() {
  const requiredVersion = '14.0.0';
  const currentNodeVersion = process.version;

  if (!semver.gte(currentNodeVersion, requiredVersion)) {
    log.error(`This CLI requires Node.js version ${requiredVersion} or higher.`);
    log.error(`Current Node.js version: ${currentNodeVersion}`);
    process.exit(1);
  }
}