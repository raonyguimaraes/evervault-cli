const {Command, flags} = require('@oclif/command')
const cli = require('cli-ux').cli
const request = require('request')
const config = require('../../config')
const fs = require('fs')
const path = require('path')

class LoginCommand extends Command {
  async run() {
		// mask input after enter is pressed
		const email = await cli.prompt('What is your evervault login email?')

		// mask input after enter is pressed
		const password = await cli.prompt('What is your password?', {type: 'hide'})

		request({
	    url: config.api.base_url + "/auth",
	    method: "POST",
      headers: {
        "Authorization": "Basic " + Buffer.from(email + ":" + password).toString("base64")
      }
		}, function (err, head, body) {
      body = JSON.parse(body);
			if (!body.token) {
				console.error()
				console.error("Invalid credentials")
			} else {
				config.api.token = body.token;

				fs.writeFile(path.resolve(__dirname, '../../config.json'), JSON.stringify(config), function (err,data) {
					if (err) throw err;

					console.log();
					console.log("Successfully authenticated! Your API token has been stored in config.json")
				});
			}
		})
  }
}

LoginCommand.description = `Authenticate with your evervault Account to retrieve your API keys
...
Use your evervault email and password to generate a Bearer auth token
`

module.exports = LoginCommand
