let count=0;
function increasecount(){
    count++;
    displaycount();
    checkcountvalue();
}
function displaycount(){
    document.getElementById("countDisplay").innerHTML = count;
}
function checkcountvalue(){
    if (count == 10){
        alert('u have 10 followers:)')
    } 
    else if (count ==20)
    {
        alert('u have 20 followers:0')
    }
}
function resetcount(){
    count = 0; 
    displaycount();
    alert('followers have been reset to 0')
}