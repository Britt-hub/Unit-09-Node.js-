var inquirer = require('inquirer');
var axios = require('axios');

inquirer
    .prompt([
        {
            type: "input",
            message: "What is your user name?",
            name: "gitHubName"
        },
        {

            type: "list",
            message: "What is your favorite color",
            name: "colors",
            choices: [
                "black",
                "red",
                "blue",
                "yellow"
                "purple"
            ]
        }
    ]).then(function(data) {
        console.log(data.gitHubName)
        console.log(data.colors)

        axios.get('https://api.github.com/users/'+ data.gitHubName)
        .then(function(response){
            console.log(response.data)
            

        })

    });


    

