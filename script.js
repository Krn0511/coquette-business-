function toggleMenu(){

const nav = document.getElementById("navLinks");

if(nav.style.display === "flex"){
nav.style.display = "none";
}else{
nav.style.display = "flex";
}

}


function orderProduct(product){

const formURL = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?usp=pp_url&entry.123456789=" + encodeURIComponent(product);

window.open(formURL,"_blank");

}
