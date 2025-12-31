export default function handler(req, res) {
  const userAgent = req.headers['user-agent'] || '';

  if (userAgent.includes("Discordbot/")) {
    res.writeHead(302, {
      Location: 'https://i.postimg.cc/C1CxrNgN/Screenshot-2025-12-31-075512.png'
    });
  } else {
    res.writeHead(302, {
      Location: 'quaver:/'
    });
  }

  res.end();
}
