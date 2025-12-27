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
    dateCloseButton: ".--close",
    dateField: "[placeholder='yyyy-dd-mm']",
    submitButton: "[type='submit']",
    eventSucess: ".oxd-toast",
    clickIcon: ".oxd-select-wrapper",
    labelInput: ".oxd-radio-input"
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
    cy.get(selectorList.genericField).eq(7).clear().type('2025-12-25')
    cy.get(selectorList.dateCloseButton).click()
    cy.get(selectorList.clickIcon).eq(0).click()
    cy.contains('Brazilian').click()
    cy.get(selectorList.clickIcon).eq(1).click()
    cy.contains('Single').click()
    cy.get(selectorList.genericField).eq(8).clear().type('2000-10-15')
    cy.get(selectorList.dateCloseButton).click()
    cy.get(selectorList.labelInput).eq(1).click()
    cy.get(selectorList.submitButton).eq(0).click({force: true})
    cy.get(selectorList.eventSucess)
    cy.get(selectorList.clickIcon).eq(2).click()
    cy.contains('O-').click()
    cy.get(selectorList.genericField).eq(9).clear().type('123')
    cy.get(selectorList.genericField).eq(10).clear().type('000')
    cy.get(selectorList.submitButton).eq(1).click({force: true})
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