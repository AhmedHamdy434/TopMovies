import HorizontalScroll from "./components/HorizontalList";
import Landing from "./components/Landing";

export default function Home() {
  const topMoviesUrl = "https://imdb236.p.rapidapi.com/imdb/top250-movies";
  const popularMoviesUrl =
    "https://imdb236.p.rapidapi.com/imdb/most-popular-movies";
  const topShowsUrl = "https://imdb236.p.rapidapi.com/imdb/top250-tv";
  const popularShowsUrl = "https://imdb236.p.rapidapi.com/imdb/most-popular-tv";

  return (
    <>
      <Landing />
      <HorizontalScroll url={topMoviesUrl} />
      <HorizontalScroll url={popularMoviesUrl} />
      <HorizontalScroll url={topShowsUrl} />
      <HorizontalScroll url={popularShowsUrl} />
    </>
  );
}
