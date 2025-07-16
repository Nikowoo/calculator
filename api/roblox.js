export default function handler(req, res) {
  const userAgent = req.headers['user-agent'] || '';

  if (userAgent.includes("Discordbot/")) {
    res.writeHead(302, {
      Location: 'https://files.catbox.moe/jit85h.png'
    });
  } else {
    res.writeHead(302, {
      Location: 'roblox://placeId=3855599929/'
    });
  }

  res.end();
}
