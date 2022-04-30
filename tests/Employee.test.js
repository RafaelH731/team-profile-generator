const Employee = require("../lib/Employee");

//makes sure all employees are objects
test('Makes an employee object', () =>{
    const employee = new Employee;
    expect(typeof(employee)).toBe("object");
});


