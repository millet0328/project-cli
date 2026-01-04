#!/usr/bin/env node

import {Command} from 'commander';
import {log} from '@clack/prompts';
import {checkNodeVersion, getPackageVersion} from '../utils/index.mjs';
import {createProject} from './create.mjs';

async function main() {
    // 检查 Node.js 版本
    checkNodeVersion();

    const program = new Command();

    // 设置程序版本
    program
        .version(getPackageVersion())
        .name('syn')
        .description('A CLI tool for creating Server-Side Rendering projects');

    // 定义 create 命令
    program
        .command('create')
        .description('create a new project')
        .argument('[project-name]', 'name of the project')
        .action(async (projectName) => {
            await createProject(projectName);
        });

    // 解析命令行参数
    await program.parseAsync();
}

main().catch((error) => {
    log.error(error.message);
    process.exit(1);
});