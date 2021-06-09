
function preload() {

}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    image(video, 175, 120, 335, 255);
    tint(tint_color);

     fill(0, 128, 0);
     stroke(0, 128, 0);
     rect(90, 40, 490, 20);

     rect(90, 420, 490, 20);

     rect(570, 40, 20, 380);

     rect(90, 40, 20, 380);

     fill(255, 0, 0);
     stroke(255, 0, 0);
     circle(100, 50, 70);

     circle(580, 50, 70);

     circle(580, 430, 70);

     circle(100, 430, 70);
}

function take_snapshot() {
    save("student_name.png")
}

function filter_tint() {
    tint_color = document.getElementById("color_name").value;
}