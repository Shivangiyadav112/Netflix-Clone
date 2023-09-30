document.addEventListener('DOMContentLoaded', function () {
    // const ques = document.querySelector('.ques');
    // const ans = document.querySelector('.ans');

    // ques.addEventListener('click', function () {
    //     if (ans.style.display === 'none' || ans.style.display === '') {
    //         ans.style.display = 'block';
           
          
    //     } else {
    //         ans.style.display = 'none';
          
    //     }
    // });   
});

function showAns(id){
    let ansId = document.getElementById(id);
    if(ansId.style.display === 'none' || ansId.style.display === ''){
        ansId.style.display= 'block';
    }
    else{
        ansId.style.display = 'none';
    }
}

function checkEmail(id){

    let emailPattern = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi;
    let email = document.getElementById(id).value;
 
    if(emailPattern.test(email))
    {
        console.log("email is valid");
        document.getElementById(id).style.border = "2px solid green";
        document.querySelector(".error").innerHTML = "";
        window.location.href ="signUp.html";
        document.querySelector("signInput").value = email;
    }

    else{
        document.querySelector(".error").innerHTML = "email is required";
    // document.querySelector(".input1").classList.add('border-red-600');
        document.getElementById(id).style.border = "2px solid red";
    }

}

function Hide(){
    let step = document.getElementById("hideAfterClick");
    let step2 = document.getElementById("visibleAfterClick")

    step.style.display = 'none';
    step2.style.display = 'flex';

    
}



