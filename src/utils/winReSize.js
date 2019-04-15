import store from '@/store'
let winOpen;
window.addEventListener('resize', function(e) {
    console.log(e.currentTarget.innerWidth)
      if(e.currentTarget.innerWidth <= 600){
        winOpen = false;
      }else{
        winOpen = true;
      }
    // 变化后需要做的事
  })


  export {winOpen};