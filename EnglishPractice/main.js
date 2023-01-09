var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
var Chinese = document.querySelector('h2');
var topic = document.querySelector('h3');
var myArray = ['v. 呼吸','n. 一口氣','v. 吞','adj. 疼痛的;痛苦的 反義:painless','n. 疼痛','adj. 惱人的','v. 惹惱;使生氣 同義:irritate;irritating','n. 災難;災害','v. 活下來;從......中生還','n. 存活;生還','v. 汙染','n. 汙染','n. 自然環境;周遭','v. 漂浮 反義:sink','n. 生物','n. 事件','v. 減少;降低 同義:decrease;cut 反義: increase','v. 減少;降低 同義:decrease 反義: increase','n. 疼痛','adj. 急迫的;緊急 同義:pressing','v. 催促;力勸','n. 努力;盡力','n. 危機','adv. 同時 同義:in the meantime','v. 禁止 同義:prohibit 反義:allow','adv. 目前;現在 同義:now','v. 想知道','意外地;偶然地 同義:accidentally 反義:on purpose','吐;嘔吐 同義:vomit','分解','減少','v. 包含;容納','n. 字詞;用語','n. 數量','v. 理解;消化 同義:take in','n. 各式各樣','adj. 各式各樣的','n. 電影','n. 劇情;情節','n. 疑問','adj. 複雜的 同義:complex','v. 使複雜 反義:simplify','n. 政策','n. 誤解','n. 理解;同情','adj. 平衡的;均衡的 反義:unbalanced','n. 平衡 反義:imbalance','n. 創作者','n. 偏好','adj. 危險的;冒險的 同義:dangerous','n. 危險;風險 同義:danger','adj. 經常的;頻繁的 反義:infruqent','n. 頻率','想到 同義:occur to sb','得知;跟上(消息)','分辨;區分 同義:distinguish;differentiate','毫無疑問地 同義:beyond doubt','相信;信任','依賴;依靠 同義:depend on','記住 同義:bear in mind','adj. 獨特的;特有的','n. (全體)工作人員;職員','v. 互動;交流','n. 互動;交流','n. 費用','n. 行程表;時刻表','n. 隧道','n. 紀念品','n. 大學 同義:college','adj. 退休的','v. 退休','v. 持續','adj. 難忘的 同義:memorable 反義:forgettable','n. 回憶;記憶力','n. 冒險','n. 世代;一代','趕快','過去曾經','睡著','保護;照顧'];
const inputdate = document.querySelector('input[type="text"]');

myButton.onclick = function() {
    var rand = Math.floor(Math.random()*myArray.length);
    var rValue = myArray[rand];
    topic.innerHTML = rValue;
    setUserName();
    setChinese();
}

function setUserName() {
    let myName = inputdate.value;
    localStorage.setItem('name', myName);
    myHeading.innerHTML = myName;
}

