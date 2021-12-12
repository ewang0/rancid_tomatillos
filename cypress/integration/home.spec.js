describe('Rancid Tomatillos Home Page', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
            statusCode: 200,
            body: {
                movies: [
                    {
                        average_rating: 6.625,
                        backdrop_path: "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
                        id: 694919,
                        poster_path: "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
                        release_date: "2020-09-29",
                        title: "Money Plane"
                    },
                    {
                        average_rating: 5.0,
                        backdrop_path: "https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",
                        id: 337401,
                        poster_path: "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
                        release_date: "2020-09-04",
                        title: "Mulan"
                    },
                    {
                        average_rating: 6.166666666666667,
                        backdrop_path: "https://image.tmdb.org/t/p/original//x4UkhIQuHIJyeeOTdcbZ3t3gBSa.jpg",
                        id: 718444,
                        poster_path: "https://image.tmdb.org/t/p/original//uOw5JD8IlD546feZ6oxbIjvN66P.jpg",
                        release_date: "2020-08-20",
                        title: "Rogue"
                    }
                ]
            }
        })
        cy.visit('http://localhost:3000');
    })

    it('should display a nav bar, a banner, and a movie section', () => {
        cy.get('nav').should('be.visible')
        .get('.banner').should('be.visible')
        .get('.movie-section').should('be.visible')
    })

    it('should have a nav bar that contains the links HOME and ABOUT', () => {
        cy.get('nav')
        .contains('HOME')

        cy.get('nav')
        .contains('ABOUT')
    }) 
    
    it.skip('should have a banner that contains a movie title, rating, description, budget, and runtime', () => {
        cy.get('.banner')
        .get('h2')
        .get('.ratingsContainer')
        .next().should('be.visible')
        .next().should('be.visible')
        .get('.banner-image-wrapper').should('be.visible')
    })

    it('should have three cards in the movie section', () => {
        cy.get('.card').should('exist')
        cy.get('.card').should('have.length', 3)
    })

    it('should load the cards image and information', () => {
        cy.get('.card').first().next()
        .get('img').should('be.visible')
        .get('.cardTitle').contains('Mulan')
        .get('.cardYear').contains('2020')
        .get('.reactStars').should('be.visible')
    })

    it('should open a modal corresponding to the movie card clicked', () => {
        cy.get('.card').first().next().click()
        .get('.modal-info').contains('Mulan')
        .get('.ratingsContainer')
        .get('p').contains('When the Emperor of China issues a decree that one man per family must serve in the Imperial Chinese Army to defend the country from Huns, Hua Mulan, the eldest daughter of an honored warrior, steps in to take the place of her ailing father. She is spirited, determined and quick on her feet. Disguised as a man by the name of Hua Jun, she is tested every step of the way and must harness her innermost strength and embrace her true potential.')
        .get('table').contains('Budget')
        .get('table').contains('$200000000')
        .get('table').contains('Revenue')
        .get('table').contains('$57000000')
    })

    it('should filter movies by genre', () => {
        cy.get('button').contains('Adventure').click()
            .get('.card').contains('Mulan')
    })

    it('when sorting, should not include movies outside of the genre', () => {
        cy.get('button').contains('Adventure').click()
            .get('.card').should('have.length', 1)
    })

    it('should find movies using a search query', () => {
        cy.get('.searchContainer').click().type('Rogue')
            .get('.card').contains('Rogue')

    })

})