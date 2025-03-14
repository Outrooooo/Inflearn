<!-- Vue내용을 다른 파일로 HTML,CSS 쉽게 관리하고 사용하게 해준다 -->
<template>
    <!--
    v-show : 조건이 false인 경우 display = None, true인 경우 표시 (Tag는 존재)
    v-if : (Tag자체 미존재), v-else-if, v-else 등 같이 사용할 수 있어 
    -->
    <div>
        <div id="screen" :class="state" @click="onClickScreeen">{{ message }}</div>
        <!-- div가 아닌 template으로 영역을 설정해도 가능, 단 template 다음 template은 사용 X-->
        <template v-if="result.length"> 
            <div>평균 시간 : {{ average }}ms</div>
            <button @click="onReset">리셋</button>
        </template>
    </div>
        
</template>

<script>
    let startTime = 0;
    let endTime = 0;
    let timeout = null; 

    export default {
        // 화면이랑 관련 있는 경우에만 Data
        data(){
            return{
                result:[],
                state: 'waiting',
                message:'클릭해서 시작하세요.'
            }
        },
        // Data를 가공한 후 화면에 보여줘야할 때 computed에서 작업(캐싱)
        // Template 일부분이 변경될 경우에도 전체로 재실행이 되어, 불필요한 계산작업이 추가되어 비용 발생할 수 있어 computed에서 캐싱된 데이터를 적용
        computed:{
            average(){    
                // return this.result.reduce((a,c) => a+c,0) / result.length || 0
                return this.result.length ? (this.result.reduce((a, c) => a + c, 0) / this.result.length) : 0; // 기본값 설정
            }
        },
        methods: {
            onReest(){ 
                this.result = []; // Init
            },
            onClickScreeen(){
                console.log(this.state)
                if(this.state ==='waiting'){                    
                    this.state ='ready';
                    this.message ='초록색일 때 클릭하세요.'
                    timeout = setTimeout(() => {
                        this.state = 'now';
                        this.message ='지금 클릭!';
                        startTime = new Date();
                    }, Math.floor(Math.random() * 1000) +2000);
                }
                else if(this.state ==='ready'){                    
                    clearTimeout(timeout);
                    this.state ='waiting';
                    this.message ='너무 성급합니다. 초록색일 때 클릭하세요'
                }
                else if(this.state ==='now'){
                    endTime = new Date();
                    this.state ='waiting';
                    this.message ='클릭해서 다시 시작하세요.'
                    this.result.push(endTime - startTime);
                }
            }
        }
    };
</script>
<!-- scoped 해당 컴포넌트에서만 사용되어지는 스타일 -->
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