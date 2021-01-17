import * as vscode from 'vscode';
import * as fs from 'fs-extra';
import { AjyResources } from '../../interface';

// 获取vscode用户设置对应的值。
export function getConfiguration(keyName: string): AjyResources {
    const result: AjyResources = vscode.workspace.getConfiguration().get(keyName);
    return result;
}

// 获取本地项目对应的 package.json 内容
export function getPackageJson(projectPath: string | undefined) {
    const packagePath = projectPath + '/package.json';
    const packageJson = fs.readJsonSync(packagePath);
    return packageJson;
}