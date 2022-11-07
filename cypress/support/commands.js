// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add('login', ({ username, password }) => {
  cy.request('POST', 'http://localhost:3001/api/login', {
    username,
    password
  }).then(res => {
    window.localStorage.setItem('loggedNoteAppUser', JSON.stringify(res.body))
    cy.visit('http://localhost:3000')
  })
})

Cypress.Commands.add('createNote', ({ content, important }) => {
  cy.request({
    method: 'POST',
    url: 'http://localhost:3001/api/notes',
    body: { content, important },
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem('loggedNoteAppUser')).token}`
    }
  })
  cy.visit('http://localhost:3000')
})
