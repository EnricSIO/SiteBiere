
const mediaQueryList = window.matchMedia('(max-width: 900px)');
function screenTest(e) {
    if (e.matches) {
       document.querySelector("#logNoResp").style.display = "none";
       document.querySelector("#logResp").style.display = "block";
    } else {
        document.querySelector("#logNoResp").style.display = "block";
        document.querySelector("#logResp").style.display = "none";
        
    }
  }
  mediaQueryList.addListener(screenTest);
  
  
function clickPopUp() {
    document.querySelector("#disableForm").disabled = false;
    document.querySelector(".popup").style.display = "none"
}

let exp = document.querySelectorAll(".exp")
for (i=0; i < exp.length ; i++) {
    exp[i].style.display = "none"
}
function showExp(id) {
    
  if (document.querySelector(".exp"+id).style.display == "none") {
        document.querySelector(".exp"+id).style.display = "block"
    }  
    else {
        document.querySelector(".exp"+id).style.display = "none"
    }

    
    


}