$(document).ready(function(){ 
    //Ẩn các lá phiếu
    $(".note>span").hide();

    //Thêm hai nút (button)
    $(".note").append("<button>Click Me!</button>")
    //Khi nút 1 được nhấn
    $(".note:first > button").click({param: $(".note:first > button")},function(evt){
      //Hiển thị lá phiếu tương ứng nút 1 được nhấn
      $(".note:first>span").show();
      // Loại bỏ nút nhấn
      evt.data.param.remove();
    });


    //Khi nút 2 được nhấn
    $(".note:last > button").click({param: $(".note:last > button")},function(evt){
      //Hiển thị lá phiếu tương ứng nút 2 được nhấn
      $(".note:last>span").show();
      // Loại bỏ nút nhấn
      evt.data.param.remove();
    });
})