const input = document.querySelectorAll('.input');
const inputBtn = document.querySelector('.inputBtn');
const msg = document.querySelector('.msg');
const submited = document.querySelector('.submision');
const errormsg = document.querySelector('.errorMsg');
const subscriber = document.querySelector('subscriber');
const btn = document.querySelector('.btn');


inputBtn.addEventListener('click', function(e){
   if(input.value === '' || msg.value === ''){
       errormsg.textContent = 'Please Enter all Fields'
    errormsg.classList.add('error')
    setTimeout(function(){
        errormsg.remove()
    }, 3000)
   }
   else{ submited.classList.add('submited');
        setTimeout(function(){
            submited.textContent = "You will recieve a message shortly!";
            setTimeout(()=>{
                submited.classList.remove('submited')
            }, 3000)
        }, 3000);
      
   }
   

})


// btn.addEventListener('submit', () => {
//     subscriber.classList.add('subscribed')
//     setTimeout(function(){
//         subscriber.classList.remove('subscribed')
//     }, 2000)
// })
