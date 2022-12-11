
noseX= 0;
noseY=0;

function preload(){
lipstick= loadImage("https://i.postimg.cc/8c6BvW48/with-background-removebg-preview.png")
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300)
    video.hide();

    poseNet= ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotPoses )
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results)
        noseX= results[0].pose.nose.x - 25;
        noseY= results[0].pose.nose.y + 20;
        console.log("nose x = " + results[0].pose.nose.x)
        console.log("nose y = " + results[0].pose.nose.y)
    }
}

function modelLoaded(){
    console.log("PoseNet is initialized")
}
function draw(){
image(video, 0, 0, 300, 300)
image(lipstick, noseX, noseY, 50, 30)
}
function take_snapshot(){
    save("Lipstick_Filter.png")
}