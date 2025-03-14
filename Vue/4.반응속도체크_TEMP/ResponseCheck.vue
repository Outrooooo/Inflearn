<!-- Vue내용을 다른 파일로 HTML,CSS 쉽게 관리하고 사용하게 해준다 -->
<template>
    <div>
        <div id="screen" :class="state" @Click="onClickScreeen">{{ message }}</div>
        <div>평균 시간 : {{  }}</div>
        <button @click="onReset">리셋</button>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                result:[],
                state: `waiting`,
                message:`클릭해서 시작하세요.`
            }
        },
        methods: {
            onReest(){

            },
            onClickScreeen(){
                if(this.state ==='waiting'){
                    this.state ='ready';
                }
                else if(this.state ==='ready'){
                    this.state ='now';
                }
                else if(this.state ==='now'){
                    this.state ='waiting';
                }
            }
        }
    };
</script>

<style scoped>
    #screen {
        width:300px;
        height: 200px;
        text-align: center;
        user-select: none;
    }
    #screen.waiting{
        background-color: aqua;
    }
    #screen.ready{
        background-color: red;
        color:white;
    }
    #screen.now{
        background-color: greenyellow;
    }
</style>