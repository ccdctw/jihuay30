let img;
let font;
let isFlipping = false;
let isFlipped = false;
let cardY = 0;
let distortY = 0;
let tiltZ = 0;
let textMove = 0;
let contents = [ ['或許可以來點', 'Sarmale (Cabbage Rolls) ', '白菜卷', '借由羅馬尼亞美食，','解放自己，','邁向更有趣的人生！' ],
                ['或許可以來點', 'Mămăligă (Polenta)', '玉米粥', '借由羅馬尼亞美食，','解放自己，','邁向更有趣的人生！' ],
                ['或許可以來點', 'Jumări (Greaves) ', '豬油渣', '借由羅馬尼亞美食，','解放自己，','邁向更有趣的人生！' ],
               ['或許可以來點', 'Döner', '沙威瑪', '讓土耳其的異國情調','打開心房，','釐清頭緒！' ],
                ['或許可以來點', 'Köfte', '肉丸', '讓土耳其的異國情調','打開心房，','釐清頭緒！' ],
               ['或許可以來點', 'Baklava', '果仁蜜餅', '讓土耳其的異國情調','打開心房，','釐清頭緒！' ],
               ['或許可以來點', 'Stinky tofu', '臭豆腐', '臺灣本土草根食物，','讓生活圓融，','幸福感加倍～' ],
               ['或許可以來點', 'Oyster omelette', '蚵仔煎', '臺灣本土草根食物，','讓生活圓融，','幸福感加倍～' ],
               ['或許可以來點', 'Xiaolongbao', '小籠包', '臺灣本土草根食物，','讓生活圓融，','幸福感加倍～' ],
               ['或許可以來點', 'Baguette', '法式長棍', '法國浪漫情懷可以','振奮人心、','提高學習效率！' ],
               ['或許可以來點', 'Bouillabaisse', '馬賽魚湯', '法國浪漫情懷可以','振奮人心、','提高學習效率！' ],
               ['或許可以來點', 'Oeufs en meurette', '紅酒煙肉水煮蛋熱湯', '法國浪漫情懷可以','振奮人心、','提高學習效率！' ],
               ['或許可以來點', 'Aloo gobi', '薯仔煮椰菜花', '印度的神秘，','讓心靈豐富，','靈感噴發～' ],
                ['或許可以來點', 'Biryani', '香料抓飯', '印度的神秘，','讓心靈豐富，','靈感噴發～' ],
                ['或許可以來點', 'Chicken tikka masala', '咖喱雞', '印度的神秘，','讓心靈豐富，','靈感噴發～' ],
                ['或許可以來點', 'Panta Ilish', '魚飯', '孟加拉的異域氛圍，','讓想像有','意想不到的收穫～' ],
                ['或許可以來點', 'Morog Polao', '雞肉飯', '孟加拉的異域氛圍，','讓想像有','意想不到的收穫～' ],
                ['或許可以來點', 'Mishti Doi', '甜優格', '孟加拉的異域氛圍，','讓想像有','意想不到的收穫～' ],
                ['或許可以來點', 'Pasta', '義大利麵', '義式風情，','讓精神更自由、輕鬆','與靈魂奔放！' ],
                ['或許可以來點', 'Pizza', '披薩', '義式風情，','讓精神更自由、輕鬆','與靈魂奔放！' ],
                 ['或許可以來點', 'Gelato', '冰淇淋', '義式風情，','讓精神更自由、輕鬆','與靈魂奔放！'],
                ['或許可以來點', 'Ackee and codfish', '鱈魚', '雅買加的熱情，','融化呆板與','無聊的人生～'],
                ['或許可以來點', 'Jerk chicken', '烤雞', '雅買加的熱情，','融化呆板與','無聊的人生～'],
                ['或許可以來點', 'Run Down', '燉魚', '雅買加的熱情，','融化呆板與','無聊的人生～'],
                 ['或許可以來點', 'Sushi', '壽司', '日式文化，','讓小確幸的溫馨','暖暖自己～'],
                ['或許可以來點', 'Sashimi', '生魚片', '日式文化，','讓小確幸的溫馨','暖暖自己～'],
                ['或許可以來點', 'Ramen', '拉麵', '日式文化，','讓小確幸的溫馨','暖暖自己～'],
                ['或許可以來點', 'Hamburger', '漢堡', '美式作風，','讓你精力充沛','繼續迎接挑戰！'],
                 ['或許可以來點', 'Hotdog', '熱狗', '美式作風，','讓你精力充沛','繼續迎接挑戰！'],
                 ['或許可以來點', 'Steak', '牛排', '美式作風，','讓你精力充沛','繼續迎接挑戰！'],

               ];
