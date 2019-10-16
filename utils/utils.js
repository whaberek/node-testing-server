/*globals module */
/*eslint no-console: ["error", { allow: ["log", "warn", "error"] }] */

let Utils = function () {
	let log;

    // Function to print logs on console
	log = function (message) {
		console.log(message);
	};

	return {
		log: log 
	};
};

module.exports = new Utils();
