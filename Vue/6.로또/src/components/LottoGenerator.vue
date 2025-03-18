<template>
    <div>
        <div>당첨 숫자</div>
        <div id="결과창">
            <lotto-ball v-for="ball in winBalls" :key="ball" v-bind:number="ball"></lotto-ball> <!-- number의 ball의 값이 props로 넘어가 표시-->
        </div>
        <div>보너스</div>
        <lotto-ball v-if="bonus" :number="bonus"></lotto-ball>
        <button v-if="redo" @click="onClickRedo">한 번 더 !</button>
    </div>
</template>

<script>
    import LottoBall from './LottoBall.vue';

    function getWinNumbers(){
        console.log('getWinNumbers()');
        const candidate = Array(45).fill().map((v,i) => i+1);
        const shuffle = [];
        // Random으로 숫자 push
        while(candidate.length > 0){
            shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length),1)[0]);
        }
        // sort
        const bonusNumber = shuffle[shuffle.length-1];
        const winNumbers = shuffle.slice(0,6).sort((p,c) => p-c);

        return [...winNumbers, bonusNumber];
    }

    const timeouts = [];
    export default {
        // Component 등록
        components:{
            'lotto-ball' :LottoBall,
        },        
        data(){
            return{
                winNumbers :getWinNumbers(), // 랜덤 숫자 저장
                winBalls : [], // 표시할 때 하나씩 화면에 표시(시각적 효과)
                bonus : null,
                redo : false,
            };
        },
        computed:{
            
        },
        methods: {
            // 한번 더 
            onClickRedo(){
                this.winNumbers = getWinNumbers();
                this.winBalls = [];
                this.bonus = null;
                this.redo = false;
           },
           showBalls(){
            for(let i = 0; i < this.winNumbers.length - 1; i++){ // var 사용 시 closer 문제가 생길 수 있어 let 사용
                timeouts[i] = setTimeout(() => {
                    this.winBalls.push(this.winNumbers[i]);
                }, (i + 1) * 1000);
            }
            timeouts[6] = setTimeout(() => {
                this.bonus = this.winNumbers[6];
                this.redo = true;
            }, 7000);
           }
        },     
        // Create 후 data, computed 등 계산 후 실제로 화면에 표시할 때
        mounted(){
            this.showBalls();
        },
        beforeDestroy(){
           timeouts.forEach((t) => {
                clearTimeout(t);
           });
        },
        // 어떤 값이 바뀐 여부를 확인 및 감시할 때
        // 감시하는 값을 수정하면 무한루프 발생하는 것 유의
        // 비동기
        watch:{
            // winBalls가 변경될 때
            // winBalls(value, oldValue){
            //     console.log(value,oldValue)
            //     if(value.length === 0){
            //         this.showBalls();
            //     }
            // },
            bonus(value, oldValue){ // 이전값, 현재값
                console.log(value,oldValue)
                if(value.length === 0){
                    this.showBalls();
                }
            },
            // redo(value, oldValue){ // 이전값, 현재값
            //     console.log(value,oldValue)
            //     if(value.length === false){
            //         this.showBalls();
            //     }
            // },
        },
    };
</script>
<!-- scoped 해당 컴포넌트에서만 사용되어지는 스타일 -->
<style scoped>
    
</style>