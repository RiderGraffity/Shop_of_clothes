function showImage(imageNumber) {
    const allImages = document.querySelectorAll('.image-container');
    allImages.forEach(image => {
      image.classList.remove('active');
    });
    const selectedImage = document.getElementById(`image${imageNumber}`);
    selectedImage.classList.add('active');
  }
  document.addEventListener('DOMContentLoaded', () => {
    showImage(1);
  });