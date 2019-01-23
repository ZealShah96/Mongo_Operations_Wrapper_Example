This is implementation of mongo-operations-wrapper:-

npm i mongo-operations-wrapper

This is example of npm pacakage:

This are some explanation of project:-
1.No need to add any dependencies for below purpose:-
    ->Mongo Db interaction
    ->Auto increment Primarykey
    ->Debug Module
    ->Testing of mongodb
2.everythig is configurable from package.json file.
    ->enviroment file configuration
        ->{
            ...
                "config": {
                "dev": "./config_jsons/dev_config.json",
                "dev_rest_api": "./config_jsons/dev_config.json",
                "dev_test_api": "./config_jsons/dev_config_test.json",
                "dev_to_do_list_test": "./config/dev_config_to_do.json",
                "prod": "",
                "staging": ""
                            }
            ...
          }
    ->All Mongo Operations related functinality is configure in respective config file:
            Example:-
            for dev enviroment configure all configuration like not allowed edit fields and allowed fields and fields which allowed to show in "./config_jsons/dev_config.json"


3.Wrapper Has these functinality:-
    ->create 
    ->find
    ->delete
    ->update

4.models has to configure by you and path of it is configure in respective config file 
    ->example:
    for dev configure file in "./config_jsons/dev_config.json"
    like below {
        ....
        "models_locations": "./models/user_api_rest",
        ....    
    }

5.For Testing please run below command 
   
-> please run below steps if use as npm package.
    -> if you are using as dependency then put below command in pacakge.json.
         "test_Mongo_Wrapper": "cd node_modules/mongo-operations-wrapper && npm install && npm test"

    ->then run
        npm run  test_Mongo_Wrapper

->please run below steps if it you doing development on it by cloning from repo or forking
    npm test




please contact me if you need any help on below email:
zealshah96@gmail.com

