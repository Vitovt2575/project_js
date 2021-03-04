"use strict";

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "0");
console.log(numberOfFilms);

const personalMovieDB = {
	count : numberOfFilms,
	movies : {},
	actors : {},
	genres : [],
	privat : false,
};

let movie = prompt("Один из последних просмотренных фильмов?", "");
let range = prompt("На сколько оцените его?", "");

personalMovieDB.movies[movie] = range;

console.log(personalMovieDB.movies);