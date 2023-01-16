const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});



/*const form =document.getElementById("form");
const username =document.getElementById("username");
const password =document.getElementById("password");
const confirmpassword =document.getElementById("confirmpassword");
const email =document.getElementById("email");
form.addEventListener('submit',e =>{
  e.preventDefault();
  checkInput();
});
function checkinput(){
  const usernameValue = username.Value.trim();
  const passwordValue = password.Value.trim();
  const emailValue = email.Value.trim();
  const confirmpasswordValue =confirmpassword.Value.trim();

  if(usernameValue === ''){
      setError(username, 'Username Cannot Be blank');
  }
  else{
    setSuccess(username);

  }

  if(emailValue == ''){
    setError(email, 'Email Cannot Be Blank');

  }
  else if(!isEmail(emailValue)){
    setError(email, 'Not a valid Email');

  }
  else{
    setSuccess(email);
  }

  if(passwordValue == ''){
    setError(password, 'Password Cannot Be Blank');
  }
  else{
    setSuccess(password);

  }
  if(confirmpasswordValue == ''){
    setError(confirmpassword, 'Password Cannot Be Blank');

  }
  else if(confirmpasswordValue !== passwordValue){
    setError(confirmpasswordValue, 'Password Does Not Match')
  }
  else{
    setSuccess(confirmpassword);
  }
}
function setError(input,message){
  const inputfield = input.parentElement;
  const small = input-field.querySelector('small');
  inputfield.className = 'input-field Error';
  small.innerText = message;
}
function isEmail(email){
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
};

function val(){
  var username=document.form.username.Value
  var password=/^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,})+$/
  if(/[a-zA-Z]/.test(username)){
    alert('Dont add special charecter in this input');
    return false;
  }
  else if(!password.test(document.form.password.Value)){
    alert('use one alphabets,small,caps,Special chars! and more than 8 character');
    return false;
  }
  else{
    return true;
  }
}*/
class FormValidation{ 
  FormValues = {
    username : "",
    email : "",
    password :"",
    confirmpassword :""
  }
  errorValues = {
    usernameErr : "",
    emailErr : "",
    passwordErr : "",
    confirmpasswordErr : ""

  }
  showErrorMsg(index,msg){
    const input_field1 = document.getElementsByClassName('input-field1')[index]
    input_field1.classList.add('error')
    input_field1.getElementsByTagName('span')[0].textContent = msg

  }
  showSuccessMsg(index){
    const input_field1 = document.getElementsByClassName('input-field1')[index]
    input_field1.classList.remove('error')
    input_field1.classList.add('success')

  }
  getInputs(){
    this.FormValues.username = document.getElementById('username').value.trim()
    this.FormValues.password = document.getElementById('password').value.trim()
    this.FormValues.email = document.getElementById('email').value.trim()
    this.FormValues.confirmpassword = document.getElementById('confirmpassword').value.trim()
    
  }
  validateUsername(){
    if(this.FormValues.username === ""){
      this.errorValues.usernameErr ="*Please Enter Your Name"
      this.showErrorMsg(0,this.errorValues.usernameErr)
    }else if(this.FormValues.username.length <= 4){
      this.errorValues.usernameErr = "*Username must be atleast 5 Characters"
      this.showErrorMsg(0,this.errorValues.usernameErr)
    }else if(this.FormValues.username.length >14){
      this.errorValues.usernameErr = "*Username should not exceeds 14 Characters"
      this.showErrorMsg(0,this.errorValues.usernameErr)
    }else{
      this.errorValues.usernameErr = ""
      this.showSuccessMsg(0)
    }
    

  }
  validateEmail(){
    //abc@gmail.co.in
    var regExp = /^([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,10})(\.[a-zA-Z]{2,8})?$/
    if(this.FormValues.email === ""){
      this.errorValues.emailErr ="*Please Enter Valid Email"
      this.showErrorMsg(1,this.errorValues.emailErr)
    }
    else if(!regExp.test(this.FormValues.email)){
        this.errorValues.emailErr = "*Invalid Email"
        this.showErrorMsg(1,this.errorValues.emailErr)
    } 
    else{
      this.errorValues.emailErr = ""
      this.showSuccessMsg(1)
    }
  }
  validatePassword(){
    const passwordExp=/^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,})+$/
    if(this.FormValues.password === ""){
      this.errorValues.passwordErr = "*Please Provaid a Password"
      this.showErrorMsg(2,this.errorValues.passwordErr)
    }
    else if(!passwordExp.test(this.FormValues.password)){
      this.errorValues.passwordErr = "*Requiring min 8 char and (A, z),(0-9),(!, %, @, #)"
      this.showErrorMsg(2,this.errorValues.passwordErr)
    }
    else if(this.FormValues.password.length <= 7){
      this.errorValues.passwordErr = "*Password must be atleast 8 Characters"
      this.showErrorMsg(2,this.errorValues.passwordErr)

    }
    else if(this.FormValues.password.length > 14){
      this.errorValues.passwordErr="*Password should not exceeds 15 Characters"
      this.showErrorMsg(2,this.errorValues.passwordErr)
    }
    else{
      this.errorValues.passwordErr=""
      this.showSuccessMsg(2)
    }

  }
  validateConfirmpassword(){
    
    if(this.FormValues.confirmpassword === ""){
      this.errorValues.confirmpasswordErr = "*Invalid Confirm Password"
      this.showErrorMsg(3,this.errorValues.confirmpasswordErr)
    }
    else if(this.FormValues.confirmpassword === this.FormValues.password && this.errorValues.passwordErr === ""){
        this.errorValues.confirmpasswordErr="*Password does not Match"
        this.showSuccessMsg(3,this.errorValues.confirmpasswordErr)

    }
    
    else if(this.errorValues.confirmpasswordErr){
      this.errorValues.confirmpasswordErr = "*Password does not Match"
      this.showErrorMsg(3,this.errorValues.confirmpasswordErr)

    }
   
    else{
      this.errorValues.confirmpasswordErr="*Password Must Match"
      this.showSuccessMsg(3,this.errorValues.confirmpasswordErr)
    }
  }
  /*alertMessage(){
   const {usernameErr, emailErr, passwordErr, confirmpasswordErr}=  this.errorValues
   if(usernameErr === "" && emailErr === "" && passwordErr === "" && confirmpasswordErr === ""){
    swal("Register Successfull", "ThankYou , "+this.FormValues.username, "success")
    console.log(this.FormValues)
    this.removeInputs()
   }else{
    swal("give Valid Inputs" , "Click ok to Continue" , "Error")
   }
  }*/
  removeInputs(){
    const input_field1 = document.getElementsByClassName('input-field1')
    console.log(input_field1)
  Array.from(input_field1).forEach(element => {
    element.getElementsByTagName('input')[0].value =""
    element.getElementsByTagName('span')[0].textContent =""
    element.classList.remove('success')
  })
  }

}
const ValidateUserInputs = new FormValidation()

