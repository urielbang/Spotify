let apiUrl;

if (process.env.NODE_ENV === "production") {
  apiUrl = "https://spotifyserver.onrender.com/api/v1/";
} else {
  apiUrl = "https://spotifyserver.onrender.com/api/v1/";
}

export { apiUrl };
