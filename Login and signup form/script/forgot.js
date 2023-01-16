

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

document.getElementsByClassName('sign-in-form')[0].addEventListener('submit' , Event =>{
  Event.preventDefault()
  ValidateUserInputs.getInputs()
  ValidateUserInputs.validateUsername()
  ValidateUserInputs.validateEmail()
  ValidateUserInputs.validatePassword()
  ValidateUserInputs.validateConfirmpassword()
  //ValidateUserInputs.alertMessage()
})

