const r = require("raylib");

function setup() {
    const screen = {
        WIDTH: 1000,
        HEIGHT: 800
    }
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(screen.WIDTH, screen.HEIGHT, "dcs");
    r.SetTargetFPS(60);


    const arrayX = [];
    let countX = 0;
    while (countX < 1000) {
        let x = Math.random() * 1000
        arrayX.push(x)
        countX++;
    }

    const arrayY = [];
    let countY = 0;
    while (countY < 1000) {
        let y = Math.random() * 1000
        arrayY.push(y)
        countY++;
    }

    return { screen, arrayX, arrayY };
}

function update(world) { }

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    const color = {
        r: 0,
        g: 0,
        b: 255,
        a: 90
    }

    for (i = 0; i < world.arrayX.length; i++)
        r.DrawCircle(world.arrayX[i], world.arrayY[i], 5, color)

    r.EndDrawing();
}

function loop(world) {
    while (!r.WindowShouldClose()) {
        update(world);
        draw(world);
    }
}

function main() {
    world = setup();
    loop(world);
}
main();