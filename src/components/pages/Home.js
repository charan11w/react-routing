import axios from "axios";
import { useState } from "react";

function Home() {
  const [movies, setMovies] = useState([]);

  async function loadData() {
    const url = "https://adf67a75-4f19-47e7-8bb8-4890d65d03a4.mock.pstmn.io/movieslist";
    try {
      const result = await axios.get(url);
      setMovies(result.data.movies); 
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  }

  return (
    <div className="home-page container">
      <button className="btn btn-primary my-3" onClick={loadData}>
        Load Movies
      </button>

      <div className="row">
        {movies.map((movie, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.description || "No description available."}</p>
                <p><strong>Rating:</strong> {movie.rating || "Unknown"}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
