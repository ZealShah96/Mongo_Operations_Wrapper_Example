let services=require('mongo-operations-wrapper');


let pathOfConfigFile=services.configService.findPathOfConfigFile('dev');

services.mongoService.create("user",{"id":1,"name":"zeal"},{"requiredFields":[]}).then((res)=>{
debugger;
console.log("successfully complete");
}).catch((err)=>{
debugger;
});
debugger;
console.log(pathOfConfigFile);
