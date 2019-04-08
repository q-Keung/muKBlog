import store from '@/store'
window.addEventListener('resize', function(e) {
    console.log(e.currentTarget.innerWidth)
      if(e.currentTarget.innerWidth < 600){
        store.commit('setOpen',false);
      }else{
        store.commit('setDocked', true)
        store.commit('setOpen',true);
      }
    // 变化后需要做的事
  })