let demo = document.querySelector('#demo');
let style = document.querySelector('#style');
let string = `
/* 先画皮卡丘的鼻子
*/
.snip{
    width: 0;
    height: 0;
    border: black 10px solid;
    border-color:black transparent transparent transparent;
  border-radius: 10px;
}
/* 让鼻子动起来
*/
.nose {
    position: absolute;
    left: 50%;
    top: 20px;
    margin-left: -10px;
    animation:noseMove 3s infinite;
  }
  
  @-webkit-keyframes noseMove{
    0%,49%,51%,100%{
      margin-left: -10px;
    }
    50%{
      margin-left: -21px;
    }
  }
  /* 接下来画出皮卡丘的
     眼睛
  */
  .eye{
      position: absolute;
      width: 46px;
      height: 46px;
      border-radius: 50%;
      background: #303031;
      border: 2px solid black;
      top: 0;
      left: 50%;
      margin-left: -23px;
  }
.eye::before {
    content: "";
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 2px solid black;
    position: absolute;
    background: white;
    top: 0;
    left: 4px;
    animation: eyeMove 3s infinite;
}
.eye.left {
    transform: translateX(-90px);
  }
  
.eye.right {
  transform: translateX(90px);
}
/*让眼睛动起来
*/
@-webkit-keyframes eyeMove{
    0%,100%{
      top:2px;
      left:2px;
    }
    30%,60%,70%{
      top: 0;
      left: 15px;
    }
    40%{
      top: 0;
      left: 15px;
    }
    50%{
      top: 0;
      left: 10px;
    }
    80%,90%{
      top: 17px;
      left: 15px;
   }
}
/* 开始皮卡丘
  左右的脸颊
*/
.face {
    position: absolute;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: #ff5140;
    border: 2px solid black;
    top: 85px;
    left: 50%;
    margin-left: -32px;
    animation: cheekMove 3s infinite;
 }
 .face.left {
    transform: translateX(-130px);
  }
  
  .face.right {
    transform: translateX(130px);
 }
 /* 让脸颊动起来
 
 */
 @-webkit-keyframes cheekMove{
    0%,46%,54%,100%{
      width: 64px;
      height: 64px;
      top: 85px;
    }
    50%{
      width: 50px;
      height: 50px;
      top: 105px;
    }
  }
/*接下来就是皮卡丘的嘴巴拉
*/
 .mouth {
    height: 150px;
    width: 150px;
    position: absolute;
    left: 50%;
    top: 45px;
    margin-left: -75px;
    cursor: pointer;
  }
  .mouth_main {
    position: absolute;
    left:50%;
    top: 15px ;
    width: 130px;
    height: 140px;
    background: rgb(204, 65, 67);
    border: 3px solid black;
    border-bottom-left-radius: 280px 590px;
    border-bottom-right-radius: 280px 590px;
    overflow: hidden;
    margin-left: -65px;
    animation: mouthMove 3s infinite;
  }
  /* 让嘴巴动起来
  */
  @-webkit-keyframes mouthMove {
    0%,46%,54%,100%{
      height: 140px;
    }
    50%{
      height: 10px;
    }
  }
/* 
 嘴巴似乎有点大了,我来给他
 画上嘴唇吧
*/
.mouth:after, .mouth:before {
    content: '';
    width: 75px;
    height: 38px;
    background: #ffcb00;
    border-bottom: 4px solid black;
    position: absolute;
    z-index: 3;
  }
  .mouth:after {
    border-left: 3px solid black;
    border-bottom-left-radius: 340px 180px;
    left: -3px;
    transform: rotate(-30deg);
  }
  
  .mouth:before {
    border-right: 3px solid black;
    border-bottom-right-radius: 340px 180px;
    right: -3px;
    transform: rotate(30deg);
  }
  /*
   这时开始画出皮卡丘的舌头
  */
  .tongue {
    width: 140px;
    height: 140px;
    background: rgb(221,102,106);
    margin-top: 20px;
    margin-left: -10px;
    border-top-left-radius: 380px;
    border-top-right-radius: 420px 380px;
    overflow: hidden;
  }
 /* 开始画出它的手（这里我使用的是图片）
 */
  .hand {
    position: absolute;
    left: 50%;
    top: 320px;
    margin-left: -52px;
    animation: handMove 1s infinite;
  }
  .hand img{
      display: block;
  }
  
  .hand.left {
    transform: translateX(-75px);
  }
  
  .hand.right {
    transform: translateX(73px) rotateY(180deg);
  }
  /* 让手动起来
  */
  @-webkit-keyframes handMove {
    0%,46%,54%,100%{
      top: 320px;
    }
    50%{
      top: 325px;
    }
  }
  /*
  接下来就是精灵球了，
  首先画出它的轮廓
  并给出白色的阴影发亮的效果  
  */
  .box {
    width: 82px;
    height: 82px;
    border: 3px solid #fff;
    border-radius:  50%;
    position: relative;
    box-shadow: 0 0 5px rgba(255,255,255,0.9);
    left: 50%;
    top: 320px;
    margin-left: -44px;
    animation: box-rotate 4s ease-in-out infinite alternate;
  }
    /* 
     先给精灵球背景添加一个动画，
     以便后面让他动起来
    */
  @keyframes box-rotate{
    0%,90%,100% {
      -webkit-transform: rotate(0deg);
    }
    40%,50% {
      -webkit-transform:  rotate(360deg);
      box-shadow: 0 0 10px 5px rgba(255,255,255,0.9);
    }
  }
  /*  开始画出精灵球上半红色
   */
  .box_main{
    width:80px;
    height:80px;
    border-radius:50%;
    background: red;
    border:1px solid #333;
    position: absolute;
    top:0;
    left:0;
    overflow:hidden;
  }
   /*  
   下面的白色
   */
  .box_main:before{
    content:'';
    display:block;
    width:80px;
    height:40px;
    background:#fff;
    position:absolute;
    bottom:0;
    left:0;
  }
  /* 中见的分隔
  */
  .box_main:after{
    content:'';
    width:80px;
    height:12px;
    background:rgb(59,53,67);
    position:absolute;
    top:50%;
    left:0;
    margin-top:-6px;
  }
  /* 中心圆按钮实现
  */
  .box_circle{
    width:30px;
    height:30px;
    border:5px solid rgb(59,53,67);
    border-radius:50%;
    background:#fff;
    position: absolute;
    left:50%;
    top:50%;
    margin-left:-15px;
    margin-top:-15px;
    z-index:5;
  }
  
  .box_circle:after{
    content:'';
    width:16px;
    height:16px;
    border:1px solid rgb(59,53,67);
    border-radius:50%;
    position:absolute;
    top:50%;
    left:50%;
    margin-left:-8px;
    margin-top:-8px;
    animation:bg_change 4s infinite;
  }
  /*
   转动起来按钮并且变红
  */
  @keyframes bg_change{
    0%,40%,60%,90%,100%{
      background:none;
    }
    50%{
      background: red;
    }
  }
  这样一只可爱的皮卡丘就完成拉!!!
               `
let string2 = '';
let length = string2.length;
let n = 0;
let step = () => {
    setTimeout(() => {
        n = n + 1;
        if(string[n] ==="\n"){
            string2 = string2 + "<br>";
        }else if(string[n] ===" "){
            string2 = string2 +"&nbsp"
        }else{
            string2 = string2 + string[n];
        }
        if (n+1 < string.length) {
            step();
        }else{

        }
    if(demo.clientHeight>document.body.clientHeight - 50){
          string2 = string2.substr(string2.length-1,length);
          console.log(string2)
    }
    demo.innerHTML = string2;
    style.innerHTML = string.substring(0,n);
    }, 1);
   
}

step();