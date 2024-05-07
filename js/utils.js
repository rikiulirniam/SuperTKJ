const drawRect = (x, y, w, h, color = 'black') => {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
}