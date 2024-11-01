const cardNumber=document.querySelector('.cardNumber')
const cardNumberDiv= document.querySelectorAll('.cardNumber>div')
const holder = document.querySelector('.holder>.owner')
const expire=document.querySelector('.expire')
const ex = document.querySelectorAll('.ex')
const numbers = document.querySelectorAll('.numbers>input')
const cardHolderI= document.querySelector('.cardHolder>div>input')
const expireI=document.querySelectorAll('.Expiration>select')
const cvv2= document.querySelector('.cv>input')
const cvv2Card=document.getElementById('cv2')
const cardMain=document.querySelector('.card')
const numberDisplays = document.querySelectorAll('.cardNumber .number')
const time=document.getElementById('count')
const toggleSpan= document.querySelector('.toggle>span')
const toggleDiv= document.querySelector('.toggle')
const main = document.getElementById('main')

 // cvv2 rotation///
 cvv2.addEventListener('focus',()=>{
    cardMain.classList.add('rotate')
 })
 cvv2.addEventListener('blur',()=>{
    cardMain.classList.remove('rotate')
 })
  // replacing expiration date & cvv2 & holder//
  expireI[0].addEventListener('change',(e)=>{
    ex[0].innerHTML = e.target.value
  })
  expireI[1].addEventListener('change',(e)=>{
    ex[1].innerHTML = e.target.value
  })
  cvv2.addEventListener('input',(e)=>{
    cvv2Card.innerHTML = e.target.value
  })
  cardHolderI.addEventListener('input',(e)=>{
    holder.children[1].innerHTML = e.target.value
  })
  cardNumber.addEventListener('click',()=>{
    numbers[0].focus()
  })
  //card number focus & enter///
  numbers.forEach((val,i)=>{
    val.addEventListener('keyup',(e)=>{
        if(val.value.length>=4){
            if(i!=3){
                val.nextElementSibling.focus()
            }else{
                cardHolderI.focus()
            }
        }
        /////////backSpace///
        // console.log(e.keyCode);
        if(e.keyCode==8 && i!=0){
            if(val.value.length==0){
                val.previousElementSibling.focus()
            }
        }
    })
    val.addEventListener('blur',()=>{
        if(val.value.length>4){
            val.value = val.value.slice(0,4)
        }
    })
    // replacing numbers in input on card
    val.addEventListener('input', (e) => {
        numberDisplays[i].innerHTML = e.target.value.padEnd(4, '#'); 
        if(val.value.length>4){
            numberDisplays[i].innerHTML = val.value.slice(0,4)
        }
    });
  })
  ///focus on previous element cardHolderI///
  cardHolderI.addEventListener('keyup',(e)=>{
    if(e.keyCode==8 && cardHolderI.value.length == 0){
        numbers[3].focus()
    }
  })
  /////counter & save Card///
  let num = 0;
             let txt = localStorage.getItem('myCard');
             if (txt != null) {
                 numbers.forEach((val) => {
                     val.value = txt.slice(num, num += 4);
                 });
             }

  let s = 59;
 let m = 0;
 setInterval(() => {
     if (s != 0) {
         s--;
     } else {
         if (m != 0) {
             m--;
             s = 59;
         } else if (confirm('Do you want to save the card number?')) {
            
             const mySave = () => {
                 let flag = 0;
                 txt = '';
                 numbers.forEach((val) => {
                     if (val.value.length != 4) flag++;
                     txt += val.value;
                 });
                 console.log(txt);

                 if (flag == 0) {
                     localStorage.setItem('myCard', txt);
                 }
             };
             mySave();
         } else {
             location.assign('https://github.com/fatemeabdolmaleki');
         }
     }
     time.innerHTML = 'Time left: ' + m + ' : ' + s;
 }, 1000);

///////dark mode//////////

toggleDiv.addEventListener('click',()=>{
  toggleSpan.classList.toggle('left')
  main.classList.toggle('dark')
})

