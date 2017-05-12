var chalk = require('chalk');
var semver = require('semver');
var shell = require('shelljs');
var child_process = require('child_process');
var pkg = require('../package.json');

var requiredVersion = [];

function exec(cmd){
	return child_process.execSync(cmd).toString().trim();
}
requiredVersion.push({
	name: 'node',
	currentVersion: semver.clean(process.version),
	versionRequirement: pkg.engines.node
});

if(shell.which('npm')){
	requiredVersion.push({
		name: 'npm',
		currentVersion: exec('npm --version'),
		versionRequirement: pkg.engines.npm
	});
}

module.exports = function(){
	var warnings = [];
	for(var index=0; index<requiredVersion.length; ++index){
		var mod = requiredVersion[index];
		if(!semver.satisfies(mod.currentVersion, mod.versionRequirement)){
			warnings.push(mod.name + ': ' + chalk.red(mod.currentVersion) + 
				' should be ' + chalk.green(mod.versionRequirement));
		}
	}
	if(warnings.length){
		console.log('');
		console.log('To use this template, you must update following modules:');
		console.log();
		for(var index = 0; index < warnings.length; index++){
			var warning = warnings[index];
      		console.log('  ' + warning);
		}
	    console.log();
	    process.exit(1);
	}
}