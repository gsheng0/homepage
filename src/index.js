import {General, Database, DateTime, Date, Time, Timeslot} from "./util";

function init(){
    Database.getAllTimeSlots(displayTimeslots);
    //Database.insertTimeslot(new Timeslot("Inserted timeslot", 0, ))
}


function displayTimeslots(timeslots){
    let rootElement = document.getElementById("root");
    for(let i = 0; i < timeslots.length; i++){
        let container = General.containerElement([]);
        let current = timeslots[i];

        let title = current.title;
        let id = current.id;
        let repeated = current.repeated;
        let start = new DateTime(current.start);
        let end = new DateTime(current.end);
        

        let titleLine = General.textElement("h5", title);
        let str = "no";
        if(repeated == 1){
            str = "yes";
        }
        let secondLine = General.textElement("p", "Repeated: " + str);
        let startTimeLine = General.textElement("p", start.toString());
        let endTimeLine = General.textElement("p", end.toString());
        secondLine.style.paddingLeft = 40 + "px";
        startTimeLine.style.paddingLeft = 40 + "px";
        endTimeLine.style.paddingLeft = 40 + "px";
        container.appendChild(titleLine);
        container.appendChild(secondLine);
        container.appendChild(startTimeLine);
        container.appendChild(endTimeLine);
        rootElement.appendChild(container);
        

    }
}

init();