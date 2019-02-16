const {Command, flags} = require('@oclif/command')
const cli = require('cli-ux').cli

class LoginCommand extends Command {
  async run() {
	// mask input after enter is pressed
	const email = await cli.prompt('What is your Evervault login email?')

	// mask input after enter is pressed
	const password = await cli.prompt('What is your password?', {type: 'hide'})

	this.log(`You entered: ${email}, ${password}`)
  }
}

LoginCommand.description = `Authenticate with your Evervault Account to retrieve your API keys
...
Use your Evervault email and password to generate a JWT auth token
`

module.exports = LoginCommand
