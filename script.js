document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxContent = document.querySelector(".lightbox-content");
  const closeBtn = document.querySelector(".lightbox .close");
  const galleryItems = document.querySelectorAll(".gallery-item img");

  // Open lightbox in full screen
  galleryItems.forEach(item => {
    item.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxContent.src = item.src;
    });
  });

  // Close lightbox
  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  // Close lightbox when clicking outside the image
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
});
