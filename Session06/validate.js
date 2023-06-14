
const form = document.querySelector(".my-form");
const inputEles = document.querySelectorAll(".form-group");
const usernameEle = form.username;
const phoneEle = form.phone;
const emailEle = form.email;

form.addEventListener("submit",event =>{
    event.preventDefault();
    Array.from(inputEles).map((ele)=>{
        ele.classList.remove("success", "error");
    });
    let isValid = checkValidate();
    if (isValid) {
        alert("Submit successfull!!!");
    }
});

function checkValidate() {
    let usernameValue = usernameEle.value;
    let phoneValue = phoneEle.value;
    let emailValue = emailEle.value;
    let isCheck = true;

    if (usernameValue == '') {
        isCheck = false;
        // alert("Username is not empty");
        setError(usernameEle,"Username is not empty");
    }else{
        setSuccess(usernameEle);
    }
    if (phoneValue == '') {
        setError(phoneEle,"Phone is not empty");
        isCheck = false;
    }else{
        if (!isPhone(phoneValue)) {
            setError(phoneEle,"Phone is not format");
            isCheck = false;
        } else {
            setSuccess(phoneEle);
        }
    }
    if (emailValue == '') {
        setError(emailEle,"Email is not empty");
    }else{
        if (!isEmail(emailValue)) {
            setError(emailEle,"Email is not format");
            isCheck = false;
        } else {
            setSuccess(emailEle);
        }
    }
    return isCheck;
}

function setError(element, message) {
    let parentEle = element.parentNode;
    parentEle.classList.add("error");
    parentEle.querySelector("small").innerText = message;
    console.log(parentEle);
}

function setSuccess(element) {
    element.parentNode.classList.add("success");
}
function isPhone(number) {
    const pattern = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
    return pattern.test(number);
}

function isEmail(email) {
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;
    return pattern.test(email);
}

form.phone.addEventListener("keyup",event=>{
    const result = isPhone(event.target.value);
    if (result) {
        phoneEle.parentNode.classList.remove("error");
        setSuccess(phoneEle);
    }else{
        phoneEle.parentNode.classList.remove("success");
        setError(phoneEle,"");
    }
});

form.email.addEventListener("keyup",event=>{
    const result = isEmail(event.target.value);
    if (result) {
        emailEle.parentNode.classList.remove("error");
        setSuccess(emailEle);
    }else{
        emailEle.parentNode.classList.remove("success");
        setError(emailEle,"");
    }
});

form.username.addEventListener("keyup",event=>{
    const result = event.target.value;
    if (result != "") {
        usernameEle.parentNode.classList.remove("error");
        setSuccess(usernameEle);
    }else{
        usernameEle.parentNode.classList.remove("success");
        setError(usernameEle,"");
    }
});



