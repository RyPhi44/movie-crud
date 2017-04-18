var count = 0;

$(document).ready(function(){

  $.get('/movies', result => {
    for (var i = 0; i < result.length; i++) {
      console.log(result);
      count++
      $('.movieTable').append(`
        <tr id=${count}>
          <td class="columnTitle"><a href='show.html?id=${count}'>${result[i].Title}</a></td>
          <td class="columnDirector">${result[i].Director}</td>
          <td class="columnYear">${result[i].Year}</td>
          <td class="columnRating">${result[i].Rating}</td>
          <td>
            <a href='edit.html?id=${count}' class="btn btn-default Edit">Edit</a>
          </td>
          <td><a href="#" class="btn btn-default Delete">Delete</a></td>
        </tr>`)
    }
  })
})

$(document).on('click', '.Delete', function(){
  var rowID = $(this).closest('tr').attr('id')
  console.log(rowID);
  $.ajax({
    url: `/movies/${rowID}`,
    type: 'delete',
    success: function(result){
      alert('Deleted!')
      location.reload()
    }
  })
})
