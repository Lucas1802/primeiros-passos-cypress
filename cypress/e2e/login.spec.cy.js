import userData from '../fixtures/userdata.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('Login Orange HRM Tests', () => {

  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()
  })

  it('Login - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
  })
})