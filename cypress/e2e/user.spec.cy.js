import userData from '../fixtures/userdata.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {

  it('User Info Update - Success', () => {
    
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()

    myInfoPage.fillPersonalDetails('Lucas','Gabriel','Mendes')
    myInfoPage.fillEmployeeDetails('GabrielGod','00000','000','2025-12-20')
    myInfoPage.fillStatus('2025-12-25')
    myInfoPage.saveForm()
    myInfoPage.fillCustomFields('000')
  })
})