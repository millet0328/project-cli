import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

// 获取包版本
export function getPackageVersion() {
  try {
    const packageJsonPath = join(__dirname, '..', 'package.json');
    const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
    return packageJson.version || 'unknown';
  } catch (e) {
    // 如果上述路径失败，尝试另一个路径
    try {
      const packageJsonPath = join(__dirname, '..', '..', 'package.json');
      const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
      return packageJson.version || 'unknown';
    } catch (e2) {
      return 'unknown';
    }
  }
}