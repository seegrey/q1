"use strict";

const numberOfFilms = +prompt("сколько", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if(personalMovieDB.count < 10){
    alert("Мало");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
    alert("Норм");
} else if (personalMovieDB.count > 30){
    alert("Много");
} else {
    alert("Error");
}


for (let x = 0; x<=1;){
    const a = prompt("ваш любимый фильм", "");
    const b = prompt("оценка фильма", "");

    if (a == null || b == null || a == undefined || b == undefined || a == "" || b == "" || a.length >= 50 || b.length >= 50){
        const a = prompt("ваш любимый фильм", "");
        const b = prompt("оценка фильма", "");
    } else {
        personalMovieDB.movies[a] = b;
        x++;
    }
    console.log(x);
}






console.log(personalMovieDB);
