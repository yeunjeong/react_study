import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Home() {
  let [loading, setLoading] = useState(true);
  let [movies, setMovies] = useState([]);

  // 영화 정보를 가져오는 비동기 함수
  // 비동기 함수는 함수 내의 작업이 백그라운드에서 동작된다.
  // 시간이 오래 걸리는 작업에 주로 사용한다.
  const getMovies = async () => {
    // 요청의 response를 json 형식으로 해석하여 변수 json에 저장한다.
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((item) => (
            <Movie
              key={item.id}
              title={item.title}
              coverImage={item.medium_cover_image}
              summary={item.summary}
              genres={item.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
