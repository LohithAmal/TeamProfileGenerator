// employee test file -jest

const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Amal Lohith', '8055', 'lohithamal@gmail.com');

    expect(employee.name).toBe('Amal Lohith');
    expect(employee.id).toBe('8055');
    expect(employee.email).toBe('lohithamal@gmail.com');
});

test("gets employee's name", () => {
    const employee = new Employee('Amal Lohith', '8055', 'lohithamal@gmail.com');

    expect(employee.getName()).toEqual(expect.stringContaining('Amal Lohith'));
});

test("gets employee's ID", () => {
    const employee = new Employee('Amal Lohith', '8055', 'lohithamal@gmail.com');

    expect(employee.getId()).toEqual(expect.stringContaining('8055'));
});

test("gets employee's email", () => {
    const employee = new Employee('Amal Lohith', '8055', 'lohithamal@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining('lohithamal@gmail.com'));
});

test("gets employee's role", () => {
    const employee = new Employee('Amal Lohith', '8055', 'lohithamal@gmail.com');

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});