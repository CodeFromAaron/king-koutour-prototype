// Function to load PNG images into the .code-container and make them move in a circular path
function loadImages() {
    const codeContainer = document.querySelector('.code-container');
    const images = [];
    const radius = 26; // Radius of the circle
    const centerX = 50; // X-coordinate of the center of the circle
    const centerY = 50; // Y-coordinate of the center of the circle
    const numImages = 5; // Number of images

    for (let i = 0; i < numImages; i++) {
        const angle = (i / numImages) * 2 * Math.PI; // Calculate the angle for each image
        const x = centerX + radius * Math.cos(angle); // Calculate the x-coordinate
        const y = centerY + radius * Math.sin(angle); // Calculate the y-coordinate

        const img = document.createElement('img');
        img.src = `assets/clothes/item-${i}.png`;
        img.classList.add('item');
        img.style.width = '20%';
        img.style.height = 'auto';
        img.style.position = 'absolute';
        img.style.left = `${x}%`;
        img.style.top = `${y}%`;
        codeContainer.appendChild(img);
        images.push({ element: img, angle: angle });
    }

    function animate() {
        const speed = 0.005; // Speed of rotation
        images.forEach(image => {
            image.angle += speed; // Update the angle
            const x = centerX + radius * Math.cos(image.angle); // Calculate the new x-coordinate
            const y = centerY + radius * Math.sin(image.angle); // Calculate the new y-coordinate
            image.element.style.left = `${x}%`; // Set the new x-coordinate
            image.element.style.top = `${y}%`; // Set the new y-coordinate
        });
        requestAnimationFrame(animate);
    }

    animate();
}

// Call the function to load images
loadImages();
