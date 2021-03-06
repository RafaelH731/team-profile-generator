const Employee = require("./Employee");

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school;
}

getRole(){
    return "Intern"
}

getSchool(){
    return this.school
}
getName(){
    return this.name
}
getId(){
    return this.id
}
getEmail(){
    return this.email
}
}

module.exports = Intern;
