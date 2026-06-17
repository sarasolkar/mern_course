let testText = "The quick brown fox jumps over the lazy dog."
let startTime,endTime
function startTest(){
    document.getElementById("inputText").value = testText
    //reset user input and output
    let userInput = document.getElementById("userInput")
    userInput.value=""
    userInput.readOnly = false
    userInput.focus();

    document.getElementById("output").innerHTML = ""
    startTime = new Date().getTime();
}



function endTest(){
    endTime = new Date().getTime()
    document.getElementById("userInput").readOnly = true
    var elapsedTime = (endTime-startTime)/1000
    
    var userTypedText = document.getElementById("userInput").value
    var totalLength = userTypedText.length
    var typedWords = userTypedText.split(/\s+/).filter(function(word){
        return word !=="";
    }).length
    //counting no. of words "" is not a word and the regex makes it an array so we can access the elements from the array and also check the length of the array

    var wpm =0
    if(elapsedTime !== 0 && !isNaN(typedWords)){
        wpm=Math.round((typedWords/elapsedTime)*60)
    }
    //tofixed take 2 decimal places

    var outputDiv = document.getElementById("output")
    outputDiv.innerHTML=
    `<h2>Typing Test Result</h2>
    <p>Total Length: ${totalLength} </p>
    <p>Words Typed : ${typedWords} </p>
    <p>Time Elapsed : ${elapsedTime.toFixed(2)} </p>
    <p>Words Per Minute(WPM) : ${wpm}</p>
    
    `





}