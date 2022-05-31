const Intern = require ("../lib/Intern");

//test for school
test("selecting school", () => {
    const testSchool = "school";
    const employee = new Intern("X", 1, "testEmail", testSchool);
    expect(employee.school).toBe(testSchool);
});

//test for getRole() and getting school
test("getting the school name", () => {
    const testSchool = "school";
    const employee = new Intern("X", 1, "testEmail", "school");
    expect(employee.getSchool()).toBe(testSchool);
})

test("getRole() to return Intern", () => {
    const internRole = "Intern";
    const employee = new Intern("X", 1, "testEmail", "school");
    expect(employee.getRole()).toBe(internRole);
});