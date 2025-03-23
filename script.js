const navbar = document.getElementById('navLinks')
const overlay = document.getElementById('overlay')

function openSidebar(){
    navbar.classList.add('show')
    overlay.style.display = "block";
}

function closeSidebar(){
    navbar.classList.remove('show')
    overlay.style.display = "none";
}


var modal = document.getElementById("myModal");
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captions = document.getElementById("caption");
var images = document.getElementsByClassName("galleryThumb")

for (var i = 0; i < images.length; i++){
    images[i].onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captions.innerHTML = this.alt;
    }
}
var span = document.getElementsByClassName("close")[0];

if(span) {
span.onclick = function() { 
    modal.style.display = "none";
}
}

