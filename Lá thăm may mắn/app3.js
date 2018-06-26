$(document).ready(function(){
    //Ẩn các lá phiếu
    $(".note").children("span").hide();
    //Thêm hai nút (button)
    $(".note").append("<button>Click Me!</button>");
    //Khi nút được nhấn
    $(".note").children("button").click(function(){
        //Hiển thị lá phiếu tương ứng nút được nhấn
        $(this).prev().show();
        // Loại bỏ nút nhấn
        $(this).remove();
    })
});