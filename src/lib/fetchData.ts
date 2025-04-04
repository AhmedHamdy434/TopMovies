export default async function fetchData(url: string) {
  const API_KEY = process.env.API_KEY;
  const options: RequestInit = {
    method: "GET",
    next: {
      revalidate: 600,
    },
    headers: {
      "x-rapidapi-key": API_KEY, // Now always a string
      "x-rapidapi-host": "imdb236.p.rapidapi.com",
    } as Record<string, string>, // Ensures headers are the correct type
  };
  if (!API_KEY) {
    console.error("API key is missing. Check your .env.local file.");
    return null;
  }
  const response = await fetch(url, options);
  const result = await response.json();
  return result;
}
export const baseUrl = "https://imdb236.p.rapidapi.com/imdb";
export const genresUrl = `${baseUrl}/genres`;
export const popularMoviesUrl = `${baseUrl}/most-popular-movies`;
export const popularTvUrl = `${baseUrl}/most-popular-tv`;
export const topMoviesUrl = `${baseUrl}/top250-movies`;
export const topTvUrl = `${baseUrl}/top250-tv`;

export type DataType = {
  id: string;
  primaryTitle: string;
  type: string;
  primaryImage?: string;
  startYear: number;
  endYear: number | null;
  genres: string[];
  averageRating: number;
  numVotes: number;
};

export type DataDetailType = {
  id: string;
  url: string;
  primaryTitle: string;
  type: string;
  description: string;
  primaryImage?: string;
  contentRating: string;
  startYear: number;
  endYear: number | null;
  genres: string[];
  runtimeMinutes: number;
  averageRating: number;
  numVotes: number;
  directors: [{ id: string; url: string; fullName: string }];
  writers: [{ id: string; url: string; fullName: string }];
  cast: [
    {
      id: string;
      url: string;
      fullName: string;
      job: string;
      characters: string[];
    }
  ];
};
