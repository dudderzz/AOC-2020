import dataReport from "dataReport.js"

for (let a = 0; a < dataReport.length; a++){
    for(let b = a+1; b < dataReport.length; b++){
        if(dataReport[a]+dataReport[b] === 2020){
            console.log(dataReport[a]*dataReport[b])
        }
    }
}

for (let a = 0; a < dataReport.length; a++){
    for(let b = a+1; b < dataReport.length; b++){
        for(let c = b+1; c < dataReport.length; c++){   
            if(dataReport[a]+dataReport[b]+dataReport[c] === 2020){
                console.log(dataReport[a] * dataReport[b] * dataReport[c])
            }
        }
    }
}

