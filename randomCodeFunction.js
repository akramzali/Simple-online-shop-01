/// upper and lower char and digit random

function randomCode(){
    let random=""
for (let i = 0; i < 8; i++) {
    let chance = Math.random();
    if (chance <= 0.4) { //  احتمال برای حروف کوچک
        let rnd = Math.floor(Math.random() * 26 + 97);
        let randomChar = String.fromCharCode(rnd);
        random += randomChar;
    }
    else if (chance > 0.4 && chance <= 0.8) { //  احتمال برای حروف بزرگ
        let rnd = Math.floor(Math.random() * 26 + 65);
        let randomChar = String.fromCharCode(rnd);
        random += randomChar;
    }
    else { // احتمال برای اعداد
        let rnd = Math.floor(Math.random() * 10 + 48);
        let randomChar = String.fromCharCode(rnd);
        random += randomChar;
    }
}
return random
}

