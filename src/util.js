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

    static getAllTasks(updateFunction){
        Database.request("get/task/all", "GET", {}, (e)=> {
            let reply = JSON.parse(e.response);
            updateFunction(reply);
            console.log(reply);
        })
    }

    static insertTimeslot(timeslot){
        let data = JSON.stringify(timeslot);
        console.log(data);
        Database.request("add/timeslot", "POST", data);
    }

    static insertTask(task){
        let data = JSON.stringify(task);
        console.log(data);
        Database.request("add/task", "POST", data);
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

export class DateTime{
    constructor(month, day, year, hour, minute, period){
        this.date = new Date(month, day, year);
        this.time = new Time(hour, minute, period);
    }
    static create(dateTimeObj){
        let date = dateTimeObj.date;
        let time = dateTimeObj.time;
        return new DateTime(date.month, date.day, date.month, time.hour, time.minute, time.period)
    }
    toString(){
        return this.date.toString() + " " + this.time.toString();
    }
}

export class Time{
    constructor(hour, minute, period){
        this.hour = hour;
        this.minute = minute;
        this.period = period;
    }
    static create(timeObj){
        return new Time(timeObj.hour, timeObj.minute, timeObj.period);
    }
    toString(){
        if(this.minute < 10){
            return this.hour + ":0" + this.minute + " " + this.period;
        }
        return this.hour + ":" + this.minute + " " + this.period;
    }
}

export class Date{
    constructor(month, day, year){
        this.month = month;
        this.day = day;
        this.year = year;
    }
    static create(dateObj){
        return new Time(dateObj.month, dateObj.day, dateObj.year);
    }
    toString(){
        return this.month + "/" + this.day + "/" + this.year;
    }
}

export class Timeslot{
    constructor(title, repeated, start, end){
        this.id = -1;
        this.title = title;
        this.repeated = repeated;
        this.start = start;
        this.end = end;
    }
}