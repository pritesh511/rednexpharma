import * as fs from "fs";

export default async function handler(req, res) {
  if (req.query.slug) {
    fs.readFile(`blogData/${req.query.slug}.json`, "utf-8", (err, data) => {
      res.status(200).json(JSON.parse(data));
    });
  }
}
