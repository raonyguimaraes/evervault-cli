const {Command, flags} = require('@oclif/command')
const config = require("../../../config")
const request = require('request')
const {cli} = require('cli-ux')
const chalk = require('chalk')


class ListCommand extends Command {
  async run() {
    cli.action.start('Retrieving cage list');
		request({
			url: config.api.base_url + "/cages",
			method: "GET",
			headers: {
				Authorization: "Bearer " + config.api.token
			}
		}, function (err, head, body) {

			body = JSON.parse(body);
			if (body.count && body.count > 0) {
        cli.table(body.rows, {
          name: {
            header: "Cage Name",
            minWidth: 7
          },
          url: {
            header: "Cage URL",
            get: row => chalk.underline(row.url)
          },
          status: {
            header: "Status",
            get: row => (row.status === "deployed" ? chalk.green(row.status.charAt(0).toUpperCase() + row.status.slice(1)) : row.status.charAt(0).toUpperCase() + row.status.slice(1))
          },
          createdAt: {
            header: "Deployed On"
          }
        })
        cli.action.stop()
			} else {
				console.log("No cages found");
			}
		});
  }
}

ListCommand.description = `List the evervault cages you have deployed
...
Returns a list of all the deployed cages including their hashes and access URLs
`

module.exports = ListCommand
