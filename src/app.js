const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 3000;

const publicDirectoryPath=path.join(__dirname,'../public');
app.use(express.static(publicDirectoryPath))

app.set("view engine", "hbs");
const viewsPath =  path.join(__dirname, "../temp1/views")
app.set("views",viewsPath);

const partialsPath =  path.join(__dirname, "../temp1/partials")
hbs.registerPartials(partialsPath);
hbs.registerPartials(partialsPath);

app.get('/', (req, res) => {
  res.render('index',{
    title: "HOME",
    desc: "home page content"
  })
})
app.get('/service', (req, res) => {
  res.render('service',{
    title: "SERVICE",
    desc: "service page content"
  })
})
app.get('/team', (req, res) => {
  res.render('team',{
    title: "TEAM",
    name: "Mahmoud",
    image:"image/download.png",
    city: "cairo",
    desc: "team page content"
  })
})
app.get('/about', (req, res) => {
  res.render('about',{
    title: "ABOUT",
    desc: "about page content"
  })
})
app.get('/contact', (req, res) => {
  res.render('contact',{
    title: "CONTACT",
    desc: "contact page content"
  })
})











app.listen(port, () => {
  console.log(`server is up on port ${port}`);
});
