const {Command, flags} = require('@oclif/command')
const config = require("../../../config")
const request = require('request')
const Table = require('cli-table');

class ListCommand extends Command {
  async run() {
		request({
			url: config.api.base_url + "/lambdas",
			method: "GET",
			headers: {
				Authorization: "Bearer " + config.api.token
			}
		}, function (err, head, body) {
			body = JSON.parse(body.toString());
			if (body.length > 0) {
				var table = new Table({
				    head: ["ID", "Source Hash (SHA-256)", "Created At"],
						colors: false
						// colWidths: [100, 200]
				});

				for (var lambda in body) {
					table.push([
						body[lambda]._id,
						body[lambda].hash,
						body[lambda].createdDate
					]);
				}

				console.log(table.toString());
			} else {
				console.log("No lambdas found");
			}
		});
  }
}

ListCommand.description = `List the Evervault Lambdas you have deployed
...
Returns a list of all the deployed lambdas including their hashes and access URLs
`

module.exports = ListCommand
