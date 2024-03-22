document.addEventListener("DOMContentLoaded", (event) => {
  const allDetails = document.querySelectorAll(".acordeon-container details");
  allDetails.forEach((details) => {
    details.addEventListener("click", (e) => {
      allDetails.forEach((otherDetails) => {
        if (otherDetails !== details) {
          otherDetails.removeAttribute("open");
        }
      });
    });
  });
});
