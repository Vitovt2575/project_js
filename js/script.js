"use strict";


const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function() {
		personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
	
		while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
		}
	},
	rememberMyFilms: function() {
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
	},
	detectPersonalLevel: function() {
		if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
			console.log('Просмотренно мало фильмов');
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
			console.log('Вы классический зритель');
		} else if (personalMovieDB.count >= 30) {
			console.log('Вы киноман');
		} else {
			console.log('Произошла ошибка!');
		}
	},
	showMyDB: function(hidden) {
		if (!hidden) {
			console.log(personalMovieDB);
		}
	},
	writeYourGenres: function() {
		for(let i = 0; i < 3; i++) {
			personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
			if (personalMovieDB.genres[i] != null && personalMovieDB.genres[i] != "") {
				console.log('done');
			} else {
				console.log('error');
				i--;
			}	
		}
		personalMovieDB.genres.forEach((item, i) => {
			console.log(`Любимый жанр ${i + 1} - это ${item}`);
		});
	},
	toggleVizibleMyDB: function() {
		if(personalMovieDB.privat) {
			personalMovieDB.privat = false;
		} else {
			personalMovieDB.privat = true;
		}
	}
};

// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.writeYourGenres();
// personalMovieDB.showMyDB(personalMovieDB.toggleVizibleMyDB);


