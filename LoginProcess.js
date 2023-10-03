import { Selector } from 'testcafe';

fixture`Login and User Authentication Tests`.page(
  'https://dev.deepthought.education/login'
);

//Test Case 1: Test Successful Login with Valid Credentials
test('Successful Login with Valid Credentials', async (t) => {
  const elementOfDashBoard = Selector('#content');
  await t
    .typeText('#username', 'csengineer23@gmail.com')
    .typeText('#password', 'Rocky_1990#')
    .click('#login')
    .wait(10000)
    .expect(elementOfDashBoard.exists)
    .ok();
});

// Test Case 2: Test Unsuccessful Login Attempts with Invalid Credentials
test('Unsuccessful Login with Invalid Credentials', async (t) => {
  await t
    .typeText('#username', 'csengineer23@gmail.com')
    .typeText('#password', 'Rocky_1991#')
    .click('#login')
    .expect(Selector('#login-error-notify').exists)
    .ok() // Replace with the actual selector for the error message element
    .expect(Selector('p').innerText)
    .eql('Invalid login credentials'); // Replace with the expected error message
});

//Test Case 3: Validate Appropriate Error Messages for Invalid Login Attempts
test('Validate Error Messages for Invalid Login Attempts', async (t) => {
  await t
    .typeText('#username', 'csengineer23@gmail.com')
    .typeText('#password', 'Roc')
    .click('#login')
    .expect(Selector('#login-error-notify').exists)
    .ok()
    .expect(Selector('p').innerText)
    .eql(
      'The password entered is too short, please pick a different password.'
    );
});

// Test Case 4: On Successful Login, Validate User Redirected to Dashboard
test('Validate User Redirected to Dashboard', async (t) => {
  await t
    .typeText('#username', 'csengineer23@gmail.com')
    .typeText('#password', 'Rocky_1990#')
    .click('#login')
    .expect(Selector('#content').exists)
    .ok();
});
