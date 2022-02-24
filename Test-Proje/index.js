const axios = require("axios");
const exp = require("express");
const app = exp()
const cfg = require("./config.json");
let def = "31-A-31-M-31-K"
const db = require("quick.db");
function l(req,res){
let ch = axios.get(`${cfg.endPoint}/api/v1/lisans/${def}
if(ch.data.success === false) return res.json({message: "Lisans Hatalı"});

}

app.get("/", (req,res) => {
l(req,res)
});
