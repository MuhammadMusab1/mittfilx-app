const form = document.querySelector('.search');

form.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
  e.preventDefault()
  const input = document.querySelector('input');
  if (input.value !== '') {
    getMovies(input.value).then(data => findEachMovie(data.Search));
    input.value = '';
  } else {
    return;
  }
}

function getMovies(movieName) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest
    request.addEventListener('readystatechange', () => {
      if (request.readyState === 4 && request.status === 200) {
        resolve(JSON.parse(request.response));
      } else if (request.readyState === 4) {
        reject('Something went wrong');
      }
    });
    request.open('GET', `https://www.omdbapi.com/?s=${movieName}&apikey=dd2f7ad9`);
    request.send();
  });
}

function getDataForOne(movieName) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest
    request.addEventListener('readystatechange', () => {
      if (request.readyState === 4 && request.status === 200) {
        resolve(JSON.parse(request.response));
      } else if (request.readyState === 4) {
        reject('Something went wrong');
      }
    });
    request.open('GET', `https://www.omdbapi.com/?t=${movieName}&plot=short&apikey=dd2f7ad9`);
    request.send();
  });
}


function findEachMovie(movieArr) {
  const titlesWrapper = document.querySelector('.titles-wrapper');
  movieArr.forEach(movie => {
    getDataForOne(movie.Title).then(data => console.log(data));
  });
}

