<template>
    <td @click="onClickTd">{{ cellData }}</td>
</template>

<script setup>
    // inject로 provide 항목 사용
    import { inject } from 'vue';

    const props = defineProps({
        cellData: String,
        rowIndex: Number,
        cellIndex: Number
    });

    const turn = inject('turn');
    const winner = inject('winner');
    const tableData = inject('tableData');
    const changeTurn = inject('changeTurn');
    const setTableData = inject('setTableData');
    const checkTableData = inject('checkTableData');   

    const onClickTd = () => {
        console.log('현재 턴:',turn.value);
        console.log('현재 인덱스:',props.rowIndex, props.cellIndex);

        console.log(checkTableData(props.rowIndex,props.cellIndex));

        if( checkTableData(props.rowIndex,props.cellIndex) === true){
            winner.value = turn.value;
            turn.value = 'O';
            tableData.value = [['', '', ''],['', '', ''],['', '', '']];

            console.log('승자는 : ',winner.value);
        }
        else{
            console.log('지거나 무승부 : ',winner.value);
        }
        // if(checkTableData() === true){
        //     winner.value = turn.value;
        //     turn.value = 'O';
        //     tableData = [['', '', ''],['', '', ''],['', '', '']];
        // }

        setTableData(props.rowIndex,props.cellIndex);
        changeTurn(); // 턴 변경
    }
    /* VUE2 방식
    export default{
        props:{
            cellData: String,
            rowIndex: Number,
            cellIndex: Number,
        },
        methods:{
            onClickTd(){
                console.log(this.$root.$data); // 최상위 부모(TicTacToe)로 한번에 이동(props로 N번째 레벨로 넘어가는것에 한계가 있음 )
                console.log(this.$parent.$data);
                this.$root.$data.turn = this.$root.$data.turn === 'O' ? 'X' : 'O';
            }
        }
    };
    */
</script>