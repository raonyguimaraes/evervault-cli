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

    cli.action.start('Loading your lambda')
		fs.readFile(args.file, function (err, data) {
			if (err) throw err;
      cli.action.stop(logSymbols.success)

      cli.action.start('Checking if you\'re authenticated')
			if (config.api.token && config.api.token.length > 0) {
        cli.action.stop(logSymbols.success)
        cli.action.start('Submitting request to evervault API')
				request({
			    url: config.api.base_url + "/lambdas",
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
          cli.action.stop(logSymbols.success)

          if (body.name) {
            cli.action.start("Waiting for lambda " + chalk.bold(body.name) + " to build")

            var checkBuild = setInterval(function () {
              // check if the lambda has been built yet
              request({
      			    url: config.api.base_url + "/lambdas/" + body.name,
      			    method: "GET",
      					headers: {
      						Authorization: "Bearer " + config.api.token
      					}
      				}, function (err, head, body) {
                body = JSON.parse(body)
                if (body.status === "deployed") {
                  cli.action.stop(logSymbols.success);
                  console.log("Lambda successfully deployed! " + logSymbols.success)
                  clearInterval(checkBuild);
                  console.log()
                  console.log("You can access your new lambda at " + body.url)
                }
              });
            }, 1000);
          } else {
            console.error("There was an error submitting your lambda")
          }
					// if (body.hash) {
					// 	console.log("Your lambda has successfully been deployed. Access it at https://e/" + body._id);
					// } else {
					// 	console.error("There was an error deploying your lambda")
					// }
				})
			} else {
				console.error("Please login using `evervault login` before deploying a lambda");
			}
		});
  }
}

DeployCommand.description = `Deploy a lambda to the evervault network
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
