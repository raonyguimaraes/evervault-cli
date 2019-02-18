const {Command, flags} = require('@oclif/command')
const cli = require('cli-ux').cli
const request = require('request')
const config = require('../../config')
const fs = require('fs')
const path = require('path')

class LoginCommand extends Command {
  async run() {
		// mask input after enter is pressed
		const email = await cli.prompt('What is your Evervault login email?')

		// mask input after enter is pressed
		const password = await cli.prompt('What is your password?', {type: 'hide'})

		request({
	    url: config.api.base_url + "/users/authenticate",
	    method: "POST",
	    json: {
				email: email,
				password: password
			}
		}, function (err, head, body) {
			if (!body.token) {
				console.error()
				console.error("Invalid credentials")
			} else {
				config.api.token = body.token;
				// console.log(JSON.stringify(config));
				fs.writeFile(path.resolve(__dirname, '../../config.json'), JSON.stringify(config), function (err,data) {
					if (err) throw err;

					console.log();
					console.log("Successfully authenticated! Your API token has been stored in config.json")
				});
			}
		})
  }
}

LoginCommand.description = `Authenticate with your Evervault Account to retrieve your API keys
...
Use your Evervault email and password to generate a JWT auth token
`

module.exports = LoginCommand