document.getElementsByClassName('sign-up-form')[0].addEventListener('submit' , Event =>{
  Event.preventDefault()
  ValidateUserInputs.getInputs()
  ValidateUserInputs.validateUsername()
  ValidateUserInputs.validateEmail()
  ValidateUserInputs.validatePassword()
  ValidateUserInputs.validateConfirmpassword()
  //ValidateUserInputs.alertMessage()
})

//Sign in form validation 
class FormValidation1{
  FormValues1 = {
    username1 : "",
    password1 :"",
  }
  errorValues1 = {
    username1Err : "",
    password1Err : "",
  }
  showErrorMsg1(index,msg){
    const input_field = document.getElementsByClassName('input-field')[index]
    input_field.classList.add('error')
    input_field.getElementsByTagName('span')[0].textContent = msg

  }
  showSuccessMsg1(index,msg){
    const input_field = document.getElementsByClassName('input-field')[index]
    input_field.classList.remove('error')
    input_field.classList.add('success')

  }
  getInputs1(){
    this.FormValues1.username1 = document.getElementById('username1').value.trim()
    this.FormValues1.password1 = document.getElementById('password1').value.trim()
    
  }
  validateUsername1(){
    if(this.FormValues1.username1 === ""){
      this.errorValues1.username1Err ="*Please Enter Your Name"
      this.showErrorMsg1(0,this.errorValues1.username1Err)
    }else if(this.FormValues1.username1.length <= 4){
      this.errorValues1.username1Err = "*Username must be atleast 5 Characters"
      this.showErrorMsg1(0,this.errorValues1.username1Err)
    }else if(this.FormValues1.username1.length >14){
      this.errorValues1.username1Err = "*Username should not exceeds 14 Characters"
      this.showErrorMsg1(0,this.errorValues1.username1Err)
    }else{
      this.errorValues1.username1Err = ""
      this.showSuccessMsg1(0)
    }
    

  }

