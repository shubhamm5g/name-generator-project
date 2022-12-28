let Name=document.getElementById("name")
let Enter=document.getElementById("enter")

function submit(){
    var age = document.getElementById("input").value;
    Name.textContent="Happy Birthday "+age+" 🎉"
}
function retry(){
    Name.textContent="Enter your Name"
}
