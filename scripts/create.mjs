import {text, isCancel, log, confirm, select, spinner} from '@clack/prompts';
import {existsSync, rmSync} from 'fs';
import {join} from 'path';
// 导入 git
import {clone} from '@npmcli/git';

// 导入模板配置
import {templates} from '../template/index.mjs';

// 检查项目名称是否有效
export function isValidProjectName(name) {
    return /^[a-zA-Z0-9-_]+$/.test(name);
}

// 创建项目
export async function createProject(projectName) {
    if (!projectName) {
        projectName = await text({
            message: 'Project name:',
            placeholder: 'my-ssr-app',
            initialValue: 'my-ssr-app',
            validate: (value) => {
                const trimmedValue = value.trim();

                if (!trimmedValue) {
                    return 'Project name is required!';
                }

                // 检查项目名称是否符合规范
                if (!isValidProjectName(trimmedValue)) {
                    return 'Project name can only contain alphanumeric characters, hyphens, and underscores.';
                }

            }
        });
        // isCancel 函数是一个守卫，用于检测用户何时使用 CTRL + C 取消问题。你应该为每个提示处理这种情况，可以选择使用 cancel 工具提供一个友好的取消消息。
        if (isCancel(projectName)) {
            log.info('Operation cancelled.');
            process.exit(0);
        }
    }

    // 检查同名文件夹是否存在
    const projectPath = join(process.cwd(), projectName);
    if (existsSync(projectPath)) {
        const overwrite = await confirm({
            message: `${projectName} project already exists. Do you want to overwrite it?`,
            initialValue: false
        });

        if (isCancel(overwrite) || !overwrite) {
            log.info('Operation cancelled.');
            process.exit(0);
        }

        // 如果用户确认覆盖，则删除现有目录
        rmSync(projectPath, {recursive: true, force: true});
    }

    // 选择项目类型 - 从模板配置中动态获取框架选项
    const frameworkOptions = Object.keys(templates).map(key => {
        // 使用模板配置中的键作为标签
        return { value: key, label: key };
    });

    const frameworkType = await select({
        message: 'Pick a framework type.',
        options: frameworkOptions,
    });

    if (isCancel(frameworkType)) {
        log.info('Operation cancelled.');
        process.exit(0);
    }

    // 获取所选框架的模板，使用可选链操作符检查
    const selectedTemplates = templates?.[frameworkType];

    // 检查所选框架的模板是否存在
    if (!selectedTemplates) {
        log.error(`No templates found for framework: ${frameworkType}`);
        process.exit(1);
    }

    // 将模板对象转换为选项数组
    const templateOptions = Object.entries(selectedTemplates).map(([key, value]) => {
        // 使用模板配置中的键作为标签
        return {value: key, label: key, hint: value};
    });

    // 选择具体模板
    const templateType = await select({
        message: 'Pick a template.',
        options: templateOptions,
    });

    if (isCancel(templateType)) {
        log.info('Operation cancelled.');
        process.exit(0);
    }

    log.step(`Creating new SSR project: ${projectName} with ${frameworkType} ${templateType} template (using ${selectedTemplates[templateType]})`);

    // 根据选择的框架和模板创建项目
    try {
        const templatePath = selectedTemplates[templateType];

        // 创建并启动 spinner
        const loading = spinner();
        loading.start(`Cloning template from: ${templatePath}`);

        // 使用 @npmcli/git 克隆模板
        await clone(templatePath, '', join(process.cwd(), projectName));

        // 停止 spinner 并显示成功信息
        loading.stop(`Successfully cloned template: ${templatePath}`);

        log.success(`Successfully created project: ${projectName}`);

        log.message('Next steps:');
        log.message(`  cd ${projectName}`);
        log.message('  npm install (or yarn install / pnpm install)');
        log.message('  npm run dev');
    } catch (error) {
        log.error(`Failed to create project: ${error.message}`);
        process.exit(1);
    }
}