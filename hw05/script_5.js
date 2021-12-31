/* 1. Создать функцию, генерирующую шахматную доску. Можно использовать любые html-теги. Доска должна быть верно разлинована на черные и белые ячейки. Строки должны нумероваться числами от 1 до 8, столбцы — латинскими буквами A, B, C, D, E, F, G, H. */
var canvas = document.getElementById("renderCanvas");
var ctx = canvas.getContext("2d");
var offset = 25;

ctx.font = "20px Arial";
ctx.fillText("8", offset / 2 - 5, offset * 2 - 5);
ctx.fillText("7", offset / 2 - 5, offset * 3 - 5);
ctx.fillText("6", offset / 2 - 5, offset * 4 - 5);
ctx.fillText("5", offset / 2 - 5, offset * 5 - 5);
ctx.fillText("4", offset / 2 - 5, offset * 6 - 5);
ctx.fillText("3", offset / 2 - 5, offset * 7 - 5);
ctx.fillText("2", offset / 2 - 5, offset * 8 - 5);
ctx.fillText("1", offset / 2 - 5, offset * 9 - 5);
// Letters
ctx.fillText("a", offset * 1 + 5, offset / 2 + 5);
ctx.fillText("b", offset * 2 + 5, offset / 2 + 5);
ctx.fillText("c", offset * 3 + 5, offset / 2 + 5);
ctx.fillText("d", offset * 4 + 5, offset / 2 + 5);
ctx.fillText("e", offset * 5 + 5, offset / 2 + 5);
ctx.fillText("f", offset * 6 + 5, offset / 2 + 5);
ctx.fillText("g", offset * 7 + 5, offset / 2 + 5);
ctx.fillText("h", offset * 8 + 5, offset / 2 + 5);

function even(row) {
    drawCell(offset, row, "black");
    drawCell(offset * 2, row, "rgb(220, 220, 220)");
    drawCell(offset * 3, row, "black");
    drawCell(offset * 4, row, "rgb(220, 220, 220)");
    drawCell(offset * 5, row, "black");
    drawCell(offset * 6, row, "rgb(220, 220, 220)");
    drawCell(offset * 7, row, "black");
    drawCell(offset * 8, row, "rgb(220, 220, 220)");
}
function not_even(row) {
    drawCell(offset, row, "rgb(220, 220, 220)");
    drawCell(offset * 2, row, "black");
    drawCell(offset * 3, row, "rgb(220, 220, 220)");
    drawCell(offset * 4, row, "black");
    drawCell(offset * 5, row, "rgb(220, 220, 220)");
    drawCell(offset * 6, row, "black");
    drawCell(offset * 7, row, "rgb(220, 220, 220)");
    drawCell(offset * 8, row, "black");
}
even(offset)
not_even(offset * 2)
even(offset * 3)
not_even(offset * 4)
even(offset * 5)
not_even(offset * 6)
even(offset * 7)
not_even(offset * 8)

// Borders
drawLine(offset * 9, offset, offset * 9, offset * 9); // Right border
drawLine(offset, offset, offset, offset * 9); // Left border
drawLine(offset, offset, offset * 9, offset); // Top border
drawLine(offset, offset* 9, offset* 9, offset * 9); // Botom border

function drawCell(x, y, color)
{
    ctx.beginPath();
    ctx.rect(x, y, 25, 25);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x0, y0, x1, y1)
{
    ctx.beginPath();       // Start a new path
    ctx.strokeStyle = "red";
    ctx.moveTo(x0, y0);    // Move the pen to (x0, y0)
    ctx.lineTo(x1, y1);    // Draw a line to (x1, y1)
    ctx.stroke();          // Render the path
}