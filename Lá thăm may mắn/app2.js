$(document).ready(function(){ 
    //Ẩn các lá phiếu
    $(".note").children("span").hide();

    //Thêm hai nút (button)
    $(".note").append("<button>Click Me!</button>")
    //Khi nút 1 được nhấn
    $(".note").first().children("button").click(function(){
      //Hiển thị lá phiếu tương ứng nút 1 được nhấn
      $(".note").first().children("span").show();
      // Loại bỏ nút nhấn
      $(".note").first().children("button").remove();
    });


    //Khi nút 2 được nhấn
    $(".note").last().children("button").click(function(){
      //Hiển thị lá phiếu tương ứng nút 2 được nhấn
      $(".note").last().children("span").show();
      // Loại bỏ nút nhấn
      $(".note").last().children("button").remove();
    });
})