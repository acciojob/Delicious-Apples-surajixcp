//your code here
document.querySelectorAll('.photo-album img').forEach(img => {
    img.addEventListener('click', function() {
        const mainImage = document.querySelector('.photo-main img');
        mainImage.src = this.src;
    });
});

