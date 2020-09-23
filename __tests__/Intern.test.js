const Intern = require('../lib/Intern.js');

test('create intern profile', () => {
  const intern = new Intern('Ren',1,'ren123@gmail.com','CSU');

  expect(intern.name).toEqual(expect.any(String));
  expect(intern.name.length).toBeGreaterThan(0);
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String));
});

test('Get intern school', () => {
  const intern = new Intern('Ren',1,'ren123@gmail.com','CSU');
  expect(intern.getSchool()).toEqual(intern.school);
});

test('Get intern role', () => {
  const intern = new Intern('Ren',1,'ren123@gmail.com','CSU');
  expect('Intern').toEqual(intern.getRole());
})
