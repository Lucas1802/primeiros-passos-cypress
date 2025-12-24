import userData from '../fixtures/userdata.json'

describe('Orange HRM Tests', () => {

  const selectorList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    dashboardGrid: '.orangehrm-dashboard-grid',
    wrongCredentialAlert: "[role='alert']",
    buttonMyInfo: "[href='/web/index.php/pim/viewMyDetails'] .oxd-main-menu-item--name",
    myInfolayout: ".oxd-layout-context",
    firstNameField: "[name='firstName']",
    middleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericField: '.oxd-input',
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']",
    eventSucess: ".oxd-toast"
  }

  it.only('User Info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardGrid)
    cy.get(selectorList.buttonMyInfo).click()
    cy.get(selectorList.myInfolayout)
    cy.get(selectorList.firstNameField).clear().type('Lucas')
    cy.get(selectorList.middleNameField).clear().type('Gabriel')
    cy.get(selectorList.lastNameField).clear().type('Mendes')
    cy.get(selectorList.genericField).eq(4).clear().type('GabrielGod')
    cy.get(selectorList.genericField).eq(5).clear().type('0000000000')
    cy.get(selectorList.genericField).eq(6).clear().type('000000')
    cy.get(selectorList.genericField).eq(7).clear().type('test123')
    cy.get(selectorList.genericField).eq(8).clear().type('2025-12-25')
    cy.get(selectorList.dateCloseButton).click()
    cy.get(selectorList.genericField).eq(9).clear().type('1999-01-01')
    cy.get(selectorList.dateCloseButton).click()
    cy.get(selectorList.genericField).eq(10).clear().type('0000000000')
    cy.get(selectorList.genericField).eq(11).clear().type('000')
    cy.get(selectorList.submitButton).eq(0).click()
    cy.get(selectorList.eventSucess)
  })

  it('Login - Fails', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
  })
})