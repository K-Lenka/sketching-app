const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.rect(0, 0, 1400, 800);
ctx.stroke();
let isDrawing = false;
let prevX;
let prevY;

canvas.addEventListener('mousedown', () => {
    isDrawing = true;
});
canvas.addEventListener('mouseup', () => {
    isDrawing = false;
});
canvas.addEventListener('mousemove', ({
    x,
    y
}) => {
    if (!isDrawing) {
        prevX = null;
        prevY = null;
        return;
    }
    if (prevX && prevY) {
        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(x, y);
        ctx.stroke();
    }
    prevX = x;
    prevY = y;
});