function setChinese() {
    //第四課單片
    if(inputdate.value === 'breathe'){
        Chinese.innerHTML = 'v. 呼吸';
    }
    else if(inputdate.value === 'breath'){
        Chinese.innerHTML = 'n. 一口氣';
    }
    else if(inputdate.value === 'swallow'){
        Chinese.innerHTML = 'v. 吞';
    }
    else if(inputdate.value === 'painful'){
        Chinese.innerHTML = 'adj. 疼痛的;痛苦的 反義:painless';
    }
    else if(inputdate.value === 'pain'){
        Chinese.innerHTML = 'n. 疼痛';
    }
    else if(inputdate.value === 'annoying'){
        Chinese.innerHTML = 'adj. 惱人的';
    }
    else if(inputdate.value === 'annoy'){
        Chinese.innerHTML = 'v. 惹惱;使生氣 同義:irritate;irritating';
    }
    else if(inputdate.value === 'disaster'){
        Chinese.innerHTML = 'n. 災難;災害';
    }
    else if(inputdate.value === 'survive'){
        Chinese.innerHTML = 'v. 活下來;從......中生還';
    }
    else if(inputdate.value === 'survival'){
        Chinese.innerHTML = 'n. 存活;生還';
    }
    else if(inputdate.value === 'pollute'){
        Chinese.innerHTML = 'v. 汙染';
    }
    else if(inputdate.value === 'pollution'){
        Chinese.innerHTML = 'n. 汙染';
    }
    else if(inputdate.value === 'environment'){
        Chinese.innerHTML = 'n. 自然環境;周遭';
    }
    else if(inputdate.value === 'float'){
        Chinese.innerHTML = 'v. 漂浮 反義:sink';
    }
    else if(inputdate.value === 'creature'){
        Chinese.innerHTML = 'n. 生物';
    }
    else if(inputdate.value === 'incident'){
        Chinese.innerHTML = 'n. 事件';
    }
    else if(inputdate.value === 'reduce'){
        Chinese.innerHTML = 'v. 減少;降低 同義:decrease;cut 反義: increase';
    }
    else if(inputdate.value === 'reduction'){
        Chinese.innerHTML = 'v. 減少;降低 同義:decrease 反義: increase';
    }
    else if(inputdate.value === 'pain'){
        Chinese.innerHTML = 'n. 疼痛';
    }
    else if(inputdate.value === 'urgent'){
        Chinese.innerHTML = 'adj. 急迫的;緊急 同義:pressing';
    }
    else if(inputdate.value === 'urge'){
        Chinese.innerHTML = 'v. 催促;力勸';
    }
    else if(inputdate.value === 'effort'){
        Chinese.innerHTML = 'n. 努力;盡力';
    }
    else if(inputdate.value === 'crisis(crises)'){
        Chinese.innerHTML = 'n. 危機';
    }
    else if(inputdate.value === 'meanwhile'){
        Chinese.innerHTML = 'adv. 同時 同義:in the meantime';
    }
    else if(inputdate.value === 'ban'){
        Chinese.innerHTML = 'v. 禁止 同義:prohibit 反義:allow';
    }
    else if(inputdate.value === 'currently'){
        Chinese.innerHTML = 'adv. 目前;現在 同義:now';
    }
    else if(inputdate.value === 'wonder'){
        Chinese.innerHTML = 'v. 想知道';
    }
    else if(inputdate.value === 'by accident'){
        Chinese.innerHTML = '意外地;偶然地 同義:accidentally 反義:on purpose';
    }
    else if(inputdate.value === 'throw up'){
        Chinese.innerHTML = '吐;嘔吐 同義:vomit';
    }
    else if(inputdate.value === 'break down'){
        Chinese.innerHTML = '分解';
    }
    else if(inputdate.value === 'cut down on'){
        Chinese.innerHTML = '減少';
    }
    else if(inputdate.value === 'contain'){
        Chinese.innerHTML = 'v. 包含;容納';
    }
    else if(inputdate.value === 'term'){
        Chinese.innerHTML = 'n. 字詞;用語';
    }
    else if(inputdate.value === 'amount'){
        Chinese.innerHTML = 'n. 數量';
    }
    else if(inputdate.value === 'digest'){
        Chinese.innerHTML = 'v. 理解;消化 同義:take in';
    }
    else if(inputdate.value === 'variety'){
        Chinese.innerHTML = 'n. 各式各樣';
    }
    else if(inputdate.value === 'various'){
        Chinese.innerHTML = 'adj. 各式各樣的';
    }
    else if(inputdate.value === 'film'){
        Chinese.innerHTML = 'n. 電影';
    }
    else if(inputdate.value === 'plot'){
        Chinese.innerHTML = 'n. 劇情;情節';
    }
    else if(inputdate.value === 'doubt'){
        Chinese.innerHTML = 'n. 疑問';
    }
    else if(inputdate.value === 'complicated'){
        Chinese.innerHTML = 'adj. 複雜的 同義:complex';
    }
    else if(inputdate.value === 'complicate'){
        Chinese.innerHTML = 'v. 使複雜 反義:simplify';
    }
    else if(inputdate.value === 'policy'){
        Chinese.innerHTML = 'n. 政策';
    }
    else if(inputdate.value === 'misunderstanding'){
        Chinese.innerHTML = 'n. 誤解';
    }
    else if(inputdate.value === 'understanding'){
        Chinese.innerHTML = 'n. 理解;同情';
    }
    else if(inputdate.value === 'balanced'){
        Chinese.innerHTML = 'adj. 平衡的;均衡的 反義:unbalanced';
    }
    else if(inputdate.value === 'balance'){
        Chinese.innerHTML = 'n. 平衡 反義:imbalance';
    }
    else if(inputdate.value === 'creator'){
        Chinese.innerHTML = 'n. 創作者';
    }
    else if(inputdate.value === 'preator'){
        Chinese.innerHTML = 'n. 偏好';
    }
    else if(inputdate.value === 'risky'){
        Chinese.innerHTML = 'adj. 危險的;冒險的 同義:dangerous';
    }
    else if(inputdate.value === 'risk'){
        Chinese.innerHTML = 'n. 危險;風險 同義:danger';
    }
    else if(inputdate.value === 'frequent'){
        Chinese.innerHTML = 'adj. 經常的;頻繁的 反義:infruqent';
    }
    else if(inputdate.value === 'frequency'){
        Chinese.innerHTML = 'n. 頻率';
    }
    else if(inputdate.value === `cross one's mind`){
        Chinese.innerHTML = '想到 同義:occur to sb';
    }
    else if(inputdate.value === 'catch up on'){
        Chinese.innerHTML = '得知;跟上(消息)';
    }
    else if(inputdate.value === 'tell...apart'){
        Chinese.innerHTML = '分辨;區分 同義:distinguish;differentiate';
    }
    else if(inputdate.value === 'without doubt' || inputdate.value === 'without a doubt'){
        Chinese.innerHTML = '毫無疑問地 同義:beyond doubt';
    }
    else if(inputdate.value === 'believe in'){
        Chinese.innerHTML = '相信;信任';
    }
    else if(inputdate.value === 'rely on'){
        Chinese.innerHTML = '依賴;依靠 同義:depend on';
    }
    else if(inputdate.value === 'keep in mind'){
        Chinese.innerHTML = '記住 同義:bear in mind';
    }
    else if(inputdate.value === 'unique'){
        Chinese.innerHTML = 'adj. 獨特的;特有的';
    }
    else if(inputdate.value === 'staff'){
        Chinese.innerHTML = 'n. (全體)工作人員;職員';
    }
    else if(inputdate.value === 'interact'){
        Chinese.innerHTML = 'v. 互動;交流';
    }
    else if(inputdate.value === 'interaction'){
        Chinese.innerHTML = 'n. 互動;交流';
    }
    else if(inputdate.value === 'fee'){
        Chinese.innerHTML = 'n. 費用';
    }
    else if(inputdate.value === 'schedule'){
        Chinese.innerHTML = 'n. 行程表;時刻表';
    }
    else if(inputdate.value === 'tunnel'){
        Chinese.innerHTML = 'n. 隧道';
    }
    else if(inputdate.value === 'souvenir'){
        Chinese.innerHTML = 'n. 紀念品';
    }
    else if(inputdate.value === 'university'){
        Chinese.innerHTML = 'n. 大學 同義:college';
    }
    else if(inputdate.value === 'retired'){
        Chinese.innerHTML = 'adj. 退休的';
    }
    else if(inputdate.value === 'retire'){
        Chinese.innerHTML = 'v. 退休';
    }
    else if(inputdate.value === 'last'){
        Chinese.innerHTML = 'v. 持續';
    }
    else if(inputdate.value === 'unforgettable'){
        Chinese.innerHTML = 'adj. 難忘的 同義:memorable 反義:forgettable';
    }
    else if(inputdate.value === 'memory'){
        Chinese.innerHTML = 'n. 回憶;記憶力';
    }
    else if(inputdate.value === 'adventure'){
        Chinese.innerHTML = 'n. 冒險';
    }
    else if(inputdate.value === 'generation'){
        Chinese.innerHTML = 'n. 世代;一代';
    }
    else if(inputdate.value === 'hurry up'){
        Chinese.innerHTML = '趕快';
    }
    else if(inputdate.value === 'used to'){
        Chinese.innerHTML = '過去曾經';
    }
    else if(inputdate.value === 'fall asleep'){
        Chinese.innerHTML = '睡著';
    }
    else if(inputdate.value === 'watch over'){
        Chinese.innerHTML = '保護;照顧';
    }
    else{
        Chinese.innerHTML = '2~4課單片中沒有此單字';
    }
}