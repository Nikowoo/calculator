export default function handler(req, res) {
  const userAgent = req.headers['user-agent'] || '';

  if (userAgent.includes("Discordbot/")) {
    res.writeHead(302, {
      Location: 'https://niko.horse/calc.jpeg'
    });
  } else {
    res.writeHead(302, {
      Location: 'calculator://'
    });
  }

  res.end();
}
