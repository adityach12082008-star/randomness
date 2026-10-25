const r = require("raylib");

function generatePoints(numberOfPoints, circle, arrayX, arrayY) {

    for (let counter = 0; counter < numberOfPoints; counter++) {

        let radius = (Math.random() * (circle.radius - circle.minRadius)) + circle.minRadius;
        let angle = (Math.random() * (circle.maxAngle - circle.minAngle)) + circle.minAngle;

        let x = radius * Math.cos(toRadian(angle)) + circle.x;
        let y = radius * Math.sin(toRadian(angle)) + circle.y;

        arrayX.push(x);
        arrayY.push(y);
    }
}

function toRadian(angle) {
    return angle * Math.PI / 180;
}

function setup() {
    const screen = {
        WIDTH: 1000,
        HEIGHT: 800
    }

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(screen.WIDTH, screen.HEIGHT, "points inside translated circle");
    r.SetTargetFPS(60);

    const numberOfPoints = 200;

    const circle = {
        radius: 100,
        minRadius: 0,
        maxAngle: 360,
        minAngle: 0,
        x: 500,
        y: 400
    }

    const arrayX = [];
    const arrayY = [];
    generatePoints(numberOfPoints, circle, arrayX, arrayY);

    return { screen, arrayX, arrayY, circle };
}

function update(w) { }

function draw(w) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    r.DrawCircleLines(w.circle.x, w.circle.y, w.circle.radius, r.WHITE);

    for (i = 0; i < w.arrayX.length; i++) {
        r.DrawCircle(w.arrayX[i], w.arrayY[i], 5, r.SKYBLUE);
    }

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