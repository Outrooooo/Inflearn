<template>
    <div>
        <div>{{ turn }}님의 턴입니다.</div>
        <table-component :tableData="tableData"/>
        <div v-if="winner">{{ winner }}님의 승리입니다.</div>        
    </div>
</template>

<script setup>
    // provide로 inject 항목 사용할 수 있게
    import {ref, provide} from 'vue';
    import TableComponent from './TableComponent.vue';

    const turn = ref('O');
    const winner = ref('');
    const changeTurn = () =>{
        turn.value = turn.value === 'O' ? 'X' : 'O';
    };

    const tableData = ref([
        ['', '', ''],
        ['', '', ''],
        ['', '', '']   
    ]);

    const setTableData = (rowIndex, cellIndex) =>{
        // 이미 선택된 곳인경우
        if(tableData.value[rowIndex][cellIndex]){
            console.log('이미선택함');
            return true;
        }
        else{
            tableData.value[rowIndex][cellIndex] = turn.value;
            return false;
        }
    };

    // 승리 여부 체크
    const checkTableData = (rowIndex, cellIndex) =>{
        const table = tableData.value; // table, current 데이터 비어있음
        console.log(table);
        const current = tableData.value[rowIndex][cellIndex];

        console.log(`Clicked Cell Value: ${current}`);

        // 빈 칸이면 승리 체크할 필요 없음
        if (current === '') return false;

        // 가로 체크
        if (table[rowIndex][0] === current && table[rowIndex][1] === current && table[rowIndex][2] === current) {
            return true;
        }

        // 세로 체크
        if (table[0][cellIndex] === current && table[1][cellIndex] === current && table[2][cellIndex] === current) {
            return true;
        }

        // 대각선 (↘) 체크
        if (rowIndex === cellIndex && table[0][0] === current && table[1][1] === current && table[2][2] === current) {
            return true;
        }

        // 대각선 (↙) 체크
        if (rowIndex + cellIndex === 2 && table[0][2] === current && table[1][1] === current && table[2][0] === current) {
            return true;
        }

        return false;
    };

    provide('turn',turn);
    provide('changeTurn',changeTurn);    
    provide('tableData',tableData);
    provide('setTableData',setTableData);
    provide('checkTableData',checkTableData);
    provide('winner',winner);
    

    /* VUE2 방식
    export default {
        components:{
            'table-component' :TableComponent,
        },        
        data(){
            return{
                tableData:[
                    ['', '', ''],
                    ['', '', ''],
                    ['', '', ''],                    
                ],
                turn: 'O',

            };
        },
        computed:{
            
        },
        methods: {
            // 20250331 EvnetBus 사용
            onClickTd(){
                console.log('현재 턴:',turn.value);
                console.log('현재 인덱스:',props.rowIndex, props.cellIndex);

                // Click Cell Table Data Update
                if(setTableData(props.rowIndex,props.cellIndex) === true){
                    return;
                }

                // 승리
                if(checkTableData(props.rowIndex,props.cellIndex) === true){
                    winner.value = turn.value;
                    // winner = turn;
                    turn.value = 'O';
                    tableData.value = [['', '', ''],['', '', ''],['', '', '']];

                    console.log('승자는 : ',winner.value);
                }
                // 무승부
                else{
                    let all = true; // all = true : 무승부
                    tableData.value.forEach((row) => {
                        row.forEach((cell) =>{
                            if(!cell){
                                all = false;
                            }
                        });
                    });

                    // 무승부인경우 초기화
                    if(all){
                        console.log('무승부');
                        winner.value = '';
                        turn.value = 'O';                
                        tableData.value = [['', '', ''],['', '', ''],['', '', '']];
                    }
                    else{
                        changeTurn(); // 턴 변경
                    }
                }
            }
        },
        mounted(){
           
        },
        beforeDestroy(){
          
        },
        watch:{        

        },
        // 20250331 EvnetBus 사용
        created(){
            EventBus.$on('clickTd', this.onClickTd);
        }
    };
    */
</script>

<style scoped>
    
</style>