document.getElementById("click-btn").addEventListener("click",()=>{
    const username = document.getElementById('input-name').value ;
    const password =document.getElementById('input-password').value ;
    if(username==="admin" && password==="admin123"){
        alert('login succesfull')
        window.location.href="second.html"
    }
    else{
       alert('invalid password or username')
    }
    
});