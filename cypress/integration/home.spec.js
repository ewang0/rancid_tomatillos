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
    
    it('should have a banner that contains a movie title, rating, description, budget, and runtime', () => {
        cy.get('.banner')
        .get('h2').should('be.visible')
        .get('.ratingsContainer')
        .next().contains('Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!')
        .next().contains('139 Minutes')
        .get('.banner-image-wrapper').should('be.visible')
    })

    it('should have three cards in the movie section', () => {
        cy.get('.card').should('exist')
        cy.get('.card').should('have.length', 3)
    })

    it('should open a modal corresponding to the movie card clicked', () => {
        cy.get('.card').first().click()
        .get('.modal-info').contains('Money Plane')
        .get('.ratingsContainer')
        .get('p').contains('A professional thief with $40 million in debt and his family\'s life on the line must commit one final heist - rob a futuristic airborne casino filled with the world\'s most dangerous criminals.')
        .next().contains('Budget')
        .next().contains('$0')
        .next().contains('Revenue')
    })

})