describe('Orange HRM Tests', () => {

  const selectorList = {
    username: "[name='username']",
    password: "[name='password']",
    loginButton: "[type='submit']",
    titleTopBar: '.oxd-topbar-header-breadcrumb-module',
    loginCredentilAlert: "[role='alert']"
  }

  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.username).type('Admin')
    cy.get(selectorList.password).type('admin123')
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.titleTopBar).contains('Dashboard')
  })

  it('Login - Fails', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.username).type('Test')
    cy.get(selectorList.password).type('test123')
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.loginCredentilAlert)
  })
})