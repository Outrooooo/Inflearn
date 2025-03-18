<template>
    <div class="ball" :style="styleObj"> {{ number }}</div>
</template>

<script>
    export default{
        name : 'LottoBall',
        props :{ // props로 전달받은 데이터는 바꿀 수 없음, readOnly 변경이 필요한 경우에는 부모의 데이터(number="5")를 바꾼다
            number : Number, // number 항목의 자료형은 숫자
        },
        computed:{
            styleObj(){
                let background;
                if(this.number < 10){
                    background = 'red';
                }
                else if(this.number <= 20){
                    background = 'orange';
                }
                else if(this.number <= 30){
                    background = 'yellow';
                }
                else if(this.number <= 40){
                    background = 'blue';
                }
                else{
                    background = 'green';
                }
                return{
                    background,
                };
            }
        },
    }
</script>

<style>
    .ball{
        display: inline-block;
        border: 1px solid black;
        border-radius: 20px;
        width: 40px;
        height: 40px;
        line-height: 40px;
        font-size: 20px;
        text-align: center;
        margin-right: 20px;
    }
</style>