  validatePassword1(){
    if(this.FormValues1.password1 === ""){
      this.errorValues1.password1Err = "*Please Provaid a Password"
      this.showErrorMsg1(1,this.errorValues1.password1Err)
    }else if(this.FormValues1.password1.length <= 7){
      this.errorValues1.password1Err = "*Password must be atleast 8 Characters"
      this.showErrorMsg1(1,this.errorValues1.password1Err)

    }
    else if(this.FormValues1.password1.length > 14){
      this.errorValues1.password1Err="*Password should not exceeds 15 Characters"
      this.showErrorMsg1(1,this.errorValues1.password1Err)
    }
    else{
      this.errorValues1.password1Err=""
      this.showSuccessMsg1(1)
    }

  }
  
  alertMessage1(){
    const {username1Err, password1Err,}=  this.errorValues1
    if(username1Err === "" && password1Err === ""){
     swal("Login Successfull", "ThankYou , "+this.FormValues1.username1, "success")
     console.log(this.FormValues1)
     this.removeInputs()
    }else{
     swal("give Valid Inputs" , "Click ok to Continue" , "Error")
    }
   }
   removeInputs(){
     const input_field = document.getElementsByClassName('input-field')
     console.log(input_field)
   Array.from(input_field).forEach(element => {
     element.getElementsByTagName('input')[0].value =""
     element.getElementsByTagName('span')[0].textContent =""
     element.classList.remove('success')
   })
   }

}
const ValidateUserInputs1 = new FormValidation1()

document.getElementsByClassName('sign-in-form')[0].addEventListener('submit' , Event =>{
  Event.preventDefault()
  ValidateUserInputs1.getInputs1()
  ValidateUserInputs1.validateUsername1()
  ValidateUserInputs1.validatePassword1()
  ValidateUserInputs.alertMessage1()
})




