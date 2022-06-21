$(document).ready(function(){
    $.ajaxSetup({ cache: false });
    $('#search').keyup(function(){
     $('#result').html('');
     $('#state').val('');
     var searchField = $('#search').val();
     var expression = new RegExp(searchField, "i");
     $.get(
   
                       `https://629a06d67b866a90ec47e89f.mockapi.io/news`, 
                       function(data) {
      $.each(data, function(key, value){
       if (value.title.search(expression) != 1 || value.location.search(expression) != 1 )
       {
        $('#result').append('<li class ="bg-warning p-2 text-dark"><a class="dropdown-item" href="details.html?id='+value.id+'" style="font-size: 12px;"><img src="'+value.image+'" height="40" width="40" class="img-thumbnail" /> '+value.search+'</a></li>');
       }
      });   
     });
    });
    
    $('#result').on('click', 'li', function() {
     var click_text = $(this).text().split('|');
     $('#search').val($.trim(click_text[0]));
     $("#result").html('');
    });
   });