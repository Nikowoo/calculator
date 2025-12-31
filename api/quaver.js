export default function handler(req, res) {
  const userAgent = req.headers['user-agent'] || '';

  if (userAgent.includes("Discordbot/")) {
    res.writeHead(302, {
      Location: 'https://i.postimg.cc/8zdX5fNm/image.png'
    });
  } else {
    res.writeHead(302, {
      Location: 'quaver:/'
    });
  }

  res.end();
}
