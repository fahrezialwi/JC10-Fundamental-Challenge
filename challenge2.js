let display = () => {
    var inputNumber = document.getElementById("inputNumber").value;
    var char = ""

    for (var i = 0; i < inputNumber.length; ++i) {
        if (inputNumber.charAt(i) == '1') {
            char += '<span>' + "   " + '<br>' + "  |" + '<br>' + "  |" + '</span>'
        } else if (inputNumber.charAt(i) == '2') {
            char += '<span>' + " _ " + '<br>' + " _|" + '<br>' + "|_ " + '</span>'
        } else if (inputNumber.charAt(i) == '3') {
            char += '<span>' + " _ " + '<br>' + " _|" + '<br>' + " _|" + '</span>'
        } else if (inputNumber.charAt(i) == '4') {
            char += '<span>' + '   ' + '<br>' + "|_|" + '<br>' + "  |" + '</span>'
        } else if (inputNumber.charAt(i) == '5') {
            char += '<span>' + " _ " + '<br>' + "|_ " + '<br>' + " _|" + '</span>'
        } else if (inputNumber.charAt(i) == '6') {
            char += '<span>' + " _ " + '<br>' + "|_ " + '<br>' + "|_|" + '</span>'
        } else if (inputNumber.charAt(i) == '7') {
            char += '<span>' + " _ " + '<br>' + "  |" + '<br>' + "  |" + '</span>'
        } else if (inputNumber.charAt(i) == '8') {
            char += '<span>' + " _ " + '<br>' + "|_|" + '<br>' + "|_|" + '</span>'
        } else if (inputNumber.charAt(i) == '9') {
            char += '<span>' + " _ " + '<br>' + "|_|" + '<br>' + " _|" + '</span>'
        } else if (inputNumber.charAt(i) == '0') {
            char += '<span>' + " _ " + '<br>' + "| |" + '<br>' + "|_|" + '</span>'
        }
    }
    document.getElementById("display").innerHTML = `<pre>${char}</pre>`
}