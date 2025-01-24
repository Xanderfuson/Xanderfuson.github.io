document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxContent = document.querySelector(".lightbox-content");
  const closeBtn = document.querySelector(".lightbox .close");
  const galleryItems = document.querySelectorAll(".gallery-item img");

  // Open lightbox in full screen
  galleryItems.forEach(item => {
    item.addEventListener("click", () => {
      console.log("Image clicked:", item.src); // Debug: Log clicked image
      lightbox.style.display = "flex";
      lightboxContent.src = item.src;
    });
  });

  // Close lightbox
  closeBtn.addEventListener("click", () => {
    console.log("Close button clicked"); // Debug: Log close button click
    lightbox.style.display = "none";
  });

  // Close lightbox when clicking outside the image
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      console.log("Clicked outside image"); // Debug: Log click outside image
      lightbox.style.display = "none";
    }
  });
});
