const {Command, flags} = require('@oclif/command')

class ListCommand extends Command {
  async run() {

  }
}

ListCommand.description = `List the Evervault Lambdas you have deployed
...
Returns a list of all the deployed lambdas including their hashes and access URLs
`

module.exports = ListCommand
