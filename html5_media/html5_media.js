function playVideo() {
    let demoVideo = document.getElementById("video");
    demoVideo.textTracks[0].mode = "showing";
    demoVideo.play();
}

function noCaptions() {
    let demoVideo = document.getElementById("video");
    demoVideo.textTracks[0].mode = "hidden";
    demoVideo.play();
}