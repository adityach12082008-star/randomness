const r = require("raylib");

function setup() {
    const screen = {
        WIDTH: 1000,
        HEIGHT: 800
    }
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(screen.WIDTH, screen.HEIGHT, "Random-Between Two Points");
    r.SetTargetFPS(60);

    const min = 400;
    const max = 750
    const array = [];
    let count = 0;
    while (count < 100) {
        let x = (Math.random() * min) + (max - min)
        array.push(x)
        count++;
    }

    return { screen, array };
}

function update(world) { }

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    for (i = 0; i < world.array.length; i++)
        r.DrawRectangle(world.array[i], 0, 1, world.screen.HEIGHT, r.BLACK)

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