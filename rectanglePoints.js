const r = require("raylib");

function setup() {
    const screen = {
        WIDTH: 1000,
        HEIGHT: 800
    }

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(screen.WIDTH, screen.HEIGHT, "dcs");
    r.SetTargetFPS(60);

    const pointX = {
        x1: 400,
        x2: 800
    }

    const pointY = {
        y1: 500,
        y2: 700
    }
    const numberOfPoints = 1000;

    let count = 0;

    const arrayX = [];
    const arrayY = [];

    while (count < numberOfPoints) {
        let x = (Math.random() * (pointX.x2 - pointX.x1)) + pointX.x1
        arrayX.push(x);

        let y = (Math.random() * (pointY.y2 - pointY.y1)) + (pointY.y1)
        arrayY.push(y);

        count++;
    }

    return { screen, arrayX, arrayY, pointX, pointY };
}

function update(w) { }

function draw(w) {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    const color = {
        r: 0,
        g: 0,
        b: 255,
        a: 90
    }

    for (i = 0; i < w.arrayX.length; i++)
        r.DrawCircle(w.arrayX[i], w.arrayY[i], 2, color);

    drawPoints(w.pointX, w.pointY);

    r.EndDrawing();
}

function drawPoints(xCoord, yCoord) {
    r.DrawLine(xCoord.x1, yCoord.y1, xCoord.x2, yCoord.y1, r.BLACK);
    r.DrawLine(xCoord.x1, yCoord.y2, xCoord.x2, yCoord.y2, r.BLACK);

    r.DrawLine(xCoord.x2, yCoord.y1, xCoord.x2, yCoord.y2, r.BLACK);
    r.DrawLine(xCoord.x1, yCoord.y1, xCoord.x1, yCoord.y2, r.BLACK);
}

function loop(w) {
    while (!r.WindowShouldClose()) {
        update(w);
        draw(w);
    }
}

function main() {
    w = setup();
    loop(w);
}
main();