var  Email=document.getElementById('signupEmail');
var  password=document.getElementById('signupPassword');
contanerporduct=[];
function addproducts(){
    var product={
        Email:Email.value,
        password:password.value,
    }
    contanerporduct.push('product')
    localStorage.setItem('productt',JSON.stringify(contanerporduct)

}