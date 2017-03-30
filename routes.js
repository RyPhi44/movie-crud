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

// router.post()





// ****************** READ ******************
//
// ^^^^^^^^^^Read Movie^^^^^^^^^^




// ^^^^^^^^^^Read One Movie^^^^^^^^^^








// ****************** Update ******************
//
// ^^^^^^^^^^Update Movie^^^^^^^^^^











// ****************** DELETE ******************
//
// ^^^^^^^^^^Delete Movie^^^^^^^^^^


module.exports = router