let content = choice(contents);
//let content = contents[23];
let alpha0 = 255;
let alpha1 = 255;
let alpha2 = 0;
let alpha3 = 0;

//sound
let song;
let soundTimer;
let isIphone;
let isPlaying;
let start = function()
{
  if(!isPlaying) {
    isPlaying = true;
    song.play();
  }
}

const songP = 'assets/yay.mp3';

function preload(){

  img = loadImage('assets/hand.png');
  //font = loadFont('assets/font.ttf');

  isIphone = window.navigator.userAgent.match(/iPad/i) || window.navigator.userAgent.match(/iphone/i);

  if (isIphone) {

    song = new Audio(songP);

  } else {

    song = loadSound(songP);
  }
}

function setup() {

    createCanvas(windowWidth, windowHeight);

    if (isIphone) {
      var el = document.getElementsByTagName("canvas")[0];
      el.addEventListener("dblclick", doubleClicked, false);
      el.addEventListener("touchstart", mouseClicked, false);

    isPlaying = false;
  }
}

function draw() {

  clear();

  c1 = color(255);
  c2 = color(193, 243, 118);

    for(let y=0; y<height; y++){
    n = map(y, 0, height, 0.5, 0);
    let newc = lerpColor(c1,c2,n);
    stroke(newc);
    line(0,y,width, y);
  }

  translate(180, 400);
  noStroke();
  applyMatrix(1, 0, 0.15, 1, 0, 0);
  let gray = color(150, 150, 150, 200);
  fill(gray);
  rect(-10, 10, 270, 150, 10, 10);
  let navy = color(0,0,128);
  stroke(navy);
  strokeWeight(3);
  let white = 255;
  fill(white);
  rectMode(CENTER);
  rect(0, 0, 260, 150, 10, 10);
  rect(5, -5, 260, 150, 10, 10);
  rect(10, -10, 260, 150, 10, 10);
  rect(15, -15, 260, 150, 10, 10);
  rect(20, -20, 260, 150, 10, 10);
  let red = color(200, 34, 34);
  noStroke();
  fill(red);
  rect(20, -20, 240, 130, 10, 10);
  fill(255);
  textSize(40);
  textFont('Noto Sans TC');
  text('機        會', -55, -10);
  textSize(90);
  text('?', 0, 5);

  if(isFlipping == true){

    applyMatrix(1, 0, -0.15, 1, 0, 0);

    translate(-180, -400);
    c1 = color(255);
    c2 = color(193, 243, 118);

    for(let y=0; y<height; y++){
    n = map(y, 0, height, 0.5, 0);
    let newc = lerpColor(c1,c2,n);
    stroke(newc);
    line(0,y,width, y);
    }

    cardY+=5;
    translate(180, 400);
    applyMatrix(1, 0, 0.15, 1, 0, 0);
    noStroke();
    let gray = color(150, 150, 150, 200);
    fill(gray);
    rect(-10, 10, 270, 150, 10, 10);
    let navy = color(0,0,128);
    stroke(navy);
    strokeWeight(3);
    let white = 255;
    fill(white);
    rectMode(CENTER);
    rect(0, 0, 260, 150, 10, 10);
    rect(5, -5, 260, 150, 10, 10);
    rect(10, -10, 260, 150, 10, 10);
    rect(15, -15, 260, 150, 10, 10);
    let red = color(200, 34, 34);
    fill(red);
    noStroke();
    rect(15, -15, 240, 130, 10, 10);

    fill(255);
    textSize(40);
    textFont('Noto Sans TC');
    text('機        會', -65, -5);
    textSize(90);
    text('?', -10, 10);

    applyMatrix(1, 0, tiltZ, 1-distortY/10, 0, 0);
    if(distortY>=20){
      distortY=20;
    }
    stroke(navy);
    strokeWeight(3);
    fill(white);
    rect(20+cardY/4, -20+cardY, 260, 150, 10, 10);

    noStroke();
    if(distortY==10){
      isFlipped=true;
    }
    if(isFlipped==true){

      textMove +=0.1;
      fill(gray);
      rect(60, 173, 260, 150, 10, 10);
      stroke(navy);
      strokeWeight(3);
      fill(white);
      rect(20+cardY/4, -20+cardY, 260, 150, 10, 10);

      let textColor = color(0,0,128);
      let textColor0 = color(0,0,128,alpha0);
      let textColor1 = color(200, 34, 34,alpha1);
      let textColor2 = color(0,0,128,alpha2);
      let textColor3 = color(0,0,128,alpha3);
      fill(textColor);
      if(textMove>80){
        noLoop();
      }
      if(textMove>30){
        alpha2=255;
      }
      if(textMove>35){
        alpha0=0;
      }
      if(textMove>60){
        alpha3=255;
      }
      if(textMove>65){
        alpha1=0;
      }
      //print(textMove);

      textSize(24);
      textFont('Noto Sans TC');
      stroke(textColor);
      strokeWeight(0);
      scale(1, -1);
      fill(textColor0);
      stroke(textColor0);
      text(content[0], -90+cardY/4, -400+cardY-textMove);
      fill(textColor1);
      stroke(textColor1);
      textSize(20);
      text('\n'+ content[1], -90+cardY/4, -397+cardY-textMove);
      fill(red);
      textSize(24);
      text('\n\n'+ content[2], -90+cardY/4, -400+cardY-textMove);
      fill(navy);
      text('\n\n\n' + content[3], -90+cardY/4, -400+cardY-textMove);
      fill(textColor2);
      stroke(textColor2);
      text('\n\n\n\n' + content[4], -90+cardY/4, -400+cardY-textMove);
      fill(textColor3);
      stroke(textColor3);
      text('\n\n\n\n\n' + content[5], -90+cardY/4, -400+cardY-textMove);

      //mask
      noStroke();
      fill(white);
      rect(70, -245, 260, 20, 10, 10);
      rect(70, -115, 260, 20, 10, 10);
      stroke(navy);
      strokeWeight(3);
      noFill();
      rect(20+cardY/4, -180, 260, 150, 10, 10);

    }
    else{
      fill(red);
      rect(20+cardY/4, -20+cardY, 240, 130, 10, 10);
      fill(255);
      textSize(40);
      textFont('Noto Sans TC');
      text('機        會', -55+cardY/4, -10+cardY);
      textSize(90);
      text('?', 0+cardY/4, 5+cardY);
    }

    if(cardY>=200){
      cardY -=5;
      tiltZ = 0.03;
      distortY++;
    }
  }
  hand();
}

function hand(){

  if(isFlipping==false){
    applyMatrix(1, 0, 0, 1, 0, 0);

    for (var i = 0; i < touches.length; i++) {
      if (touches.length>1){
          touches.length = 1;
      }
      //image(img, touches[i].x-120, touches[i].y-150, 120, 150);
    }
        image(img, mouseX-250, mouseY-400, 100, 120);

  }
}

function choice(arr) {
    return arr[Math.floor(Math.random()*arr.length)];
}

function mouseClicked(){

}

function doubleClicked(){

  isFlipping = true;
  if (isIphone) {
    start();
  }
  else if ( !song.isPlaying() ) {
    song.play();
  }

}
