prediction_1 = "";
prediction_2 = "";
prediction_3 = "";

Webcam.set({
    height: 300,
    width: 350,
    image_format: "png",
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');


function snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = "<img id='captured_image' src='" + data_uri + "'/>";
    })
}

console.log("ml5 version is", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/H9hM4Vdci/model.json", modalReady)

function modalReady() {
    console.log("Modal Is Loaded")
}

function speak() {
    var synth = window.speechSynthesis;
    data_1 = "The first prediction is " + prediction_1;
    data_2 = "The Second Prediction is " + prediction_2;
    data_3 = "And the third Prediction is " + prediction_3;
    var utterThis = new SpeechSynthesisUtterance(data_1 + data_2+data_3 );
    synth.speak(utterThis);
}

function predict() {
    var stomache = document.getElementById("captured_image");
    classifier.classify(stomache, gotResult);
}
function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;
        document.getElementById("result_emotion_name3").innerHTML = results[2].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        prediction_3 = results[2].label;
        speak();
        if (results[0].label == "Happy") {
            document.getElementById("update_emoji").innerHTML = "&#128513;";
        }
        if (results[0].label == "Sad/deppresd") {
            document.getElementById("update_emoji").innerHTML = "&#128546;";
        }
        if (results[0].label == "Angry") {
            document.getElementById("update_emoji").innerHTML = "&#128545;";
        }
        if (results[0].label == "Stressed") {
            document.getElementById("update_emoji").innerHTML = "&#128533;";
        }
        if (results[0].label == "Laughter") {
            document.getElementById("update_emoji").innerHTML = "&#128518;";
        }
        if (results[1].label == "Happy") {
            document.getElementById("update_emoji2").innerHTML = "&#128513;";
        }
        if (results[1].label == "Sad/deppresd") {
            document.getElementById("update_emoji2").innerHTML = "&#128546;";
        }
        if (results[1].label == "Angry") {
            document.getElementById("update_emoji2").innerHTML = "&#128545;";
        }
        if (results[1].label == "Stressed") {
            document.getElementById("update_emoji2").innerHTML = "&#128533;";
        }
        if (results[1].label == "Laughter") {
            document.getElementById("update_emoji2").innerHTML = "&#128518;";
        }
        if (results[2].label == "Happy") {
            document.getElementById("update_emoji3").innerHTML = "&#128513;";
        }
        if (results[2].label == "Sad/deppresd") {
            document.getElementById("update_emoji3").innerHTML = "&#128546;";
        }
        if (results[2].label == "Angry") {
            document.getElementById("update_emoji3").innerHTML = "&#128545;";
        }
        if (results[2].label == "Stressed") {
            document.getElementById("update_emoji3").innerHTML = "&#128533;";
        }
        if (results[2].label == "Laughter") {
            document.getElementById("update_emoji3").innerHTML = "&#128518;";
        }
    }
}