const sideBarButton = document.querySelector("button.sidebar-button");
const sideBar= document.querySelector("div.sidebar");
const sideClose = document.querySelector(".side-close"); 


sideBarButton.addEventListener("click", function(){  
   sideBar.style.margin = "0";
});


  sideClose.addEventListener("click", function(){

    sideBar.style.marginLeft = "-535";
  });