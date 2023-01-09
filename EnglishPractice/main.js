var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
var Chinese = document.querySelector('h2');
const inputdate = document.querySelector('input[type="text"]');

myButton.onclick = function() {
    setUserName();
    setChinese();
}

function setUserName() {
    let myName = inputdate.value;
    localStorage.setItem('name', myName);
    myHeading.innerHTML = myName;
}

function setChinese() {
    if(inputdate.value === 'grocery'){
        Chinese.innerHTML = 'n. 食品雜貨;食品雜貨店';
    }
    else if(inputdate.value === 'weird' || inputdate.value === 'strange' || inputdate.value === 'odd'){
        Chinese.innerHTML = 'adj. 奇怪的;古怪的';
    }
    else if(inputdate.value === 'tough' || inputdate.value === 'difficult'){
        Chinese.innerHTML = 'adj. 困難的;艱苦的  反義:easy';
    }
    else if(inputdate.value === 'advice'){
        Chinese.innerHTML = 'n. 意見;忠告';
    }
    else if(inputdate.value === 'advise'){
        Chinese.innerHTML = 'v. 建議;勸告';
    }
    else if(inputdate.value === 'distribute' || inputdate.value === 'give out'){
        Chinese.innerHTML = 'v. 分發';
    }
    else if(inputdate.value === 'solution' || inputdate.value === 'answer'){
        Chinese.innerHTML = 'n. 解決方法';
    }
    else if(inputdate.value === 'solve' || inputdate.value === 'resolve'){
        Chinese.innerHTML = 'v. 解決';
    }
    else if(inputdate.value === 'celebrity' || inputdate.value === 'star'){
        Chinese.innerHTML = 'n. 名人';
    }
    else if(inputdate.value === 'support'){
        Chinese.innerHTML = 'v. 支持';
    }
    else if(inputdate.value === 'activity'){
        Chinese.innerHTML = 'n. 活動';
    }
    else if(inputdate.value === 'prevent'){
        Chinese.innerHTML = 'v. 避免;防止';
    }
//odd=strange=weird
    else if(inputdate.value === 'educate'){
        Chinese.innerHTML = 'v. 教導';
    }
    else if(inputdate.value === 'education'){
        Chinese.innerHTML = 'n. 教育';
    }
    else if(inputdate.value === 'invest'){
        Chinese.innerHTML = 'v. 投資';
    }
    else if(inputdate.value === 'investment'){
        Chinese.innerHTML = 'n. 投資';
    }
    else if(inputdate.value === 'issue'){
        Chinese.innerHTML = 'n. 議題';
    }
    else if(inputdate.value === 'assist'){
        Chinese.innerHTML = 'v. 幫忙';
    }
    else if(inputdate.value === 'assistant'){
        Chinese.innerHTML = 'n. 助理;助手';
    }
    else if(inputdate.value === 'eventually' || inputdate.value === 'finally'){
        Chinese.innerHTML = 'adv. 最後;終於';
    }
    else if(inputdate.value === 'eventual'){
        Chinese.innerHTML = 'adj. 最終的';
    }
    else if(inputdate.value === 'treasure'){
        Chinese.innerHTML = 'v. 珍惜 n.寶藏;珍寶';
    }









    else{
        Chinese.innerHTML = '2~4課單片中沒有此單字';
    }

}
