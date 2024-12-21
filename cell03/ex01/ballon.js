const balloon = document.getElementById("balloon");

let size = 200;
const maxSize = 420;
const minSize = 200; 
const sizeIncrement = 10; 
const sizeDecrement = 5; 

const colors = ["red", "green", "blue"];
let colorIndex = 0; 

// กดแล้วไปสีต่อไป
function getNextColor() {
    colorIndex = (colorIndex + 1) % colors.length;
    return colors[colorIndex];
}

// สีก่อนหน้า
function getPreviousColor() {
    colorIndex = (colorIndex - 1 + colors.length) % colors.length;
    return colors[colorIndex];
}

balloon.addEventListener("click", () => {
    size += sizeIncrement;
    
    if (size > maxSize) {
        size = minSize;
        colorIndex = 0;
    }

    balloon.style.width = `${size}px`;
    balloon.style.height = `${size}px`;
    balloon.style.backgroundColor = getNextColor();
});


balloon.addEventListener("mouseleave", () => {
    size = Math.max(size - sizeDecrement, minSize);
    
    balloon.style.width = `${size}px`;
    balloon.style.height = `${size}px`;
    balloon.style.backgroundColor = getPreviousColor();
});
