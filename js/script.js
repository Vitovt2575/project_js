"use strict";

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};



for (let i = 0; i < 2; i++) {
	const movie = prompt("Один из последних просмотренных фильмов?", ""),
		range = prompt("На сколько оцените его?", "");

	if (movie != null && range != null && movie != "" && range != "" && movie.length < 50) {
		personalMovieDB.movies[movie] = range;
		console.log('done');
	} else {
		console.log('error');
		i--;
	}

}

if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
	console.log('Просмотренно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
	console.log('Вы киноман');
} else {
	console.log('Произошла ошибка!');
}

console.log(personalMovieDB);