// const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { VueLoaderPlugin } = require('vue-loader')
const path = require('path');


module.exports = {
    mode:'development',
    devtool: 'eval',
    resolve:{
        extensions:['.js','.vue'], // Import시 확장자 제거 가능
    },
    entry:{
        app: path.join(__dirname,'main.js'), // 하나로 합쳐질 파일의 이름(app.js)
    },
    module:{ // Webpack의 핵심으로 위에서 파일들을 어떻게 합치고 처리할건지 정의
        rules:[{
            test: /\.vue$/, // 파일명이 .vue로 끝나는 파일은 아래 설정한 vue loader를 사용, Vue Loader도 npm i vue-loader 명령어를 사용하여 설치
            loader: 'vue-loader',
        },{
            test: /\.css$/,
            use: [
                'vue-style-loader',
                'css-loader',
            ]
        }]
    }, 
    plugins:[
        new VueLoaderPlugin(), // 부가적인 기능
    ],
    output:{
        filename: '[name].js', // main.js에서 연결된 모든 파일의 결과가 여기서 설정한 이름으로 제작 '[name].js'
        path: path.join(__dirname, 'dist'), // '/dist',
    },
};