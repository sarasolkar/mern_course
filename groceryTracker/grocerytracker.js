let g1,g2,g3;
function total(){
    g1 = parseFloat(document.getElementById('g1').value)
    g2 = parseFloat(document.getElementById('g2').value)
    g3 = parseFloat(document.getElementById('g3').value)
    let sum = g1+g2+g3;
    document.getElementById('result').innerText = `the total for all the groceries is ${sum}`
}