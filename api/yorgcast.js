export default function handler(req, res) {
  const userAgent = req.headers['user-agent']?.toLowerCase() || '';

  const isDiscord = userAgent.includes("discordbot/");
  const isFacebook = userAgent.includes("facebookexternalhit");
  const isInstagram = userAgent.includes("instagram");

  if (isDiscord || isFacebook || isInstagram) {
    res.writeHead(302, {
      Location: 'https://files.catbox.moe/2vls81.png'
    });
  } else {
    res.writeHead(302, {
      Location: 'https://files.catbox.moe/3eex52.mp4'
    });
  }

  res.end();
}
