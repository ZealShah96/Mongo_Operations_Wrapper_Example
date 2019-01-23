let mongoose=require('mongoose'),
autoIncrement = require('mongoose-auto-increment');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
const debug = require('mongo-operations-wrapper').debugService.debugConsole(__dirname, __filename);
const configService=require('mongo-operations-wrapper').configService;
const findKeyName=configService.findVariableAvaiableInConfiguration;
let mongo = findKeyName('mongo_connection');
let urlForDB = `mongodb://${mongo.URI}:${mongo.Port}/${mongo.dbName}`;
var connection = mongoose.createConnection(urlForDB);
autoIncrement.initialize(connection);


var userSchema = new mongoose.Schema({
    id:{type:Number,default:1},
    name: {type:String,default:'zeal'},
    age: {type:Number,default:23},
    is_deleted:{type:Boolean,default:false}

});
userSchema.plugin(autoIncrement.plugin, { model: 'User', field: 'id',startAt: 1});
var User = mongoose.model("User", userSchema);

module.exports={
    mongoose:mongoose,
    model:User
}