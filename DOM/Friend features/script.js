var h = document.querySelector("h5");
var add = document.querySelector("#add");
var flag = 0;
add.addEventListener("click",function(){
  if(flag == 0){
h.innerHTML = "Friends";
  h.style.color="green";
  add.innerHTML = "Remove";
  add.style.color = "black";
  add.style.backgroundColor="#dadada"
  flag = 1;
  }else{
  h.innerHTML = "Stranger";
  h.style.color="red";
  add.innerHTML = "Add Friend";
  add.style.color = "white";
  add.style.backgroundColor="cadetblue"
  flag = 0;
  }
  
})

