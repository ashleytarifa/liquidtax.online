let backToTopBtn = document.getElementById("backToTop");

backToTopBtn.onclick = function() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
};

// this code was made by ChatGPT, i dont know js for now