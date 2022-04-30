const Manager = require ("../lib/Manager");

//creates contact number 
test("creates contact number", () => {
    const testContact = 5551234;
    const employee = new Manager("X", 1, "testEmail", testContact);
    expect(employee.officeNumber).toBe(testContact);
});

//test getRole() and getting contact number
test("gets the contact number", () => {
    const testContact = 5551234;
    const employee = new Manager("X", 1, "testEmail", testContact);
    expect(employee.getOfficeNumber()).toBe(testContact);
});

test("gets role using getRole()", () => {
    const testManager = "Manager";
    const employee = new Manager("X", 1, "testEmail", 5551234);
    expect(employee.getRole()).toBe(testManager);
});