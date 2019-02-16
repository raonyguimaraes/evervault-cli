const {Command, flags} = require('@oclif/command')

class RemoveCommand extends Command {
  async run() {
    const {flags} = this.parse(RemoveCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from /Users/shane/Code/evervault-cli/src/commands/lambda/remove.js`)
  }
}

RemoveCommand.description = `Describe the command here
...
Extra documentation goes here
`

RemoveCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = RemoveCommand
