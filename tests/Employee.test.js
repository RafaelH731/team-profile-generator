const Employee = require("../lib/Employee");

//makes sure all employees are objects
test('Makes an employee object', () =>{
    const employee = new Employee;
    expect(typeof(employee)).toBe("object");
});

//value for employee name
test("Creates the name", () => {
    const employeeName = "Rafael";
    const employee = new Employee(employeeName);
    expect(employee.employeeName).toBe(employeeName);
});

//value for ID
test("Creates an ID", () => {
    const idValue = 10;
    const employee = new Employee(idValue);
    expect(employee.id).toBe(idValue);
});

//value for email
test("Creates email", () => {
    const employeeEmail = "eployeeEmail";
    const employee = new Employee(email);
    expect(employee.email).toBe(employeeEmail)
});

