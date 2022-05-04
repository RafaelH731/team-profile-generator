class Employee {
    constructor(name,id, email){
        this.name = name;
        this.id = id;
        this.email = email;
}

getName(){
    return this.name
}

getId(){
    return this.id
}

getEmail(){
    return this.email
};

//why arent you working!!!!!????
module.exports = Employee;
