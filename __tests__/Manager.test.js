const Manager = require('../lib/Manager.js');

test('create manager profile', () => {
  const manager = new Manager('Ren',1,'ren123@gmail.com',12345);

  expect(manager.name).toEqual(expect.any(String));
  expect(manager.name.length).toBeGreaterThan(0);
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.offNumber).toEqual(expect.any(Number));
});

test('Get manager role', () => {
  const manager = new Manager('Ren',1,'ren123@gmail.com',12345);
  expect('Manager').toEqual(manager.getRole());
})
