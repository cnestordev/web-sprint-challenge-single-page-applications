describe('test whether forms work', () => {
    it('inputs should update', () => {
        cy.visit('/')

        //navigate to /pizza by clicking on button
        cy.get('button > a').click()

        //check a radio button
        cy.get('#original').click()

        //check multiple toppings
        cy.get('#pepperoni').click()
        cy.get('#mushrooms').click()
        cy.get('#pineapple').click()

        //test gluten free option
        cy.get('#glutenfree').click()

        //test text input
        cy.get('#name').type('Nestor C')
        cy.get('#special').type('well done baking')

        //test form submission
        cy.get('button').click()

        //test form was submitted
        cy.contains('Nestor C')
        cy.contains('mushrooms')
        cy.contains('pepperoni')
        cy.contains('pineapple')
    })
})