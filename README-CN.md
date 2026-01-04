# syn-ssr-cli

一个用于创建服务端渲染（SSR）项目的命令行工具，提供了预配置的项目模板。

> [!NOTE]
> 本 README 也提供 [英文版本](README.md)。

## 功能特性

- **快速项目创建**：使用 `create` 命令快速搭建新的 SSR 项目
- **模板选择**：从不同框架的多个预配置模板中进行选择
- **Git 集成**：直接从 Git 仓库下载模板
- **交互式界面**：用户友好的项目配置提示
- **框架支持**：当前支持 Vue 和 React 模板

## 安装

```bash
npm install -g syn-ssr-cli
```

## 使用方法

### 创建新项目

要创建新 SSR 项目，请使用 `create` 命令：

```bash
syn create [项目名称]
```

如果不指定项目名称，CLI 将会交互式地提示您输入。

CLI 将引导您完成以下步骤：
1. 输入项目名称（仅允许字母数字字符、连字符和下划线）
2. 选择框架类型（Vue 或 React）
3. 从可用选项中选择模板
4. 从 Git 仓库克隆所选模板

### 可用命令

- `syn create [项目名称]` - 从模板创建新 SSR 项目
- `syn --version` - 显示 CLI 的当前版本
- `syn --help` - 显示帮助信息

## 支持的模板

### Vue 模板
- Ruoyi-Vue3: RuoYi Vue3 管理后台模板

### React 模板
- Ant-design-pro: 企业级 React 应用模板

## 系统要求

- Node.js 版本 14 或更高
- 已安装 Git 并可从命令行访问

## 贡献

欢迎贡献！请随时提交拉取请求。对于重大更改，请先开 issue 以讨论您想要更改的内容。

### 开发设置

要设置开发环境：

1. Fork 并克隆仓库：
   ```bash
   git clone https://github.com/YOUR_USERNAME/syn-ssr-cli.git
   cd syn-ssr-cli
   ```

2. 安装依赖：
   ```bash
   npm install
   ```

3. 全局链接包以在本地使用：
   ```bash
   npm link
   ```

4. 现在您可以使用本地更改运行 CLI 工具：
   ```bash
   syn create my-test-app
   ```

### 开发工作流程

- 在相应的文件中进行更改
- 如有必要，请添加测试
- 运行测试以确保一切正常工作：
  ```bash
  npm test
  ```
- 如需要，构建项目：
  ```bash
  npm run build
  ```
- 准备就绪后提交拉取请求

## 许可证

本项目采用 MIT 许可证。

## 项目状态

积极开发中