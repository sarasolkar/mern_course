function performOperation(){
    let num1=parseInt(document.getElementById("input1").value)
    let num2=parseInt(document.getElementById("input2").value)

    if (!isNaN(num1) && !isNaN(num2)){
        let result1 =calculate(num1,num2,"divide");
        displayResult(result1)
        let result2 =calculate(num1,num2,"add");
        displayResult(result2)
        let result3 =calculate(num1,num2,"multiply");
        displayResult(result3)
        
    }
    else{
        displayResult('enter valid numbers')
    }

}

function calculate(a,b,operation){
    debugger;
    if(operation === "add"){
        return a+b;
    }
    else if(operation === "multiply"){
        return a*b;
    }
    else if(operation === "divide"){
        return a/b;
    }
}



function displayResult(result){
    const resultElement = document.getElementById("result")
    resultElement.textContent = `The result is : ${result}`
    console.log(result)
}