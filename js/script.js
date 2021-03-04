"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "0");

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

const movie1 = prompt("Один из последних просмотренных фильмов?", "");
const range1 = prompt("На сколько оцените его?", "");
const movie2 = prompt("Один из последних просмотренных фильмов?", "");
const range2 = prompt("На сколько оцените его?", "");

personalMovieDB.movies[movie1] = range1;
personalMovieDB.movies[movie2] = range2;

console.log(personalMovieDB);
