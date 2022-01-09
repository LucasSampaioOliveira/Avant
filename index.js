const buttonTop = document.querySelector('.back-to-top');


document.addEventListener(`scroll`, () => {
    if (window.scrollY < 200) {
      buttonTop.style.opacity = "0";
    } else {
      buttonTop.style.opacity = "1";
    }
  });


  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  
 buttonTop.addEventListener("click", scrollTop);