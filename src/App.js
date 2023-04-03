import React, { useState, useEffect } from "react";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=6&limit=30"
    ).then((response) => response.json());
    setMovies(json.data.movies);
    setIsLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []); // 한번만 실행 : 빈 의존성 배열을 지정
  return (
    <div className='App'>
      <h1>movies({movies.length})</h1>
      {isLoading ? (
        "로딩중...."
      ) : (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <img src={movie.large_cover_image} alt={movie.title} />
              <h2>영화제목</h2>
              <p>{movie.title}</p>
              <h2>평점</h2>
              <p>{movie.rating} / 10</p>
              <h2>장르</h2>
              <div>
                {movie.genres.map((genre, i) => (
                  <span key={i}>{genre}</span>
                ))}
              </div>
              <h2>줄거리</h2>
              <p>{movie.summary}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
