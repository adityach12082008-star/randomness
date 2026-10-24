const r = require("raylib");

function setup() {
    const screen = {
        WIDTH: 1000,
        HEIGHT: 800
    }
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(screen.WIDTH, screen.HEIGHT, "points in 2d");
    r.SetTargetFPS(60);

    const numberOfPoints = 1000;

    const arrayX = [];
    let countX = 0;
    while (countX < numberOfPoints) {
        let x = Math.random() * numberOfPoints;
        arrayX.push(x);
        countX++;
    }

    const arrayY = [];
    let countY = 0;
    while (countY < numberOfPoints) {
        let y = Math.random() * numberOfPoints;
        arrayY.push(y);
        countY++;
    }

    return { screen, arrayX, arrayY };
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

    r.EndDrawing();
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