/**
 * hitung detik ke dalam day, hour, minute and seconds
 */


function getPeriodTimes(seconds) {
    if (isNaN(seconds)) {
        return `${seconds} is not number`;
    }

    var hari = seconds / 86400;
    var sisaDetik = seconds % 86400;
    var jam = sisaDetik / 3600;
    sisaDetik = sisaDetik % 3600;
    var menit = sisaDetik / 60;
    sisaDetik = sisaDetik % 60;

    return `${Math.floor(hari)} hari ${Math.floor(jam)} jam ${Math.floor(menit)} menit ${Math.floor(sisaDetik)} detik`;
}

console.log(getPeriodTimes("700005A"));//700005A is not number
console.log(getPeriodTimes("700005"));//8 hari 2 jam 26 menit 45 detik
