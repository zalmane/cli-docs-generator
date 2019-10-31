module.exports = (cliName, availableCommands) => [
  '## Available commands',
  availableCommands.map(command => `* [${command.name}](#${command.name})`).join('\n'),
  ...availableCommands.map(command => [
    `### ${command.name}`,
    'Help output:',
    `\`\`\`\n${command.helpOutput}\`\`\``,
  ]).reduce((commands, command) => [...commands, ...command]),
];
