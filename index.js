const express = require("express");
const app = express();
const _PORT = process.env.PORT || 3000;
const {data} = require("./data.json");

// static
app.use(express.static("public"));

app.get("/", (req, resp) => {
    resp.status(404).json({err:"notfound"});
})

app.get("/:a", (req, resp) => {
    // resp.json(req.params.a);
    var link = data.filter(e=>{
        return e.name == req.params.a;
    });
    // console.log(link)
    if(!link.length) return resp.status(404).json({err:"notfound"});
    resp.redirect(link[0].url);
})

app.listen(_PORT,(e)=>{
    console.log(`Listening to PORT: ${_PORT}`);
})