import * as fs from "fs";

export default async function handler(req, res) {
  let before_data = [];
  before_data = await fs.promises.readdir(`blogData`, "utf-8", (err, data) => {
    return data;
  });
  let after_data = [];
  for (let i = 0; i < before_data.length; i++) {
    let data = await fs.promises.readFile(
      "blogData/" + before_data[i],
      "utf-8"
    );
    after_data.push(JSON.parse(data));
  }
  //   console.log(after_data);
  res.status(200).json(after_data);
}
