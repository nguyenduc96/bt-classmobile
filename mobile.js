class Mobile {
    battery;
    draft;
    inbox;
    outbox;
    status;

    constructor(battery) {
        this.battery = battery;
        this.status = true;
        this.draft = "";
        this.inbox = [];
        this.outbox = [];
    }

    checkOnOff() {
        return this.battery > 0;
    }

    turnOn() {
        return status = true;
    }

    turnOff() {
        return status = false;
    }

    charge() {
        this.battery = 100;
    }

    compose(messenger) {
        this.draft = messenger;
        this.battery--;
    }

    sendMessenger(phone) {
        phone.inbox.push(this.draft);
        this.outbox.push(this.draft);
        this.battery--;
        this.draft = '';
    }

    getInbox() {
        return this.inbox;
    }

    getOutbox() {
        return this.outbox;
    }
}