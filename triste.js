var prediction_1=""
var prediction_2=""

Webcam.set({
width:399,height:449,image_format:"jpg",jpg_quality:89
});

camera=document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot () {
    Webcam.snap(function(data_uri) 
{ document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
 });
}
console.log("verson_ml5");
classifier=ml5.imageClassifier("https://storage.googleapis.com/tm-model/SXbAakvwg/model.json",el_nombre_que_tu_quieras);
function el_nombre_que_tu_quieras(){
 console.log ("modelo_cargado") 
}
function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "La primera prediccion es " + prediction_1;
    speak_data_2 = "Y la segunda prediccion es " + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
  }

  function check() {
img=document.getElementById("captured_image");
classifier.classify(img,fer)
}
 function fer(error,result) {
 if (error) {
 console.log(error) 

 } else {
console.log(result);
document.getElementById("result_emotion_name").innerHTML=result[0].label;
document.getElementById("result_emotion_name2").innerHTML=result[1].label;

 }
    

 } 
