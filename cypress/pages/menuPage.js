class MenuPage {

    selectorList() {
        const selectors = {
            buttonAdmin: '[href="/web/index.php/admin/viewAdminModule"]',
            buttonPim: '[href="/web/index.php/pim/viewPimModule"]',
            buttonLeave: '[href="/web/index.php/leave/viewLeaveModule"]',
            buttonTime: '[href="/web/index.php/time/viewTimeModule"]',
            buttonRecruitment: '[href= "/web/index.php/recruitment/viewRecruitmentModule"]',        
            buttonMyInfo: '[href="/web/index.php/pim/viewMyDetails"]',
            buttonPerformance: '[href="/web/index.php/performance/viewPerformanceModule"]',
            buttonDashboard: '[href="/web/index.php/dashboard/index"]',
            buttonDirectory: '[href="/web/index.php/directory/viewDirectory"]',
            buttonClaim: '[href="/web/index.php/claim/viewClaimModule"]',
            buttonBuzz: '[href="/web/index.php/buzz/viewBuzz"]',
        }

        return selectors
    }

    accessAdmin() {
        cy.get(this.selectorList().buttonAdmin).click()
    }
    accessPim() {
        cy.get(this.selectorList().buttonPim).click()
    }
    accessLeave() {
        cy.get(this.selectorList().buttonLeave).click()
    }
    accessTime() {
        cy.get(this.selectorList().buttonTime).click()
    }
    accessRecruitment() {
        cy.get(this.selectorList().buttonRecruitment).click()
    }
    accessMyInfo() {
        cy.get(this.selectorList().buttonMyInfo).click()
    }
    accessPerformance() {
        cy.get(this.selectorList().buttonPerformance).click()
    }
    accessDashboard() {
        cy.get(this.selectorList().buttonDashboard).click()
    }
    accessDirectory() {
        cy.get(this.selectorList().buttonDirectory).click()
    }
    accessClaim() {
        cy.get(this.selectorList().buttonClaim).click()    
    }
    accessBuzz() {
        cy.get(this.selectorList())
    }

}

export default MenuPage