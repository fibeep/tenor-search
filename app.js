// Require Libraries
const express = require('express');

// App Setup
const app = express();

  // Require tenorjs near the top of the file
  const Tenor = require("tenorjs").client({
    // Replace with your own key
    "Key": "EXMPZEI54MRX", // https://tenor.com/developer/keyregistration
    "Filter": "high", // "off", "low", "medium", "high", not case sensitive
    "Locale": "en_US", // Your locale here, case-sensitivity depends on input
});

// Middleware
const exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Routes

// app.get('/', (req, res) => {
//     // Handle the home page when we haven't queried yet
//     term = ""
//     if (req.query.term) {
//         term = req.query.term
//     }
//     // Tenor.search.Query("SEARCH KEYWORD HERE", "LIMIT HERE")
//     Tenor.Search.Query(term, "10")
//         .then(response => {
//             // store the gifs we get back from the search
//             const gifs = response;
//             // pass the gifs as an object into the home page
//             res.render('home', { gifs })
//         }).catch(console.error);
//   })


// app.get('/greetings/:name', (req, res) => {
//   // grab the name from the path provided
//   const name = req.params.name;
//   // render the greetings view, passing along the name
//   res.render('greetings', { name });
// })

// RENDERING W/ HANDLEBARS
app.get('/', (req, res) => {
  res.render('home')
})

// ROUTE THAT ACCEPTS QUERY  PARAMETERS + REQ.BODY

app.get('/posts', (req, res) => {
  let requestBody = req.body
  console.log(requestBody)
})

// ROUTE THAT ACCEPTS ROUTE VARIABLES + USES REQ.PARAMS

app.get('/posts/:id', (req, res) => {
  let parameter = req.params.id
  console.log(parameter)
})

// NESTED ROUTE

app.get('/posts/new/:id', (req, res) => {
  let parameter = req.params.id
  console.log(parameter)
})




// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Gif Search Running");
});
