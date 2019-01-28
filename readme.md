This is implementation of mongo-operations-wrapper:-
```npm i mongo-operations-wrapper```

## This are some facts of project:-
 - # No need to add any dependencies for below purpose:-
    - Mongo Db interaction
    - Auto increment Primarykey
    - Debug Module
    - Testing of mongodb
- # Everythig is configurable from package.json file.
    - Enviroment file configuration:
        ```{
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
    - All Mongo Operations related functinality is configure in respective config file:
            Example:-
            for dev enviroment configure all configuration like not allowed edit fields and allowed fields and fields which allowed to show in ```"./config_jsons/dev_config.json"```


- # Wrapper Has these functinality:-
    - create 
    - find
    - delete
    - update

- # Models has to configure by you and path of it is configure in respective config file 
    - example:
            for dev configure file in ```"./config_jsons/dev_config.json"```
     like below
        ```
        ....
        "models_locations": "./models/user_api_rest",
        .... 
- # For Testing please run below command 
   
- please run below steps if use as npm package.
    - If you are using as dependency then put below command in pacakge.json.
         ```"test_Mongo_Wrapper": "cd node_modules/mongo-operations-wrapper && npm install && npm test"```

    - Then run
        ```npm run  test_Mongo_Wrapper```

- Please run below steps if it you doing development on it by cloning from repo or forking
    ```npm test```




please contact me if you need any help on below email:
zealshah96@gmail.com

