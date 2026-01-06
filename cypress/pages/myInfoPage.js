class MyInfoPage {

    selectorList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            genericField: '.oxd-input',
            dateCloseButton: ".--close",
            dateField: "[placeholder='yyyy-dd-mm']",
            submitButton: "[type='submit']",
            //eventSucess: ".oxd-toast",
            clickIcon: ".oxd-select-wrapper",
            labelInput: ".oxd-radio-input"
        }

        return selectors
    }

    personalDetails(firstName, middleName, lastName) {
        cy.get(this.selectorList().firstNameField).clear().type(firstName)
        cy.get(this.selectorList().middleNameField).clear().type(middleName)
        cy.get(this.selectorList().lastNameField).clear().type(lastName)
    }

    employeeDetails(employeeId, otherId, driverLicenseNumber, driverLicenseDate) {
        cy.get(this.selectorList().genericField).eq(4).clear().type(employeeId)
        cy.get(this.selectorList().genericField).eq(5).clear().type(otherId)
        cy.get(this.selectorList().genericField).eq(6).clear().type(driverLicenseNumber)
        cy.get(this.selectorList().genericField).eq(7).clear().type(driverLicenseDate)
        cy.get(this.selectorList().dateCloseButton).click()
    }
    statusDetails(dateBirth) {
        // Nationality
        cy.get(this.selectorList().clickIcon).eq(0).click().focus()
        cy.get('body').type('{downarrow}{enter}')
        

        // Marital Status
        cy.get(this.selectorList().clickIcon).eq(1).click().focus()
        cy.get('body').type('{downarrow}{enter}')

        // Date of Birth
        cy.get(this.selectorList().genericField).eq(8).clear().type(dateBirth)
        cy.get(this.selectorList().dateCloseButton).click()
        
        // Gender
        cy.get(this.selectorList().labelInput).eq(1).parent().click({ force: true })

        /*cy.get(this.selectorList().clickIcon).eq(0).click().then(()=>{
            cy.contains('.oxd-select-option','Algerian').should('exist').click({force: true})
        })
        cy.get(this.selectorList().clickIcon).eq(1).click().then(()=>{
            cy.contains('.oxd-select-option','Other').should('exist').click({force: true})
        })
        
        
        cy.get(this.selectorList().genericField).eq(8).clear().type(dateBirth)

        cy.get(this.selectorList().dateCloseButton).click()
        cy.get(this.selectorList().labelInput).eq(1).parent().should('exist').click({force: true})*/
    }
    /*customFields() {
        cy.get(this.selectorList().clickIcon).eq(2).click()
        cy.contains('O-').click()
        cy.get(this.selectorList().genericField).eq(9).clear().type('123')
    }*/

    /*saveForm() {
        cy.get(this.selectorList().submitButton).eq(0).click({force: true})
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
        cy.get(this.selectorList().submitButton).eq(1).click({force: true})
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }*/
}

export default MyInfoPage