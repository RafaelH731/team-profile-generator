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
    expect(employee.name).toBe(employeeName);
});

//value for ID
test("Creates an ID", () => {
    const idValue = 10;
    const employee = new Employee( "X", idValue);
    expect(employee.id).toBe(idValue);
});

//value for email
test("Creates email", () => {
    const employeeEmail = "eployeeEmail";
    const employee = new Employee("X", 1, employeeEmail);
    expect(employee.email).toBe(employeeEmail)
});

//test to get name via getName()
test("getName() functions actually retrives name", () => {
    const testName = "Rafael";
    const employee = new Employee(testName);
    expect(employee.getName()).toBe(testName);
});

//test to get id via getId()
test("getId() functions actually retrives ID", () => {
    const testId = 10;
    const employee = new Employee("X", testId);
    expect(employee.getId()).toBe(testId);
});

//test to get email via getEmail()
test("getEmail() functions actually retrives Email", () => {
    const testEmail = "employeeEmail";
    const employee = new Employee("X", 1, testEmail);
    expect(employee.getEmail()).toBe(testEmail);
});

//test to return employee via getRole()
test("getRole() functions actually retrives role", () => {
    const testRole = "Employee";
    const employee = new Employee("X", 1," testEmail");
    expect(employee.getRole()).toBe(testRole);
});