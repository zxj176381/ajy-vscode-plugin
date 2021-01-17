import * as vscode from 'vscode';
import { executeScript } from './core';
import { protocolCommand, resourcesCommand } from './shared';

// 此方法在您的扩展被激活时被调用
// 在第一次执行命令时，您的扩展被激活
export function activate(context: vscode.ExtensionContext) {
	let ajyResources = vscode.commands.registerCommand(resourcesCommand, () => {
		executeScript(resourcesCommand);
	});
	let ajyProtocol = vscode.commands.registerCommand(protocolCommand, () => {
		executeScript(protocolCommand);
	});
	const subscriptions = [ajyResources, ajyProtocol];
	context.subscriptions.push(...subscriptions);
}

// this method is called when your extension is deactivated
export function deactivate() {}
