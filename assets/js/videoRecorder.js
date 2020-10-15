const recorderContainer = document.getElementById("jsRecordContainer");
const recordBtn = document.getElementById("jsRecordBtn");
const videoPreview = document.getElementById("jsVideoPreview");

let StreamObject;
let videoRecorder; 

const handleVideoData = (event) => {
    console.log(event)
    const {data: videoFile} = event;
    const link = document.createElement("a");
    link.href = URL.createObjectURL(videoFile);
    link.download = "recorded.webm";
    document.body.appendChild(link);
    link.click();

}

const startRecording = () => {
    videoRecorder = new MediaRecorder(StreamObject);
    videoRecorder.start();
    console.log(videoRecorder);
    videoRecorder.addEventListener("dataavailable", handleVideoData);
    recordBtn.addEventListener("click", stopRecording);
}

const stopRecording = () => {
    videoRecorder.stop();
    recordBtn.innerHTML = "Start recording";
    recordBtn.addEventListener("click", getVideo);
    recordBtn.removeEventListener("click", stopRecording);
}

const getVideo = async () => {
    try{
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: { width: 1280, height: 720 }
        });
        videoPreview.srcObject = stream;
        videoPreview.muted = true;
        videoPreview.play();
        recordBtn.innerHTML = "Stop recording";
        StreamObject = stream;
        startRecording();
    }catch(error){
        recordBtn.innerHTML = "😥Can't record video"
    } finally {
        recordBtn.removeEventListener("click", getVideo);
    }
}

function init() {
    recordBtn.addEventListener("click", getVideo)
};

if(recorderContainer) {
    init();
}