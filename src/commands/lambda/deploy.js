const {Command, flags} = require('@oclif/command')
const config = require("../../../config")
const request = require('request')
const fs = require('fs')

class DeployCommand extends Command {

  async run() {
		const {args} = this.parse(DeployCommand);

		fs.readFile(args.file, function (err, data) {
			if (err) throw err;

			if (config.api.token && config.api.token.length > 0) {
				request({
			    url: config.api.base_url + "/lambdas/deploy",
			    method: "POST",
					headers: {
						Authorization: "Bearer " + config.api.token
					},
			    json: {
						metadata: {
							framework: "nodejs",
							libraries: [
								"request"
							]
						},
						source: data.toString()
					}
				}, function (err, head, body) {
					if (err) throw err;

					if (body.hash) {
						console.log("Your lambda has successfully been deployed. Access it at https://api.evervault.com/lambdas/run/" + body._id);
					} else {
						console.error("There was an error deploying your lambda")
					}
				})
			} else {
				console.error("Please login using `evervault login` before deploying a lambda");
			}
		});
  }
}

DeployCommand.description = `Deploy a lambda to the Evervault network
...
Provide the filename as a parameter and the command will return a unique ID and access URL to run your lambda
`
DeployCommand.args = [
  {
    name: 'file',               // name of arg to show in help and reference with args[name]
    required: true,            // make the arg required with `required: true`
    description: 'file name to deploy', // help description
  }
]

module.exports = DeployCommand
