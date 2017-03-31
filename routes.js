const express = require('express');
const router = express.Router()
const low = require('lowdb');
const fileAsync = require('lowdb/lib/storages/file-async')
const db = low('db/movies.json', {
  storage: fileAsync
})


// ****************** CREATE ******************
//
// ^^^^^^^^^^Create Movie^^^^^^^^^^

router.post('/movies', (req, res) => {
 req.body.id = parseInt(req.body.id)
 db.get('movies')
 .push(req.body)
 .write()
 .then(result => {
   res.status(201).send(result)
 })
 .catch(error => {
   console.log(error);
 })
})





// ****************** READ ******************
//
// ^^^^^^^^^^Read Movie^^^^^^^^^^
router.get('/movies', (req, res) => {
  // Get route has to find movies
  const movies = db.get('movies')
  // send movies back as response
  res.send(movies)

})



// ^^^^^^^^^^Read One Movie^^^^^^^^^^

router.get('/movies/:id', (req ,res) => {
    const movieID = parseInt(req.params.id)
    const singleMovie = db.get('movies').find({id: movieID})
    res.send(singleMovie)
})

// ****************** Update ******************
//
// ^^^^^^^^^^Update Movie^^^^^^^^^^











// ****************** DELETE ******************
//
// ^^^^^^^^^^Delete Movie^^^^^^^^^^

router.delete('/movies/:id', (req, res) => {
  const movieID = parseInt(req.params.id)
  const singleMovie = db.get('movies').remove({id: movieID})
  .write()
  .then(result => {
    res.status(204).send(result)
  })
  .catch(error => {
    console.log(error);
  })
})


module.exports = router
