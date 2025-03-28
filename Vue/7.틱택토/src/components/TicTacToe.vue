<template>
    <div>
        <table-component :tableData="tableData"/>
        <div>{{ turn }}님의 턴입니다.</div>
    </div>
    
</template>

<script setup>
    // provide로 inject 항목 사용할 수 있게
    import {ref, provide} from 'vue';
    import TableComponent from './TableComponent.vue';    

    const turn = ref('O');

    const changeTurn = () =>{
        turn.value = turn.value === 'O' ? 'X' : 'O';
    };

    const tableData = ref([
        ['', '', ''],
        ['', '', ''],
        ['', '', '']   
    ]);

    const setTableData = (rowIndex, cellIndex) =>{
        tableData.value[rowIndex][cellIndex] = turn.value;
    };

    provide('turn',turn);
    provide('changeTurn',changeTurn);    
    provide('tableData',tableData);

    provide('setTableData',setTableData);

    

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
           
        },
        mounted(){
           
        },
        beforeDestroy(){
          
        },
        watch:{
          
        },
    };
    */
</script>

<style scoped>
    
</style>