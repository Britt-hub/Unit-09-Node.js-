const inquirer = require('inquirer');
const axios = require('axios');
const generateHtml = require('./github')
const fs = require('fs');


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
                "purple",
                "blue",
                "yellow"

            ]
        }
    ]).then(function (data) {
        console.log(data.gitHubName)
        console.log(data.colors)


        axios.get('https://api.github.com/users/' + data.gitHubName)
            .then(function (response) {
                console.log(response.data)
                console.log(response.data.login)
                console.log(response.data.followers)
                console.log(response.data.following)
                console.log(response.data.repos_url)
                console.log(response.data.bio)
                console.log(response.data.location)
                console.log(response.data.avatar_url)
                const completedHtml = generateHtml(response.data, data.colors)


                fs.writeFile('./newPage.html', completedHtml, function (err) {
                    if (err) {
                        console.log(err);
                    }
                });

            })

    });





