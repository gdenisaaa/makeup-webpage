document.getElementById('clickImg1').addEventListener('click', function(){
    scrollToSection('makeup');
});
document.getElementById('clickH1').addEventListener('click', function(){
    scrollToSection('makeup');
});
document.getElementById('clickImg2').addEventListener('click', function(){
    scrollToSection('browns');
});
document.getElementById('clickH2').addEventListener('click', function(){
    scrollToSection('browns');
});
document.getElementById('clickImg3').addEventListener('click', function(){
    scrollToSection('courses');
});
document.getElementById('clickH3').addEventListener('click', function(){
    scrollToSection('courses');
});

function scrollToSection(sectionId) {
    var targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
}

/////////////////navbar///////////////
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    // Add click event listener to each link
    navLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior

        // Get the target section's ID from the href attribute
        var targetId = this.getAttribute('href').substring(1);

        // Scroll to the target section
        document.getElementById(targetId).scrollIntoView({
          behavior: 'smooth'
        });

        // Close the navbar
        var navbarToggle = document.querySelector('.navbar-toggler');
        if (navbarToggle) {
          navbarToggle.click(); // Simulate a click on the navbar toggle button
        }
      });
    });
  });

  /////////////////////////////modal-gallery//////////////////////////
  document.addEventListener("click", function(e){
    if(e.target.classList.contains("gallery-item")){
      const src = e.target.getAttribute("src");
      document.querySelector(".modal-img").src = src;
      const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
      myModal.show();
    }
  })