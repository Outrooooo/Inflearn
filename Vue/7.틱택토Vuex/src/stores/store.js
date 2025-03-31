import Vuex, { mapActions, mapGetters, mapMutations } from 'vuex'; // npm i vuex

export const SET_WINNER = 'SET_WINNER'; // 변수로 mapMutations을 설정할 수도 있다. (동적 속성), 다른 파일에서 사용할 수 있게 export로 
export const CLICK_CELL = 'CLICK_CELL';
export const CHANGE_TURN ='CHANGE_TURN';
export const RESET_GAME = 'RESET_GAME';
export const NO_WINNER = 'NO_WINNER';

export default new Vuex.Store({
// vue의 data와 비슷
    state:{
        tableData : [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']   
        ],
        turn : 'O',
        winner : '',
    }, 
    // vue의 computed와 비슷
    mapGetters:{

    }, 
    // state를 수정할 때 동기적으로 사용
    mapMutations:{
        [SET_WINNER](state){ // Mutation 함수는 대문자로 짓는다.
            state.winner = winner;
        },
        [CLICK_CELL](state, {row, cell}){
            state.tableData[row][cell] = state.turn;
        },
        [CHANGE_TURN](state){
            state.turn = state.turn === 'O' ? 'X' : 'O';
        },
        [RESET_GAME](state){
            state.turn = 'O';
            state.tableData = [
                ['', '', ''],
                ['', '', ''],
                ['', '', '']   
            ]
        },
        // 무승부
        [NO_WINNER](state){
            state.winner ='';
        }
    }, 
    // 비동기를 사용할 때, 또는 여러 mutation을 연달아 실행할 때
    mapActions:{

    }
});