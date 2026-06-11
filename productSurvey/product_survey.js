function submitfeedback(){
    //we get the values from the input wala thing and put it into variables
    const username= document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;    
    const experience = document.getElementById('experienceText').value;

    alert('Thank u for filling the feedback')

    //then we put these variables into spans where we want to display the data originally 
    document.getElementById('userName').innerHTML = username
    document.getElementById('userAge').innerHTML = age
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;
    document.getElementById('userExperience').innerHTML = experience
    document.getElementById('userInfo').style.display = 'block';
    
}
//we pass an event that occurs when we click on submit button
const submitButton = document.getElementById('submitBtn');
submitButton.onclick = submitfeedback
document.addEventListener('keydown',function(event){
    if(event.key==='Enter'){
        submitfeedback();
    }
})