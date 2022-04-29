module.exports = function templateBuilder(data){
    let setOfEmployees = ''
    for(element of data){
        let card = `
        <div>Role: ${element.role}</div>

        ...more info here`
        finalSetOfEmployees+=card
    }
    let finalHTML = `
    <head>
    <style></style>
    <link rel="stylesheet" href='./style.css'</head>
    <bod>
    <div>Here's our employee roster
    
    ${setOfEmployees}
    
    </div>
    </body>`
    fs.writeFile('./index.html',finalHTML,function(err){
        console.error(err)
    })
    //fs.writeFile of the HTML to a new HTML file in dist
    return finalHTML

}