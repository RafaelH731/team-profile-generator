const Engineer = require ("../lib/Engineer");

//test for questions specific to engineer. Github
test("creates the github account", () => {
    const testGithub = "github";
    const employee = new Engineer("X", 1, "testEmail", testGithub);
    expect(employee.github).toBe(testGithub);
});

//test for getRole() and getting github username
test("get the github username", () => {
    const testUsername = "github username";
    const employee = new Engineer("X", 1, "testEmail", testUsername);
    expect(employee.getGithub()).toBe(testUsername);
})

test("getRole() to return Engineer", () => {
    const engineerRole = "Engineer";
    const employee = new Engineer("X", 1, "testEmail", "github");
    expect(employee.getRole()).toBe(engineerRole);
});

