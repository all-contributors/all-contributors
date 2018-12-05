if (!process.env.CI) {
  var message = '\n\n\n*******\n\nIt looks like you tried to install all-contributors into your project. ' +
    'This module is simply a specification and doesn\'t actually do anything.\nIf you meant to install the CLI, please ' +
    'uninstall this module first (npm uninstall all-contributors) and install `all-contributors-cli`.\n\n*******\n\n\n\n'
  console.error(message)
  process.exitCode = 1
}