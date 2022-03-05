const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	const formatDocument = vscode.commands.registerCommand('power-touchbar.formatDocument', function () {
		vscode.commands.executeCommand('editor.action.formatDocument');
	});

	const toggleTerminal = vscode.commands.registerCommand('power-touchbar.toggleTerminal', function () {
		vscode.commands.executeCommand('workbench.action.terminal.toggleTerminal');
	});

	const wrapCode = vscode.commands.registerCommand('power-touchbar.wrapCode', function () {
		vscode.commands.executeCommand('editor.emmet.action.wrapWithAbbreviation');
	});

	context.subscriptions.push(formatDocument, toggleTerminal, wrapCode);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
