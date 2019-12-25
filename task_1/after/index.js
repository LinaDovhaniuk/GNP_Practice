
const func =  function(numOfIterations, delay, callback){
    for (let i = 0; i < numOfIterations; i++) {
        setTimeout(() =>  {
            console.log(`${i+1} iteration. ${callback(i)}`);
        }, delay * i);
    }
};

export default func;
