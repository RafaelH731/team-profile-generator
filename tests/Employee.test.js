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

//test to get name via getName()
test("getName() functions actually retrives name", () => {
    const testName = "Rafael";
    const employee = new Employee(testName);
    expect(employee.getName()).toBe(testName);
});

//test to get id via getId()
test("getId() functions actually retrives ID", () => {
    const testId = 10;
    const employee = new Employee(testId);
    expect(employee.getId()).toBe(testId);
});

//test to get email via getEmail()
test("getEmail() functions actually retrives Email", () => {
    const testEmail = "employeeEmail";
    const employee = new Employee(testEmail);
    expect(employee.getEmail()).toBe(testEmail);
});