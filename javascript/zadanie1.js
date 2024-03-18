function showNumbers(...args) {
    var st = "Suma liczb: "
    var sum = 0
    for(var i = 0; i < args.length; i++) {
        st += args[i] + " "
        sum += args[i]
    }
    console.log(st + " wynosi " + sum)
}

showNumbers(4,6,7,8)