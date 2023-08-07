import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ title, coverImage, summary, genres }) {
  return (
    <div>
      <h1>
        <Link to="/movie">{title}</Link>
      </h1>
      <img src={coverImage} alt={title} />
      <p>{summary}</p>
      <ul>
        {genres.map((g, index) => (
          <li key={index}>{g}</li>
        ))}
      </ul>
    </div>
  );
}
Movie.propTypes = {
  title: PropTypes.string.isRequired,
  coverImage: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
