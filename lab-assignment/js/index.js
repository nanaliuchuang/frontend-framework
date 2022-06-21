$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: `https://629a06d67b866a90ec47e89f.mockapi.io/news`,
        dataType: "json",
        success: function(data,status){
            let newslist = "";
            console.log(data);

            for(let i = 0; i < data.length; i++){
                newslist += `  <div class="card mb-3" style="max-width: 640px;">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="${data[i].image}" class="w-100";  style="object-fit: cover; height: 200px;">
                  </div>
                  <div class="col-md-8">
                  <a href="details.html?id=${data[i].id}" style="text-decoration: none;" class="text-dark"><div class="card-body">
                      <h5 class="card-title">${data[i].cate}</h5>
                      <p class="card-text">${data[i].title}</p>
                      <p class="card-text"><small class="text-muted"> ${new Date(data[i].date_create).toLocaleString()}</small></p>
                    </div></a>
                  </div>
                  </div>
                </div>
     `;
            }
            $("#newslist").html(newslist);
        }
    })
})