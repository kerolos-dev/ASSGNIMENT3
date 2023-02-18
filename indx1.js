var Name=document.getElementById('signupName')
var  Email=document.getElementById('signupEmail')
var  Password=document.getElementById('signupPassword')

var contanerporduct=[];
function addproducts(){
    if(regelx()== true){
        var producr={
            Name:Name.value,
            Email:Email.value,
            Password:Password.value,
        }
    
        contanerporduct.push(producr);
        regelx();
    localStorage.setItem('producruser',JSON.stringify(contanerporduct));
     shackproduct();
     Location.href='file:///F:/tamplets/ASSGNIMENT%20JS%203/indx.html'
    }
    else{

        alert('error for email regel pelass ')
    }
    
  


    }
function shackproduct(){
    if(Name.value == false && Email.value== false && Password.value){
        alert('error' )
    }

}

function shackproduct(){
    if(localStorage.getItem('producruser') != null){
        contanerporduct=JSON.parse(localStorage.getItem("producruser"));
        for(var i=0; i < contanerporduct.length ; i++ ){
            if(contanerporduct[i].Email.toLowerCase() == Email.value.toLowerCase()){
            // alert('user for email')
    
        }   
        else
        {
          alert ('erro')
        }
        }
       
        
        }

}






function regelx(){
var regelx=/^.d*$/;
if( regelx.test(Email.value) ==true){
    return true;
}
else{
    return false;   
}
}


// ----------------------------------{ling in}-------------------------------------------------------------------------------------

function verification(){
    if(localStorage.getItem('producruser') ==true){
        contanerporduct=JSON.parse(localStorage.getItem("producruser"));
       for(var i=0; i < contanerporduct.length ; i++ ){
        if(contanerporduct[i].Email.toLowerCase() == Email.value.toLowerCase() &&contanerporduct[i].Password.toLowerCase() == Password.value.toLowerCase()){
            Location.href= 'file:///F:/tamplets/ASSGNIMENT%20JS%203/indx2.html';
            var x =document.querySelector('#username')
            x.addEventListener('clike',+Name.value)

    }  

    else
    {
      alert ('erro')
    }
    }
    }

}
 
