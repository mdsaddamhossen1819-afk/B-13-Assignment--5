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






const allissuse = ()=>{
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues/"
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        // console.log(data.data);
        displayload(data)
    });
};
const displayload = (lessons)=>{
    const levelcontainer = document.getElementById("level-container");
    levelcontainer.innerHTML = "";
     
    lessons.forEach(lesson => {
        const div = document.createElement('div');
        div.innerHTML=`
         <div class="shadow-sm py-2 px-3 border-t border-fuchsia-600">
             <div class="flex justify-between py-3">
                <img src="/assets/Closed- Status .png" alt="">
               <button class="btn btn-soft rounded-3xl">LOW</button>
            </div>
            <div class="py-3">
                <p class="font-semibold pb-3">Fix navigation menu on mobile devices</p>
                <p class="text-gray-500">The navigation menu doesn't collapse properly on mobile devices...</p>
            </div>
            <div class="flex gap-3 space-y-4">                 <button class="btn btn-soft btn-error rounded-3xl">BUG</button>
            <button class="btn btn-soft btn-warning rounded-3xl">HELP WANTED</button>
            </div>
            <div class="border "></div>
            <div class="py-4 px-3">
                <p>#1by john_doe</p>
                <p>1/15/2024</p>
            </div>
        </div>
        

        `;
        levelcontainer.appendChild(div);
        
    });
   

};


allissuse();