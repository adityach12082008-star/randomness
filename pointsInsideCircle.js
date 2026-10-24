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
    const circle = {
        minAngle: 0,
        maxAngle: 90,
        maxRadius: screen.WIDTH / 2,
        minRadius: 0;
    }

    const arrayX = [];
    const arrayY = [];

    for (let counter = 0; counter < numberOfPoints; counter++) {

        let radius = (Math.random() * (circle.radius - 0)) + 0;
        let angle = (Math.random() * (circle.maxAngle - circle.minAngle)) + circle.minAngle;

        let x = radius * Math.cos(toRadian(angle));

        let y = radius * Math.sin(toRadian(angle));

        console.log(y)

        arrayX.push(x);
        arrayY.push(y);

    }
    return { screen, arrayX, arrayY };
}
function toRadian(angle) {
    return angle * Math.PI / 180;
}

function update(w) { }

function draw(w) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);



    r.DrawCircleLines(0, 0, 500, r.WHITE);

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