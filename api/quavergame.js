import fetch from "node-fetch";

export default async function handler(req, res) {
  const ua = req.headers["user-agent"] || "";

  if (ua.includes("Discordbot")) {
    const gif = await fetch("https://i.postimg.cc/SKFXZj9K/quaver.gif");
    const buffer = await gif.arrayBuffer();

    res.setHeader("Content-Type", "image/gif");
    res.setHeader("Cache-Control", "public, max-age=31536000");
    res.status(200).send(Buffer.from(buffer));
    return;
  }

  res.writeHead(302, { Location: "quaver:/" });
  res.end();
}
