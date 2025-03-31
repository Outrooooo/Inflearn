import Vuex, { mapActions, mapGetters, mapMutations } from 'vuex'; // npm i vuex

export default new Vuex.Store({
// vue의 data와 비슷
  state:{

  }, 
  // vue의 computed와 비슷
  mapGetters:{

  }, 
  // state를 수정할 때 동기적으로 사용
  mapMutations:{

  }, 
  // 비동기를 사용할 때, 또는 여러 mutation을 연달아 실행할 때
  mapActions:{

  }
});