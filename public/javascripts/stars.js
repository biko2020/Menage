const allStars = document.querySelectorAll(".star") ;
// let afficherCounter = document.querySelector(".starCounter") ;

allStars.forEach((star, i) => {
  star.onclick = function () {
    let current_start_level = i + 1;
    // afficherCounter.innerText = `${current_start_level} / 5`;
    allStars.forEach((star, j) => {
      current_start_level >= j + 1
        ? (star.innerHTML = "&#9733")
        : (star.innerHTML = "&#9734");
    });
  };
});
