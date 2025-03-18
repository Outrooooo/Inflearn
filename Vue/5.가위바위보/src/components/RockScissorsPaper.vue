<template>
        <div>
            <!-- :class="{state:true, hello:false}" Class 사용 유무를 객체로 설정할 수 있다-->
            <div id="computer"  v-bind:style="computedStyleObj"></div>
            <div>
                <button @click="onClickButton('바위')">바위</button>
                <button @click="onClickButton('가위')">가위</button>
                <button @click="onClickButton('보')">보</button>
            </div>
            <div>{{ result }}</div>
            <div>현재 {{ score }} 점</div>
        </div>
</template>

<script>
    // 의미가 불분명한경우 명명
    const rspCoords = {
      바위: '0',
      가위:'-142px',
      보:'-284px'
    };

    const scores = {
      바위: '1',
      가위:'0',
      보:'-1'
    };

    const computerChoice = (imgCoord) => {
        return Object.entries(rspCoords).find(function (v) {
            return v[1] === imgCoord;
        })[0];
    };

    let interval = null;

    export default {
        data(){
            return{
                imgCoord:rspCoords.바위,
                result:'',
                score:0
            }
        },
        computed:{
            computedStyleObj(){
                return{
                    background:`url('http://en.pimg.jp/023/182/267/1/23182267.jpg') no-repeat ${this.imgCoord} 0`,
                };
            }
        },
        methods: {
            onClickButton(choice){ // Param 설정 가능
                clearInterval(interval); // 인터벌 멈춤
                const myScore = scores[choice];
                console.log(scores[choice]);
                const cpuScore = scores[computerChoice(this.imgCoord)];
                const diff = myScore - cpuScore;
                if(diff === 0){
                    this.result ='비겼습니다.';
                }
                // -1이나 2인경우
                else if([-1,2].includes(diff)){
                    this.result ='이겼습니다.';
                    this.score += 1;
                }
                else{
                    this.result ='졌습니다.';
                    this.score -= 1;
                }
                setTimeout(() => {
                    this.changeHand();
                }, 1000);
            },
            changeHand(){
                interval = setInterval(() => {
                if(this.imgCoord === rspCoords.바위){
                    this.imgCoord = rspCoords.가위;
                }
                else if(this.imgCoord === rspCoords.가위){
                    this.imgCoord = rspCoords.보;
                }
                else if(this.imgCoord === rspCoords.보){
                    this.imgCoord = rspCoords.바위;
                }
            }, 100);
            }
        },        
        // Life Cycle
        // 컴포넌트가 생성할 때 (v-id true로 표시 시)
        created(){
            console.log('Created');
        },
        // aysnc -> await -> promise
        // Create 후 data, computed 등 계산 후 실제로 화면에 표시할 때
        mounted(){
            promises
            console.log('Mounted');
            this.changeHand();
        },
        // Data가 변경되어 화면이 다시 변경될 때
        updated(){
            console.log('Updated');
        },
        beforeDestroy(){
            clearInterval(interval);
        },
        // 컴포넌트가 제거될 때(v-id false로 미표시 시)
        destroyed(){
            console.log('Destroyed');
        }
    };
</script>
<!-- scoped 해당 컴포넌트에서만 사용되어지는 스타일 -->
<style scoped>
    #computer{
        width: 142px;
        height: 200px;
        background-position: 0 0;
    }
</style>