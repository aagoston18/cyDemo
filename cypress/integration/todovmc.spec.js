it ('should be able to add a new todo to the list', ()=> {
    cy.visit('http://todomvc-app-for-testing.surge.sh/')
// you can also add timeout to cy.get ->   cy.get('.new-todo', {timeout: 6000}).type("Clean room").type("{enter}")
    cy.get('.new-todo').type("Clean room").type("{enter}")
//get the label of the todo
    cy.get('label').should('have.text','Clean room')
    cy.get('.toggle').should('not.be.checked')
    // cy.get('label').should('have.text','Clean broom')
    cy.get('.toggle').click()
    cy.get('label').should('have.css','text-decoration-line','line-through')
    cy.get('.toggle').should('be.checked')
    cy.get('.clear-completed').click()
//check list does not have any children aka all items have been cleared
    cy.get('.todo-list').should('not.have.descendants','li')
    // cy.contains('Clear completed').click()
    // cy.contains('clear').click()
})