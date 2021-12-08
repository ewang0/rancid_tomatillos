describe('Rancid Tomatillos Home Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })

    it('should load all movies when the site is visited', () => {
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
    })

})