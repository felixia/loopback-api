'use strict';
const app = require('../server/server');
const ds = app.datasources.mongoDS;

const models = ['product','user','ACL','AccessToken','Role','RoleMapping'];

ds.automigrate(models, (err) => {
	if(err){
		throw err;
	}
	console.log('Models successfully created!!');
	ds.disconnect();
	process.exit();
});