import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./Detail.module.css";
import logoImg from "../images/honglu.png";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState([true]);
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  console.log(movie);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div style={{ backgroundColor: "yellow" }}>
          <div className={styles.header}>
            <div>
              <Link to="/">
                <button className={styles.button}>뒤로가기</button>
              </Link>
            </div>
            <div>
              <img src={logoImg} width="100px" alt="logo" />
            </div>
            <div></div>
          </div>
          <h1 className={styles.title}>{movie.title}</h1>
          <img src={movie.medium_cover_image} />
        </div>
      )}
    </div>
  );
}
export default Detail;
