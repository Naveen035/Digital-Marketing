//What we do

let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carousel-item1");
    let dots = document.getElementsByClassName("dot1");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].className = slides[i].className.replace(" active1", "");
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active1", "");
    }
    slides[slideIndex - 1].className += " active1";
    dots[slideIndex - 1].className += " active1";
}

// Add click event listeners to each carousel item
document.querySelectorAll('.carousel-item1').forEach((item, index) => {
    item.addEventListener('click1', () => currentSlide(index + 1));
});


//our project
function changeImage(imageIndex) {
    const mainImage = document.getElementById('main-image');
    const paragraphs = document.querySelectorAll('.paragraph');
    const images = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTja2BAxrW_IAxHi_xjMmhHRB3imInVK79o7kloeDFpASnN35mD",
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS8xbP05W-bqKadodw8FwMvxV3dj1HpnON5MJvLELGQ0iMhKBwu",
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT8XBceMbEyctQrp5yDTcKhz8MInSw_uOHxyF6XGJLmRTWr4S-R"
    ];

    mainImage.src = images[imageIndex - 1];

    paragraphs.forEach(paragraph => {
        paragraph.classList.remove('active');
    });
    paragraphs[imageIndex - 1].classList.add('active');
}

//Navbar links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.content-section');
  
    navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
  
        // Remove active class from all sections
        contentSections.forEach(section => {
          section.classList.remove('active');
        });
  
        // Add active class to the target section
        const targetId = this.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');
      });
    });
  });
  

  //contact us form
  function openPopup() {
    document.getElementById('form').style.display = 'flex';
  }
  
  function closePopup() {
    document.getElementById('form').style.display = 'none';
  }
  