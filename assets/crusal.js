var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n,cls) {
    showSlides(slideIndex += n,cls);
}

function currentSlide(n) {
    showSlides(slideIndex = n,'animate__zoomIn');
}

function showSlides(n,cls) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].className = slides[i].className.replace(" "+cls, "");
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
        
    }
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].className +=" "+cls;
    dots[slideIndex - 1].className += " active";
}