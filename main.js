status1="";

function setup()
{
canvas=createCanvas(350,300);
canvas.center();
video=createCapture(VIDEO);
video.hide();
video.size(350,300);
}

function start()
{
objectDetector=ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("status").innerHTML="Status - Detecting Objects";
objects=document.getElementById("text_box").value;
}

function modelLoaded()
{
console.log("model loaded");
status1=true;
}

function draw()
{
image (video,0,0,350,300);
}