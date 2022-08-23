function superbowlWin(record){

    const result = record.find(records => records.result==="W");
    if (result){
        return result.year
    }

}