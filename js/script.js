"use strict";

let numberOfFilms;

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

personalMovieDB.movies[0] = prompt("ваш любимый фильм, '");
personalMovieDB.movies[1] = prompt("оценка фильма", "");


console.log(personalMovieDB.movies);
