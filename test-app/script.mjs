import fs from "fs"
fs.readFile("./package.json", (err, data) => {
    console.table(JSON.parse(data.toString())["scripts"])
    console.table(JSON.parse(data.toString())["bin"])
})
