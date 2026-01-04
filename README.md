# syn-ssr-cli

A CLI tool for creating Server-Side Rendering (SSR) projects with pre-configured templates.

> [!NOTE]
> This README is also available in [Chinese](README-CN.md).

## Features

- **Easy Project Creation**: Quickly scaffold new SSR projects with the `create` command
- **Template Selection**: Choose from various pre-configured templates for different frameworks
- **Git Integration**: Download templates directly from Git repositories
- **Interactive Interface**: User-friendly prompts for project configuration
- **Framework Support**: Currently supports Vue and React templates

## Installation

```bash
npm install -g syn-ssr-cli
```

## Usage

### Creating a New Project

To create a new SSR project, use the `create` command:

```bash
syn create [project-name]
```

If you don't specify a project name, the CLI will prompt you to enter one interactively.

The CLI will guide you through the following steps:
1. Enter a project name (alphanumeric characters, hyphens, and underscores only)
2. Select a framework type (Vue or React)
3. Choose a template from the available options
4. Clone the selected template from its Git repository

### Available Commands

- `syn create [project-name]` - Creates a new SSR project from a template
- `syn --version` - Shows the current version of the CLI
- `syn --help` - Displays help information

## Supported Templates

### Vue Templates
- Ruoyi-Vue3: RuoYi Vue3 admin template

### React Templates
- Ant-design-pro: Enterprise-level React application template

## Requirements

- Node.js version 14 or higher
- Git installed and accessible from command line

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Setup

To set up the development environment:

1. Fork and clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/syn-ssr-cli.git
   cd syn-ssr-cli
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Link the package globally to use it locally:
   ```bash
   npm link
   ```

4. Now you can run the CLI tool with your local changes:
   ```bash
   syn create my-test-app
   ```

### Development Workflow

- Make your changes in the appropriate files
- Add tests if applicable
- Run tests to ensure everything works:
  ```bash
  npm test
  ```
- Build the project if needed:
  ```bash
  npm run build
  ```
- Submit a pull request when ready

## License

This project is licensed under the MIT License.

## Project Status

Active development

