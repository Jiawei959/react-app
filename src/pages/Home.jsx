import MovieCard from "../components/MovieCard"

function Home() {

    const movies = [
        {id: 1, title: "John Wick", release_date: "2025"},
        {id: 2, title: "Terminator", release_date: "1990"},
        {id: 3, title: "Matrix", release_date: "1998"},
    ]

    return (
    <div className="home">
        <div className="movies-grid">
            {movies.map((movie) => (
             <MovieCard movie={movie} key={movie.id} />
        ))}
        </div>
    </div>
  );
}

export default Home