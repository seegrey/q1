"use strict";

const numberOfFilms = prompt("сколько", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// personalMovieDB.movies[0] = prompt("ваш любимый фильм, '");
const a = prompt("ваш любимый фильм", "");
const b = prompt("оценка фильма", "");
const c = prompt("ваш любимый фильм", "");
const d = prompt("оценка фильма", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;


console.log(personalMovieDB);
