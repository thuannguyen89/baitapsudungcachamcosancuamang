function bam() {
    let str = document.getElementById("abc").value;
    console.log (str);
    let UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let LOWER = 'abcdefghijklmnopqrstuvwxyz';
    let result = [];

    for (let x = 0; x < str.length; x++) {
        if (UPPER.indexOf(str[x]) !== -1) {
            result.push(str[x].toLowerCase());
        } else if (LOWER.indexOf(str[x]) !== -1) {
            result.push(str[x].toUpperCase());
        } else {
            result.push(str[x]);
        }
    }
    document.write(result.join(''));
}