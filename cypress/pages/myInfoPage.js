class MyInfoPage {

    selectorList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            genericField: '.oxd-input--active',
            dateField: "[placeholder='yyyy-dd-mm']",
            genericComboBox: ".oxd-select-text--arrow",
            secondItemComboBox: ".oxd-select-dropdown > :nth-child(2)",
            thirdItemComboBox: ".oxd-select-dropdown > :nth-child(3)",
            forItemComboBox: ".oxd-select-dropdown > :nth-child(6)",
            dateCloseButton: ".--close",
            submitButton: ".orangehrm-left-space",
            generic: '.oxd-input',
            genderSelector: '.oxd-radio-wrapper',
        }

        return selectors
    }

    fillPersonalDetails(firstName, middleName, lastName) {
        cy.get(this.selectorList().firstNameField).clear().type(firstName)
        cy.get(this.selectorList().middleNameField).clear().type(middleName)
        cy.get(this.selectorList().lastNameField).clear().type(lastName)
    }

    fillEmployeeDetails(employeeId, otherId, driverLicenseNumber, driverLicenseDate) {
        cy.get(this.selectorList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorList().genericField).eq(5).clear().type(driverLicenseNumber)
        cy.get(this.selectorList().genericField).eq(6).clear().type(driverLicenseDate)
        cy.get(this.selectorList().dateCloseButton).click()
    }

    saveForm() {
        cy.get(this.selectorList().submitButton).eq(0).click({force: true})
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
        cy.get(this.selectorList().submitButton).eq(1).click({force: true})
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }

    fillStatus(dateBirth) {
        cy.get(this.selectorList().genericComboBox).eq(0).click({force: true})
        cy.get(this.selectorList().secondItemComboBox).click()
        cy.get(this.selectorList().genericComboBox).eq(1).click({force: true})
        cy.get(this.selectorList().thirdItemComboBox).click()
        cy.get(this.selectorList().generic).eq(8).clear().type(dateBirth) //Rever depois para usar a mesma classe que o outro GENERICFIELD
        cy.get(this.selectorList().genderSelector).eq(1).click()
    }
    fillCustomFields(testeField) {
        cy.get(this.selectorList().genericComboBox).eq(2).click({force: true})
        cy.get(this.selectorList().forItemComboBox).click()
        cy.get(this.selectorList().genericField).eq(9).clear().type(testeField)
    }    
}

export default MyInfoPage