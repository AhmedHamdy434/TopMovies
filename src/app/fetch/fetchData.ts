export default async function fetchData(url: string) {
  const API_KEY = process.env.API_KEY;
  const options: RequestInit = {
    method: "GET",
    headers: {
      "x-rapidapi-key": API_KEY, // Now always a string
      "x-rapidapi-host": "imdb236.p.rapidapi.com",
    } as Record<string, string>, // Ensures headers are the correct type
    cache: "force-cache",
  };
  if (!API_KEY) {
    console.error("API key is missing. Check your .env.local file.");
    return null;
  }
  const response = await fetch(url, options);
  const result = await response.json();
  return result;
}

export type DataType = {
  id: string;
  url: string;
  primaryTitle: string;
  type: string;
  description: string;
  primaryImage: string;
  startYear: number;
  endYear: number | null;
  genres: string[];
  runtimeMinutes: number;
  averageRating: number;
  numVotes: number;
};
