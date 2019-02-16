const {Command, flags} = require('@oclif/command')

class DeployCommand extends Command {
  async run() {
  
}

DeployCommand.description = `Deploy a lambda to the Evervault network
...
Provide the filename as a parameter and the command will return a unique ID and access URL to run your lambda
`


module.exports = DeployCommand
