function setup(){
canvas=createCanvas(500,500)
canvas.position(500,150)
video=createCapture(VIDEO)
video.size(500,500)
posenet=ml5.poseNet(video,modelloaded)
posenet.on('pose',gotresult)
}
function modelloaded(){
    console.log("modelisloaded")
}
function draw(){
background("grey")
}
function gotresult(results){
    if (results.length>0) {
   console.log(results)     
    }
}
