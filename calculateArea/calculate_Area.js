let l;
let w;
function calculateArea(){
    l = parseFloat(document.getElementById('length').value)
    //.value is used to retrieve the value entered in the id length
    w = parseFloat(document.getElementById('width').value)
    let area = l * w;
    document.getElementById('result').inner=`the area of rect is ${area}`;
    //innertext os used to modify text content of html element
}