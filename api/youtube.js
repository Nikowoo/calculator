export default function handler(req, res) {
  const userAgent = req.headers['user-agent']?.toLowerCase() || '';

  const isDiscord = userAgent.includes("discordbot/");
  const isFacebook = userAgent.includes("facebookexternalhit");
  const isInstagram = userAgent.includes("instagram");

  if (isDiscord || isFacebook || isInstagram) {
    res.writeHead(302, {
      Location: 'https://files.catbox.moe/mq8q15.gif'
    });
  } else {
    res.writeHead(302, {
      Location: 'https://m.youtube.com/watch?app=desktop&v=uZveL5vKG9A'
    });
  }

  res.end();
}
