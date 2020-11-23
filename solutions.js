// Solutions of the problems of edabit.com site.



// Solution 1.
// Problem link: https://edabit.com/challenge/CNimjGSPT7xmPJuvY

function shiftToLeft(x, y,res = 1) {
    if(y === 0){
        return res * x
    }
    res *= 2
    return shiftToLeft(x,y-1,res)
}




// Solution 2.
// Problem link: https://edabit.com/challenge/wYdQGudMRdzME5B7m

function leader(arr) {
    var resultArr = []
    var start = arr.indexOf(Math.max(...arr))
    for(var i = start;i<arr.length;i++){
        if(arr[i] > arr[i + 1] || arr[i+1] == undefined){
            resultArr.push(arr[i])
        }
    }
    return resultArr
}




// Solution 3.
// Problem link: https://edabit.com/challenge/TZR9EM6xcJrer4Naq

function rearrange(sentence) {
    var resArr = []
    const removeNum = (el) => {
        var result = el.trim()
        result = result.replace(0,"")
        result = result.replace(1,"")
        result = result.replace(2,"")
        result = result.replace(3,"")
        result = result.replace(4,"")
        result = result.replace(5,"")
        result = result.replace(6,"")
        result = result.replace(7,"")
        result = result.replace(8,"")
        result = result.replace(9,"")
        return result
        // I DONT KNOW REGEX
    }
    const findNum = (word) => {
        var retRes
        var ret = [...word].forEach((c) => {
            if(!isNaN(c)){
                retRes = c
            }
        })
        return retRes
    }
    sentence = sentence.trim().split(" ")
    sentence.forEach( (t) => {
        console.log(removeNum(t))
        console.log("bu",findNum(t))
        resArr[findNum(t)] = removeNum(t)
    })
    return resArr.join(" ").toString().trim()
    // ok. the worst code in the world
}




// Solution 4.
// Problem link: https://edabit.com/challenge/aHFBLwgCPKBoAcJAA

function squares(a,b){
    with(Math){
        return (floor(sqrt(b))) - (ceil(sqrt(a)) - 1)
    }
}



// Solution 5.
// Problem link: https://edabit.com/challenge/inecXu7CtXyvNekxu

function staircase(n) {
    var str = ""
    var neg = false
    if(n<0){
        n *= -1
        neg = true
    }
    for (var a = 1, b = n-1; a <=n; a++, b--) {
        str += "_".repeat(b)
        str += "#".repeat(a)
        str += a !== n ? "\n" : ""
    }
    return neg ? str.split("\n").reverse().join("\n") : str
}



// Solution 6.
// Problem link: https://edabit.com/challenge/Rgr2cba4Hp7kt47BW

function primesBelowNum(n) {
    var result = []
    for(var i = 2;i<n+1;i++){
        var asal = true
        for(var j = 2;j<i;j++){
            if(i % j === 0){
                asal = false
            }
        }
        if(asal){
            result.push(i)
        }
    }
    return result
}



// Solution 7.
// Problem link: https://edabit.com/challenge/EhGY9aaNHiCqqpnL9

function happy(n) {
    if(n === 4){return false}
    else if(n === 1){return true}
    var res = n.toString().split("").reduce((sum,cur) => sum + cur**2,0)
    return happy(res)
}



// Solution 8.
// Problem link: https://edabit.com/challenge/6R6gReGTGwzpwuffD

function sevenBoom(arr) {
    var res = []
    arr.forEach((el) => {
        [...String(el)].forEach(innerEl => {
            res.push(innerEl)
        })
    })
    return res.indexOf("7") !== -1 ? "Boom!" : "there is no 7 in the array"
}



// Solution 9.
// Problem link: https://edabit.com/challenge/8QTBwLzAdaM8wkrXu

const balanced = word => {
    first = word.slice(0, word.length/2)
    second = word.slice(-word.length/2)

    return first.split('').reduce((total, l)=>total +l.charCodeAt(),0) == second.split('').reduce((total, l)=>total +l.charCodeAt(),0)
}




// Solution 10.
// Problem link: https://edabit.com/challenge/7vowiHDR5oYksAjqQ

function maxPossible(n1, n2) {
    var result = ""
    n1 = [...n1.toString()].map((it) => {return Number(it)})
    n2 = [...n2.toString()].map((it) => {return Number(it)}).sort((a,b) => {return b-a})
    for(var i = 0;i < n1.length;i++){
        if(Math.max(...n2) > n1[i]){
            n1[i] = Math.max(...n2)
            n2.splice(n2.indexOf(Math.max(...n2)),1)
        }
    }
    n1.forEach((it) => {result += it})
    return Number(result)
}



// Solution 11.
// Problem link: https://edabit.com/challenge/8khL2WEhZ6M9onHL4

function countLayers(rug) {
    var a = Math.floor(rug.length/2)
    var last = ""
    var layers = 0
    for(var i = 0;i<rug[a].length;i++){
        if(rug[a][i] !== last){
            layers++
            last = rug[a][i]
        }
    }
    return Math.floor(layers/2 + 1)
}




// Solution 12.
// Problem link: https://edabit.com/challenge/NfBqxaDu4KoxAysWF

function doubleSwap(str, c1, c2) {
    str = str.split("")
    for (let i = 0; i < str.length; i++) {
        if (str[i] == c1) {
            str[i] = c2
        } else if (str[i] == c2) {
            str[i] = c1
        }
    }
    return str.join("")
}



// Solution 13.
// Problem link: https://edabit.com/challenge/ABiF6EsqRYMvogcgp

function getHashTags(str) {
    return str.replace(/,|\?/g,"").split(" ").sort( (a,b) => b.length - a.length).slice(0,3).map( el => "#" + el.toLowerCase() )
}




// Solution 14.
// Problem link: https://edabit.com/challenge/wikfKaQm3zP7buRA4

var isSpecialArray = a => a.every((v, i) => v%2 == i%2);




// Solution 15.
// Problem link: https://edabit.com/challenge/xukQmQoGopXbQMdZj

function validateSwaps(arr, str) {
    return arr.map(val => {
        if(val.length === str.length){
            let notMatch=[...val].filter((v,i) => v !== str[i]);
            if( notMatch.length ===2 )  {
                const [e1,e2] = notMatch;
                if([...val].indexOf(e1) === [...str].indexOf(e2) && [...val].indexOf(e2) === [...str].indexOf(e1)) return true;
            }if(notMatch.length === 0) return true;}
        return false;
    });
}




// Solution 16.
// Problem link: https://edabit.com/challenge/Hs4TpDHX57Rqegmgg

function concat(...args) {
    return [].concat(...args)
}



// Solution 17.
// Problem link: https://edabit.com/challenge/yXSTvCNen2DQHyrh6

const getLength = arr => arr.flat(Infinity).length;




// Solution 18.
// Problem link: https://edabit.com/challenge/y3e9Xdemxr65JQFX8

function isHappy(n) {
    if (n === 4) return false;
    const next = n.toString().split('').reduce(((ac,cv) => ac + Math.pow(cv,2)), 0);
    if (next === 1) return true;
    else return isHappy(next);
}


