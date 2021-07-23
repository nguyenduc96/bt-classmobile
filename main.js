let nokiaPhone = new Mobile(50);
let iPhone = new Mobile(50);
document.getElementById('pinnokia').innerHTML = nokiaPhone.battery + "%";
document.getElementById('piniphone').innerHTML = iPhone.battery + "%";

function shutDown() {
    //
}

function checkBattery(battery) {
    return battery <= 0;
}

function clickChargenokia() {
    alert('da sac pin nokia');
    nokiaPhone.charge();
    console.log(nokiaPhone.battery);
    document.getElementById('pinnokia').innerHTML = nokiaPhone.battery + "%";
}

function clickChargeiphone() {
    alert('da sac pin iphone')
    iPhone.charge();
    console.log(iPhone.battery);
    document.getElementById('piniphone').innerHTML = iPhone.battery + "%";
}

function nokiaMessenger() {
    if (checkBattery(nokiaPhone.battery)) {
        alert("Het pin! Hay sac pin!");
        shutDown();
    } else {
        let mess = document.getElementById('phone1').value;
        nokiaPhone.compose(mess);
        nokiaPhone.sendMessenger(iPhone);
        document.getElementById('outbox1').innerHTML = nokiaPhone.outbox + "<br>";
        document.getElementById('inbox2').innerHTML = iPhone.inbox + "<br>";
        document.getElementById('pinnokia').innerHTML = nokiaPhone.battery + "%";
    }
}

function iphoneMessenger() {
    if (checkBattery(iPhone.battery)) {
        alert("Het pin! Hay sac pin!");
        shutDown();
    } else {
        let mess = document.getElementById('phone2').value;
        iPhone.compose(mess);
        iPhone.sendMessenger(nokiaPhone)
        document.getElementById('outbox2').innerHTML = iPhone.outbox + "<br>";
        document.getElementById('inbox1').innerHTML = nokiaPhone.inbox + "<br>";
        document.getElementById('piniphone').innerHTML = iPhone.battery + "%";
    }
}

function shutDownnokia() {
    alert('Đã tắt máy!!!');
    nokiaPhone.battery = 0;
    nokiaPhone.turnOff();
    document.getElementById('pinnokia').innerHTML = nokiaPhone.battery + "%";
}

function turnOnnokia() {
    alert('Đã bật máy!!!');
    nokiaPhone.battery = 50;
    nokiaPhone.turnOn();
    document.getElementById('pinnokia').innerHTML = nokiaPhone.battery + "%";

}

function shutDowniphone() {
    alert('Đã tắt máy!!!');
    iPhone.battery = 0;
    iPhone.turnOn();
    document.getElementById('piniphone').innerHTML = iPhone.battery + "%";
}

function turnOniphone() {
    alert('Đã bật máy!!!')
    iPhone.battery = 50;
    iPhone.turnOff()
    document.getElementById('piniphone').innerHTML = iPhone.battery + "%";
}


