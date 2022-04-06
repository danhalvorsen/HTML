export const FindSubPatterns = (data: string) => {
    let subPatterns = new Array<string>();
    var buffer: string = "";
    //console.log("codes:", data.length);

    for (let i = 0; i <= data.length - 1; i++) {
        
        
        if(i===0){
            buffer += data[i];
        } 
        else {
            if(data[i] === buffer[buffer.length - 1]) //Same char like n-1)
            {
                buffer += data[i];
            }
            else { //We have a change in the data chars
                subPatterns.push(buffer);
                buffer = "";
                buffer += data[i];
            }
        }
        

        if(i === data.length-1)
        {
            buffer += data[i];
            subPatterns.push(buffer);
        }
    }

    return subPatterns;
};