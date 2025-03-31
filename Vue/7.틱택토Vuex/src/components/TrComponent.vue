<template>
    <tr>
        <td-component v-for="(cellData, index) in rowData" :cell-Data="cellData" :cell-index="index" :row-index="rowIndex" :key="index"></td-component>
    </tr>
</template>

<script>
    import TdComponent from './TdComponent.vue'

    export default{
        props:{
            rowData: Array,
            rowIndex: Number  
        },
        components:{
            TdComponent,
        },
        data(){
            return{
                parent:'내니애',

            };
        },
    };
</script>