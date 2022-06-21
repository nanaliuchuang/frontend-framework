$(document).ready(function(){
  let searchParrams = new URLSearchParams(window.location.search);
  let idParam = searchParrams.get("id");
  
  $.ajax({
      type: "GET",
      url: `https://629a06d67b866a90ec47e89f.mockapi.io/news/${idParam}`,
      dataType: "json",
      success: function(data,status){
          let newsDetail = "";

          console.log("data: " + JSON.stringify(data));
          console.log("data.image :" + JSON.stringify(data.image));

          newsDetail += 
          `              
            <h1 style=" font-size: 1.7em;">${data.title}</h1>
      <div class="d-flex justify-content-between align-items-center">
      <p class="text-danger">${data.author}, <span class="p-1 created-date" style="color: #198754; font-size: 14px;"><i class="fa fa-clock-o" aria-hidden="true"></i> ${new Date(data.date_create).toLocaleString()}</span></p>
      <a href="#" style="text-decoration: none; font-size: 14px; border-radius: 20px;" class=" d-inline p-2 bg-danger text-white fw-semibold created-date">${data.cate}</a>
      </div>
      <p class="fw-semibold pt-3">${data.description}</p>
      <img src="./img/1.gif" alt="">
      <li style="color: #f00;" class="my-2"><a href="details.html?id=3" style="text-decoration: none;" class="fw-normal text-black-50">Hoàng Thùy hé lộ liều thuốc vực dậy bản thân sau trầm cảm</a></li>
      <li style="color: #f00;"><a href="details.html?id=4" style="text-decoration: none;" class="fw-normal text-black-50">Dream Concert 2022: Red Velvet thi nhau gây bão, tân binh IVE vừa biểu diễn đã có ngay thành tích khủng</a></li>
      <div class="text-center">
            <img src="${data.image}" class= "my-5 img-fluid">
          </div>
          <p>${data.content}</p>
            `;
          $("#newsDetail").html(newsDetail);
      }
  })
})