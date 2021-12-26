import {General, Database, DateTime, Timeslot} from "./util";

function init(){
    Database.getAllTimeSlots(displayTimeslots);
    Database.insertTimeslot(new Timeslot("Inserted timeslot", 0, 
        new DateTime(12, 25, 2021, 7, 30, "PM"), 
        new DateTime(12, 26, 2021, 12, 0, "AM")));
}


function displayTimeslots(timeslots){
    let rootElement = document.getElementById("root");
    for(let i = 0; i < timeslots.length; i++){
        let container = General.containerElement([]);
        let current = timeslots[i];

        let title = current.title;
        let repeated = current.repeated;
        let start = DateTime.create(current.start);
        let end = DateTime.create(current.end);
        

        let titleLine = General.textElement("h5", title);
        let str = "no";
        if(repeated === 1){
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