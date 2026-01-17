/**
 * Spotify Refresh Token Generator
 *
 * This script helps you get a refresh token for the Spotify API.
 * Run this once to get your refresh token, then add it to your Vercel environment variables.
 *
 * Steps:
 * 1. Create a Spotify app at https://developer.spotify.com/dashboard
 * 2. Add http://127.0.0.1:3000/callback as a redirect URI in your app settings
 * 3. Copy your Client ID and Client Secret
 * 4. Run: SPOTIFY_CLIENT_ID=xxx SPOTIFY_CLIENT_SECRET=xxx node scripts/get-spotify-token.js
 * 5. Open the URL in your browser and authorize
 * 6. Copy the refresh_token from the output
 */

const http = require("http");
const https = require("https");
const { URL } = require("url");

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const PORT = 3000; // Change this if port is in use
const REDIRECT_URI = `http://127.0.0.1:${PORT}/callback`;
const SCOPES = "user-read-currently-playing user-read-recently-played";

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error("Error: Missing SPOTIFY_CLIENT_ID or SPOTIFY_CLIENT_SECRET");
  console.error(
    "Usage: SPOTIFY_CLIENT_ID=xxx SPOTIFY_CLIENT_SECRET=xxx node scripts/get-spotify-token.js"
  );
  process.exit(1);
}

const authUrl = `https://accounts.spotify.com/authorize?${new URLSearchParams({
  response_type: "code",
  client_id: CLIENT_ID,
  scope: SCOPES,
  redirect_uri: REDIRECT_URI,
}).toString()}`;

console.log("\n=== Spotify Token Generator ===\n");
console.log("1. Open this URL in your browser:\n");
console.log(authUrl);
console.log("\n2. Authorize the app when prompted");
console.log("3. You'll be redirected - wait for the token to appear here\n");

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (url.pathname === "/callback") {
    const code = url.searchParams.get("code");

    if (!code) {
      res.writeHead(400);
      res.end("Error: No code received");
      return;
    }

    // Exchange code for tokens
    const tokenData = new URLSearchParams({
      grant_type: "authorization_code",
      code: code,
      redirect_uri: REDIRECT_URI,
    }).toString();

    const authHeader = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString(
      "base64"
    );

    const tokenReq = https.request(
      "https://accounts.spotify.com/api/token",
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${authHeader}`,
          "Content-Type": "application/x-www-form-urlencoded",
          "Content-Length": tokenData.length,
        },
      },
      (tokenRes) => {
        let data = "";
        tokenRes.on("data", (chunk) => (data += chunk));
        tokenRes.on("end", () => {
          const tokens = JSON.parse(data);

          if (tokens.refresh_token) {
            console.log("\n=== SUCCESS! ===\n");
            console.log("Add these to your Vercel environment variables:\n");
            console.log(`SPOTIFY_CLIENT_ID=${CLIENT_ID}`);
            console.log(`SPOTIFY_CLIENT_SECRET=${CLIENT_SECRET}`);
            console.log(`SPOTIFY_REFRESH_TOKEN=${tokens.refresh_token}`);
            console.log("\n================\n");

            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(
              "<h1>Success!</h1><p>Check your terminal for the tokens. You can close this window.</p>"
            );
          } else {
            console.error("Error getting tokens:", tokens);
            res.writeHead(500);
            res.end("Error getting tokens - check terminal");
          }

          // Close server after a short delay
          setTimeout(() => {
            server.close();
            process.exit(0);
          }, 1000);
        });
      }
    );

    tokenReq.write(tokenData);
    tokenReq.end();
  } else {
    res.writeHead(404);
    res.end("Not found");
  }
});

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
  console.log("Waiting for authorization...\n");
});
