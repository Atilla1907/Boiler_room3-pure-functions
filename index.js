// Sample movie data
const movies = [
  { id: 1, title: "JoJo's Bizarre Adventure", genre: "Action", year: 2012, ratings: [9, 8, 10, 9, 8] },
  { id: 2, title: "Initial D", genre: "Racing", year: 1998, ratings: [8, 9, 7, 8, 8] },
  { id: 3, title: "One Piece", genre: "Adventure", year: 1999, ratings: [9, 10, 9, 8, 10] },
  { id: 4, title: "Dragon Ball Z", genre: "Action", year: 1989, ratings: [8, 9, 8, 7, 9] }
];

// Helper to calculate average rating
function calculateAverage(ratings) {
  let sum = 0;
  for (let r of ratings) {
    sum += r;
  }
  return sum / ratings.length;
}
// Add average rating to each movie
function addAverageRating(movie) {
  return {
    ...movie,
    averageRating: calculateAverage(movie.ratings)
  };
}
// Sort movies by average rating descending
function sortByRating(movies) {
  return [...movies].sort((a, b) => b.averageRating - a.averageRating);
}

// Higher order function: pipe
function pipe(...functions) {
  return function (input) {
    return functions.reduce((acc, fn) => fn(acc), input);
  };
}

// Process movies: add average rating and sort
const processMovies = pipe(
  (list) => list.map(addAverageRating),
  sortByRating
);

console.log(processMovies(movies));
// To run: node index.js