export default function handler(req, res) {
  const userAgent = req.headers['user-agent'] || '';
  if (userAgent.includes('Discordbot/')) {
    res.writeHead(302, {
      Location: 'https://timeful.neocities.org/ggss.png',
    });
  } else {
    res.writeHead(302, { Location: 'quaver://mapset/34529' });
  }
  res.end();
}
