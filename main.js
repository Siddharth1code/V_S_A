var SpeechRecognition=window.webkitSpeechRecognition;
var Recognition= new SpeechRecognition();
var textbox= document.getElementById("TB");

function start()
{
    textbox.innerHTML="";
    Recognition.start();
}
Recognition.onresult= function (event)
{
var content=event.results[0][0].transcript;
textbox.innerHTML=content;
if (content=="take my selfie")
{
    speak();

}
}

function speak()
{
    var synth= window.speechSynthesis;

    speak_data=document.getElementById("TB").value;

    var utterThis= new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    Webcam.attach(camera);
    setTimeout(function()
    {
        take_selfie();
        save();

    },5000);

    Webcam.set({
        width:360,
        height:250,
        image_format:'png',
        png_quality:90
    });
    camera=document.getElementById("camera");
}
function take_selfie()
 {
      Webcam.snap(function(data_uri) 
      { 
          document.getElementById("output").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
         });
 }

function save()
{
    link=document.getElementById("link");
    image=document.getElementById("selfie_image").src;
    link.href= image;
    link.click();
}