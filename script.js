"use strict";


const numberOfFilms = prompt('Сколько фильмов Вы уже посомтрели?',''),
    personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false,
    };

// for(let i=0;i<2; i++){
//     let a = prompt('Один из просмотренных фильмов?',''),
//     b = prompt('Насколько оцените его?','');
//     personalMovieDB.movies[a] = b;
// }


let a = prompt('Один из просмотренных фильмов?',''),
b = prompt('Насколько оцените его?',''),
c = prompt('Один из просмотренных фильмов?',''),
d = prompt('Насколько оцените его?','');
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;


console.log(personalMovieDB);