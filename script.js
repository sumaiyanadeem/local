// Adding an event listener to the button to change the background color when clicked
document.getElementById('changeColorButton').addEventListener('click', function() {
    document.body.style.backgroundColor = getRandomColor();
});

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
