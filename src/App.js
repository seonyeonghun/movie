import React, { useState, useEffect } from "react";
import Title from "./components/Title";
import Movie from "./components/Movie";
const styles = {
  listStyle: "none",
};
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
      <Title count={movies.length} />
      {isLoading ? (
        "로딩중...."
      ) : (
        <ul style={styles}>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              coverImg={movie.large_cover_image}
              title={movie.title}
              rating={movie.rating}
              genres={movie.genres}
              summary={movie.summary}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
