<!-- Vue내용을 다른 파일로 HTML,CSS 쉽게 관리하고 사용하게 해준다 -->
<template>
    <div>
        <h1>{{result}}</h1>
        <form @submit.prevent="onSubmitForm">
            <input ref="answer" maxlength="4" v-model="value" />
            <button type="submit">입력</button>
        </form>
        <div>시도 : {{tries.length}}</div>
        <ul>
            <li v-for="t in tries" v-bind:key="t.try">
                <div> {{t.try}} </div>
                <div> {{t.result}} </div>
            </li>
        </ul>
    </div>
</template>

<script>
    const getNumbers =() => {
        const candidates = [1,2,3,4,5,6,7,8,9];
        const array = [];

        for(let i = 0; i < 4; i+=1){
            const chosen = candidates.splice(Math.floor(Math.random() * (9-i)), 1)[0];
            array.push(chosen);
        }
        return array;  
    };

    export default {
        data(){
            return{
                answer: getNumbers(),
                tries:[],
                value:'',
                result:'',
            }
        },
        methods: {
            onSubmitForm(){
                // e.preventDefault(); // form에서 자동으로 적용되어지게 하여 생략 가능
                if(this.value === this.answer.join('')){
                    this.tries.push({
                        try: this.value,
                        result:'홈런',
                    });
                    this.result = '홈런';
                    alert('게임을 다시 실행합니다.');
                    this.tries = [];
                    this.value ='';
                    this.$refs.answer.focus();
                }
                else{
                    // 틀렸을 때
                    if(this.tries.length >= 9 ){
                        this.result = `10번 넘게 돌려 실패! 답은 ${this.answer.join(',')}였습니다.`;
                        alert('게임을 다시 실행합니다.');
                        this.tries = [];
                        this.value ='';
                        this.$refs.answer.focus();
                    }
                    let strike = 0;
                    let ball = 0;
                    const answerArray = this.value.split('').map( v => parseInt(v));
                    for(let i = 0; i < 4 ; i += 1){
                        if(answerArray[i] === this.answer[i]){
                            strike++;
                        }else if(this.answer.includes(answerArray[i])){
                            ball++;
                        }
                    }
                    this.tries.push({
                        try: this.value,
                        result: `${strike} 스트라이크, ${ball} 볼입니다.`
                    });
                }
                // 화면에 보여지는 애들은 Data, 식에 쓰이는 내용은 변수(let)로 선언
                
            }
        }
    };
</script>

<style>

</style>