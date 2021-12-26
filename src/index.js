import {General, Database, DateTime, Date, Time} from "./util";

function init(){
    Database.getAllTimeSlots(displayTimeslots);
}


function displayTimeslots(timeslots){
    let rootElement = document.getElementById("root");
    for(let i = 0; i < timeslots.length; i++){
        let current = timeslots[i];
        let text = "";
        let title = current.title;
        let id = current.id;
        let repeated = current.repeated;
        let start = current.start;
        let end = current.end;
        

        let textElement = General.textElement("p", text);
    }
}

init();