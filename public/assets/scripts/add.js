$(document).on('click', '.addButton', function(event) {
event.preventDefault()

$.get('/movies', function(movies){
  var movieLength = movies.length + 1


var addedMovie = {
  Title: $('#movieTitle').val(),
  Director: $('#movieDirector').val(),
  Year: $('#movieYear').val(),
  Rating: $('#movieRating').val(),
  "URL": $('#movieURL').val(),
  id: movieLength
}

$.ajax({
    url: '/movies',
    type: 'POST',
    data: addedMovie,
    success: function (results) {
      $('.results').append('<p>' + $('#movieTitle').val() + ' successfully added!</p>')
      $('.results').fadeOut(5000)

      location = "/titles.html"
      }
    })
  })
})
