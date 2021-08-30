// engineer test file -jest

const Engineer = require('../lib/Engineer.js')

test('creates an engineer object', () => {
    const engineer = new Engineer ('Navya Menon', '8051', 'navyamenon1992@gmail.com', 'Navyamenon')
    
    expect(engineer.name).toBe('Navya Menon');
    expect(engineer.id).toBe('8051');
    expect(engineer.email).toBe('navyamenon1992@gmail.com');
    expect(engineer.github).toBe('Navyamenon');
});

test ("gets engineer's github username", () => {
    const engineer = new Engineer ('Navya Menon', '8051', 'navyamenon1992@gmail.com', 'Navyamenon')

    expect(engineer.getGithub()).toEqual(expect.stringContaining('Navyamenon'));
});

test("gets engineer's role", () => {
    const engineer = new Engineer ('Navya Menon', '8051', 'navyamenon1992@gmail.com', 'Navyamenon')

    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});