//Forget Password .....................................................................................
class FormValidation2{ 
  FormValues2 = {
    username2 : "",
    email2 : "",
    password2 :"",
    confirmpassword2 :""
  }
  errorValues = {
    username2Err : "",
    email2Err : "",
    password2Err : "",
    confirmpassword2Err : ""

  }
  showErrorMsg2(index,msg){
    const input_field2 = document.getElementsByClassName('input-field2')[index]
    input_field2.classList.add('error')
    input_field2.getElementsByTagName('span')[0].textContent = msg

  }
  showSuccessMsg2(index){
    const input_field2 = document.getElementsByClassName('input-field2')[index]
    input_field2.classList.remove('error')
    input_field2.classList.add('success')

  }
  getInputs2(){
    this.FormValues2.username2 = document.getElementById('username2').value.trim()
    this.FormValues2.password2 = document.getElementById('password2').value.trim()
    this.FormValues2.email2 = document.getElementById('email2').value.trim()
    this.FormValues2.confirmpassword2 = document.getElementById('confirmpassword2').value.trim()
    
  }
  validateUsername2(){
    if(this.FormValues2.username2 === ""){
      this.errorValues.username2Err ="*Please Enter Your Name"
      this.showErrorMsg2(0,this.errorValues.username2Err)
    }else if(this.FormValues2.username2.length <= 4){
      this.errorValues.username2Err = "*Username must be atleast 5 Characters"
      this.showErrorMsg2(0,this.errorValues.username2Err)
    }else if(this.FormValues2.username2.length >14){
      this.errorValues.username2Err = "*Username should not exceeds 14 Characters"
      this.showErrorMsg2(0,this.errorValues.username2Err)
    }else{
      this.errorValues.username2Err = ""
      this.showSuccessMsg2(0)
    }
    

  }
  validateEmail2(){
    //abc@gmail.co.in
    var regExp = /^([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,10})(\.[a-zA-Z]{2,8})?$/
    if(this.FormValues2.email2 === ""){
      this.errorValues.email2Err ="*Please Enter Valid Email"
      this.showErrorMsg2(1,this.errorValues.email2Err)
    }
    else if(!regExp.test(this.FormValues2.email2)){
        this.errorValues.email2Err = "*Invalid Email"
        this.showErrorMsg2(1,this.errorValues.email2Err)
    } 
    else{
      this.errorValues.email2Err = ""
      this.showSuccessMsg2(1)
    }
  }
  validatePassword2(){
    const password2Exp=/^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,})+$/
    if(this.FormValues2.password2 === ""){
      this.errorValues.password2Err = "*Please Provaid a Password"
      this.showErrorMsg2(2,this.errorValues.password2Err)
    }
    else if(!password2Exp.test(this.FormValues2.password2)){
      this.errorValues.password2Err = "*Requiring min 8 char and (A, z),(0-9),(!, %, @, #)"
      this.showErrorMsg2(2,this.errorValues.password2Err)
    }
    else if(this.FormValues2.password2.length <= 7){
      this.errorValues.password2Err = "*Password must be atleast 8 Characters"
      this.showErrorMsg2(2,this.errorValues.password2Err)

    }
    else if(this.FormValues2.password2.length > 14){
      this.errorValues.password2Err="*Password should not exceeds 15 Characters"
      this.showErrorMsg2(2,this.errorValues.password2Err)
    }
    else{
      this.errorValues.password2Err=""
      this.showSuccessMsg2(2)
    }

  }
  validateConfirmpassword2(){
    
    if(this.FormValues2.confirmpassword2 === ""){
      this.errorValues.confirmpassword2Err = "*Invalid Confirm Password"
      this.showErrorMsg2(3,this.errorValues.confirmpassword2Err)
    }
    else if(this.FormValues2.confirmpassword2 === this.FormValues2.password2 && this.errorValues.password2Err === ""){
        this.errorValues.confirmpassword2Err="*Password does not Match"
        this.showSuccessMsg2(3,this.errorValues.confirmpassword2Err)

    }
    
    else if(this.errorValues.confirmpassword2Err){
      this.errorValues.confirmpassword2Err = "*Password does not Match"
      this.showErrorMsg2(3,this.errorValues.confirmpassword2Err)

    }
   
    else{
      this.errorValues.confirmpassword2Err="*Password Must Match"
      this.showSuccessMsg2(3,this.errorValues.confirmpassword2Err)
    }
  }
  /*alertMessage(){
   const {username2Err, email2Err, password2Err, confirmpassword2Err}=  this.errorValues
   if(username2Err === "" && email2Err === "" && password2Err === "" && confirmpassword2Err === ""){
    swal("Register Successfull", "ThankYou , "+this.FormValues2.username2, "success")
    console.log(this.FormValues2)
    this.removeInputs()
   }else{
    swal("give Valid Inputs" , "Click ok to Continue" , "Error")
   }
  }*/
  removeInputs2(){
    const input_field2 = document.getElementsByClassName('input-field2')
    console.log(input_field2)
  Array.from(input_field2).forEach(element => {
    element.getElementsByTagName('input')[0].value =""
    element.getElementsByTagName('span')[0].textContent =""
    element.classList.remove('success')
  })
  }

}
const ValidateUserInputs2 = new FormValidation2()

document.getElementsByClassName('sign-up-form')[0].addEventListener('submit' , Event =>{
  Event.preventDefault()
  ValidateUserInputs.getInputs2()
  ValidateUserInputs.validateUsername2()
  ValidateUserInputs.validateEmail2()
  ValidateUserInputs.validatePassword2()
  ValidateUserInputs.validateConfirmpassword2()
  //ValidateUserInputs.alertMessage()
})