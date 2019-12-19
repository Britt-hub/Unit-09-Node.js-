const fs = require('fs');

function generateHtml(data, color) {
    const htmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Developer Profile Generator</title>
</head>
<body>
<h1 style = 'color: ${color}'>${data.name}</h1>

    <img src = "${data.avatar_url}">

    <div>
        
                <p>${data.login}</p>
                <p>${data.followers}</p>
                <p>${data.following}</p>
                <p>${data.repos_url}</p>
                <p>${data.bio}</p>
                <p>${data.location}</p>
                <p>${data.avatar_url}</p>
    
    </div>

    

</body>
</html>`
    return htmlTemplate
}

module.exports = generateHtml;