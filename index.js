
let cel = document.getElementById("cel");
cel.addEventListener('input', function () {
    let cels = parseFloat(this.value);
    fah.value = (cels * 9 / 5) + 32;
    kal.value = cels + 273.15;
})

let fah = document.getElementById("fah");
fah.addEventListener('input', function () {
    let fa = parseFloat(this.value);
    cel.value = (fa - 32) * 5 / 9;
    kal.value = ((fa - 32) * 5 / 9) + 273.15;
})

let kal = document.getElementById("kal");
kal.addEventListener('input', function () {
    let k = parseFloat(this.value);
    cel.value = k - 273.15;
    fah.value = ((k - 273.15) * 9 / 5) + 32;
})
