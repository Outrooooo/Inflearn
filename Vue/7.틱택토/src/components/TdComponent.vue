<template>
    <td @click="onClickTd">{{ cellData }}</td>
</template>

<script>
    export default{
        props:{
            cellData: String,
            rowIndex: Number,
            cellIndex: Number,
        },
        methods:{
            onClickTd(){
                console.log(this.$root.$data); // 최상위 부모(TicTacToe)로 한번에 이동(props로 N번째 레벨로 넘어가는것에 한계가 있음 )
                console.log(this.$root.$parent);
                this.$root.$data.turn = this.$root.$data.turn === 'O' ? 'X' : 'O';
            }
        }
    };
</script>