<template>
    <table>
        <!-- tr : Row -->
        <tr-component v-for="(rowData, index) in tableData" :row-Data="rowData" :row-index="index" :key="index"></tr-component>
    </table>
</template>

<script>
    import TrComponent from './TrComponent.vue'

    export default{
        props:{
            tableData: Array,
        },
        components:{
            TrComponent,
        },
    };
</script>
<style>
    table{
        border-collapse: collapse;
    }
    td{
        border:1px solid black;
        width: 40px;
        height: 40px;
        text-align: center;
    }
</style>