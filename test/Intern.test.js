// intern test file -jest

const Intern = require('../lib/Intern.js');

test ('creates an intern object', () => {
    const intern = new Intern('intern guy', '0007', 'intership@intern.com', 'College');
    expect(intern.name).toBe('intern guy');
    expect(intern.id).toBe('0007');
    expect(intern.email).toBe('intership@intern.com');
    expect(intern.school).toBe('College');
});

test("gets intern's school", () => {
    const intern = new Intern('intern guy', '0007', 'intership@intern.com', ' College');
    expect(intern.getSchool()).toEqual(expect.stringContaining('College'));
});

test("gets intern's role", () => {
    const intern = new Intern('internguy', '0007', 'intership@intern.com', 'College');

    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});