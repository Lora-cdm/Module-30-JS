var x = 5;

if(x>2){
    console.log("X eshte me i madh se 2")
}else{
    console.log("X eshte me i vogel se 2")
}

var y = 1;

if(y>2){
    console.log("Y eshte me i madh se 2")
}else{
    console.log("Y eshte me i vogel se 2")
}

var input = document.getElementById('inputid')
var btn = document.getElementById('btnid')
var text = document.getElementById('textid')

button.onclick=function(){
    text.innerHTML=input.value
}