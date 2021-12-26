export class Database {
    static request(suffix, type, data = undefined, onload = undefined){
        const call = new XMLHttpRequest();
        call.open(type, "http://localhost:8080/" + suffix);
        call.setRequestHeader('Content-Type', 'application/json');
        if(data !== undefined){
            call.send(data);
        }
        else{
            call.send();
        }
        if(onload !== undefined){
            call.onload = () => {
                onload(call);
            };
        }
    }

    static getAllTimeSlots(updateFunction){
        Database.request("get/timeslot/all", "GET", {}, (e) => {
            let reply = JSON.parse(e.response);
            updateFunction(reply);
            console.log(reply);
        })
    }
}

export class General{
    static getUpdateFunction(variable) {
        return (e) => {
            variable = e;
        }
    }

    static lineBreak() { 
        return document.createElement("br");
    }

    static textElement(tag, text){
        let parent = document.createElement(tag);
        let textElement = document.createTextNode(text);
        parent.appendChild(textElement);
        return parent;
    }

    static clearElement(id){
        var div = document.getElementById(id);
        while(div.firstChild){
            div.removeChild(div.firstChild);
        }
    }

    static containerElement(classList){
        let container = document.createElement("div");

        return container;
    }

    static inputElement(placeHolder){
        let input = document.createElement("input");
        input.classList.add("form-control");
        input.placeholder = placeHolder;
        return input;
    }

    static textAreaElement(placeHolder){
        let textArea = document.createElement("textarea");
        textArea.classList.add("form-control");
        textArea.placeholder = placeHolder;
        textArea.rows = 30;
        return textArea;
    }

    static formElement(){
        let form = document.createElement("form");
        return form;
    }

    static buttonElement(text){
        let button = document.createElement("button");
        button.classList.add("btn");
        button.classList.add("btn-outline-success");
        button.classList.add("my-2");
        button.classList.add("my-sm-0")
        button.textContent = text;
        button.style.marginTop="40px";
        return button;
    }
}

class DateTime{
    constructor(timeObj){
        this.time = new Time(timeObj.time);
        this.date = new Date(timeObj.date);
    }
    getString(){
        return this.date.getString() + " " + this.time.getString();
    }
}

class Time{
    constructor(timeObj){
        this.minute = timeObj.minute;
        this.hour = timeObj.hour;
        this.period = timeObj.period;
    }
    getString(){
        if(this.minute < 10){
            return this.hour + ":0" + this.minute + " " + this.period;
        }
        return this.hour + ":" + this.minute + " " + this.period;
    }
}

class Date{
    constructor(dateObj){
        this.year = dateObj.year;
        this.month = dateObj.month;
        this.day = dateObj.day;
    }
    getString(){
        return this.month + "/" + this.day + "/" + this.year;
    }
}