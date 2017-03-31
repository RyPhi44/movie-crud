var count = 0;

$(document).ready(function(){

  $.get('/movies', result => {
    for (var i = 0; i < result.length; i++) {
      console.log(result);
      count++
      $('.movieTable').append(`
        <tr id=${count}>
          <td>${result[i].Title}</td>
          <td>${result[i].Director}</td>
          <td>${result[i].Year}</td>
          <td>${result[i].Rating}</td>
          <td>
            <a href='edit.html?id=${count}'><button type="button" class="Edit">Edit</button></a>
          </td>
          <td><button type="button" class="Delete">Delete</button></td>
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
    }
  })
})
