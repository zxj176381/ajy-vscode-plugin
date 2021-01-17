import * as vscode from 'vscode';
import { AjyResources } from "../../interface";
import { getConfiguration, getPackageJson } from "../helpers";

// 执行 npm 命令
export function executeScript(resourcesCommand: string) {
    const resourcesPath: AjyResources = getConfiguration(resourcesCommand);
    // vscode.window.createTerminal 创建终端
    let terminal = vscode.window.createTerminal({ name: resourcesCommand });
    terminal.sendText("cd " + resourcesPath);
    const packageJson = getPackageJson(resourcesPath);
    let scripts = [];
    scripts = Object.keys(packageJson.scripts);
    vscode.window.showQuickPick(scripts).then(result => {
        const command = `npm run ${result}`;
        terminal.sendText(command);
    });
}