const k=require('./o');
const http=require('http');
const path=require("path");
const express=require('express');
const app=express();
const request=require('request');
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
setInterval(()=>{
  console.log("hello",1000);
})
app.get('/',(req,res)=>{
  res.render("h1");
});
/*app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.get('/',(req,res)=>{
  res.render("h1");
});



const server=http.createServer( (req,res)=>{
  async function logMovies() {
  const response = await fetch("https://api.publicapis.org/entries");
   const movies = await response.json();
  res.end(JSON.stringify(movies));
  }
  logMovies();
  
});
server.listen(3000,"0.0.0.0",()=>
  {
    console.log('jj');
  });
  */
app.listen(3000,()=>{
  console.log('hr');
});



const s=require('./o');

console.log(k.a(2));