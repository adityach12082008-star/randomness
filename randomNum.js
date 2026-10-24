const r = require("raylib");

function setup() {
    const screen = {
        WIDTH: 1000,
        HEIGHT: 800
    }
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(screen.WIDTH, screen.HEIGHT, "random numbers");
    r.SetTargetFPS(60);

    const array = [];
    let count = 0;
    while (count < 100) {
        let x = Math.random() * 1000;
        array.push(x);
        count++;
    }

    return { screen, array };
}

function update(w) { }

function draw(w) {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    for (i = 0; i < w.array.length; i++)
        r.DrawRectangle(w.array[i], 0, 1, w.screen.HEIGHT, r.BLACK)

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