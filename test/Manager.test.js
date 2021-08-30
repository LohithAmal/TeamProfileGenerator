// Manager test file -jest

const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    const manager = new Manager('Jake mcdonald', '8121', 'jm@jm.com', 'B8121');
    
    expect(manager.name).toBe('Jake mcdonald');
    expect(manager.id).toBe('8121');
    expect(manager.email).toBe('jm@jm.com');
    expect(manager.office).toBe('B8121');
});

test("gets employee's role", () => {
    const manager = new Manager('Jake mcdonald', '8121', 'jm@jm.com', 'B8121');

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
});