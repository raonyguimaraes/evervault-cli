const {Command, flags} = require('@oclif/command')
const config = require("../../../config")
const request = require('request')
const fs = require('fs')
const logSymbols = require('log-symbols')
const {cli} = require('cli-ux')
const chalk = require('chalk')


class DeployCommand extends Command {

  async run() {
		const {args} = this.parse(DeployCommand);

    cli.action.start('Loading your cage')
		fs.readFile(args.file, function (err, data) {
			if (err) throw err;
      cli.action.stop(logSymbols.success)

      cli.action.start('Checking if you\'re authenticated')
			if (config.api.token && config.api.token.length > 0) {
        cli.action.stop(logSymbols.success)
        cli.action.start('Submitting request to evervault API')
				request({
			    url: config.api.base_url + "/cages",
			    method: "POST",
					headers: {
						Authorization: "Bearer " + config.api.token
					},
			    json: {
						metadata: {
							framework: "nodejs",
							libraries: []
						},
						source: data.toString()
					}
				}, function (err, head, body) {

					if (err) throw err;
          cli.action.stop(logSymbols.success)

          if (body.name) {
            cli.action.start("Waiting for cage " + chalk.bold(body.name) + " to build")

            var checkBuild = setInterval(function () {
              // check if the cage has been built yet
              request({
      			    url: config.api.base_url + "/cages/" + body.name,
      			    method: "GET",
      					headers: {
      						Authorization: "Bearer " + config.api.token
      					}
      				}, function (err, head, body) {
                console.log(body);
                body = JSON.parse(body)
                if (body.status === "deployed") {
                  cli.action.stop(logSymbols.success);
                  console.log("Cage successfully deployed! " + logSymbols.success)
                  clearInterval(checkBuild);
                  console.log()
                  console.log("You can access your new cage at " + body.url)
                }
              });
            }, 1000);
          } else {
            console.error("There was an error submitting your cage")
          }
					// if (body.hash) {
					// 	console.log("Your cage has successfully been deployed. Access it at https://e/" + body._id);
					// } else {
					// 	console.error("There was an error deploying your cage")
					// }
				})
			} else {
				console.error("Please login using `evervault login` before deploying a cage");
			}
		});
  }
}

DeployCommand.description = `Deploy a cage to the evervault network
...
Provide the filename as a parameter and the command will return a unique ID and access URL to run your cage
`
DeployCommand.args = [
  {
    name: 'file',               // name of arg to show in help and reference with args[name]
    required: true,            // make the arg required with `required: true`
    description: 'file name to deploy', // help description
  }
]

module.exports = DeployCommand
