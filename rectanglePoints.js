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
        x1: 200,
        x2: 300
    }

    const pointY = {
        y1: 100,
        y2: 200
    }

    const arrayX = [];
    let countX = 0;
    while (countX < 100) {
        let x = (Math.random() * pointX.x1) + 200;
        arrayX.push(x);
        countX++;
    }

    const arrayY = [];
    let countY = 0;
    while (countY < 100) {
        let y = (Math.random() * pointY.y1) + (pointY.y2 - pointY.y1);
        arrayY.push(y);
        countY++;
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
        r.DrawCircle(w.arrayX[i], w.arrayY[i], 5, color);

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