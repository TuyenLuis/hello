//var a = 6;
//function Show(){
//     b = 7;
//    console.log(a);
//    console.log(b);
//}
//
//Show();
//console.log(a);
//    console.log(global.b);



//function funcName(){
//    console.log("Hello Js!");
//}


//const funcName = function (){
//    console.log("Hello Js!");
//}
//funcName();
//
//const funcName = () => {}

//const -> let -> var

//setTimeout(function(){
//    console.log("5s");
//}, 5000);


//const countDown = function(count){
//    for(let i = count; i >= 0; i--){
//        setTimeout(function(){
//            console.log(i);
//        }, 1000*(count - i));
//    }
//}
//
//countDown(5);


//block scope

//function parentFunction(){
//    let a = 3;
//    if(1 + 1 == 2){
//        let b = 15;
//    }
//    function childFunction(){
//        let c = 25;
//    }
//    console.log(a);
//    console.log(b);
//    console.log(c);
//    
//}
//
//parentFunction();
var data = null;

const print = function(i){
    console.log(i);
}

const otherFunction = function(functionAsObj){
    setTimeout(function(){
        data = 15;
        functionAsObj(data);
    }, 1000);
    console.log(data);
}
otherFunction(print);