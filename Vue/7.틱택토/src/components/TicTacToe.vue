<template>
    <div>
        <table-component :tableData="tableData"/>
        <div>{{ turn }}님의 턴입니다.</div>
    </div>
    
</template>

<script>
    import TableComponent from './TableComponent.vue';

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
</script>

<style scoped>
    
</style>