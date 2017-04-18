var idEdit

$(document).ready(function () {

// Function to pull ID from URL of movie to Edit
  function getUrlParameter(sParam) {
    const sPageURL = decodeURIComponent(window.location.search.substring(1));
    const sURLVariables = sPageURL.split('&');
    let returner;

    sURLVariables.forEach((paraName) => {
      const sParameterName = paraName.split('=');
      if (sParameterName[0] === sParam) {
        returner = sParameterName[1] === undefined ? true : sParameterName[1];
      }
    });
    return returner;
  }

  idEdit = getUrlParameter('id')
  console.log(idEdit);

// Pulls movie info to Edit

$.get(`/movies/${idEdit}`, function (movie){

  $('#movieTitle').val(movie.Title)
  $('#movieDirector').val(movie.Director)
  $('#movieYear').val(movie.Year)
  $('#movieRating').val(movie.Rating)
  $('#movieURL').val(movie.URL)
  $('.moviePreview').append('<img class="moviePoster" src= '+ movie.URL +'>')
  })
})

// Edit Movie
$(document).on('click', '.saveButton', function (event){
  event.preventDefault()

  var editedMovie = {
    Title: $('#movieTitle').val(),
    Director: $('#movieDirector').val(),
    Year: $('#movieYear').val(),
    Rating: $('#movieRating').val(),
    "URL": $('#movieURL').val(),
    id: parseInt(idEdit)
  }

  console.log(editedMovie);
  console.log('idEdit', idEdit);
  $.ajax({
    url: `/movies/${idEdit}`,
    type: 'PUT',
    data: editedMovie,
    success: function (results){
      console.log('Edit Successful');
      $('.results').append('<p>' + $('#movieTitle').val() + ' Edit Successful</p>')
      $('.results').fadeOut(5000)

      location = "/titles.html"
    }
  })
})
