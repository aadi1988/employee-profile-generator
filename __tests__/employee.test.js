const Employee = require('../lib/Employee.js');

test('create employee profile', () => {
  const employee = new Employee('Ren',1,'ren123@gmail.com');

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.name.length).toBeGreaterThan(0);
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

test('Get employee name', () => {

  const employee = new Employee('Ren',1, 'ren123@gmail.com');
  expect(employee.getName()).toEqual(expect.stringContaining(employee.name));
  
});

test('Get employee id', () => {
  const employee = new Employee('Ren',1, 'ren123@gmail.com');
  //console.log(typeof employee.id.toString());
  expect(employee.getId()).toEqual(employee.id);
});

test('Get employee email', () => {
  const employee = new Employee('Ren',1, 'ren123@gmail.com');
  expect(employee.getEmail()).toEqual(employee.email);
  expect(employee.getEmail()).toMatch(/@/);
});

test('Get employee role', () => {
  const employee = new Employee('Ren',1,'ren123@gmail.com');
  expect(['Employee','Manager','Engineer','Intern']).toContain(employee.getRole());
})