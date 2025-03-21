<template>
    <td @click="onClickTd">{{ cellData }}</td>
</template>

<script setup>
    // inject로 provide 항목 사용
    import { inject } from 'vue';

    defineProps({
        cellData: String,
        rowIndex: Number,
        cellIndex: Number
    });

    const turn = inject('turn');
    const tableData = inject('tableData');
    const changeTurn = inject('changeTurn');

    const onClickTd = () => {
        console.log('현재 턴:',turn.value);
        /*
        // tableData.value[this.rowIndex][this.cellIndex] = turn.value
        tableData.value = tableData.value.map((row, rIndex) =>
            rIndex === rowIndex
            ? row.map((cell, cIndex) => (cIndex === cellIndex ? turn.value : cell))
            : row
        );
        */
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