const Engineer = require('../lib/Engineer.js');

test('create engineer profile', () => {
  const engineer = new Engineer('Ren',1,'ren123@gmail.com','renaldo');

  expect(engineer.name).toEqual(expect.any(String));
  expect(engineer.name.length).toBeGreaterThan(0);
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.github).toEqual(expect.any(String));
});

test('Get engineer github username', () => {
  const engineer = new Engineer('Ren',1,'ren123@gmail.com','ren123');
  expect(engineer.getGithub()).toEqual(engineer.github);
});

test('Get engineer role', () => {
  const engineer = new Engineer('Ren',1,'ren123@gmail.com','ren123');
  expect('Engineer').toEqual(engineer.getRole());
})
