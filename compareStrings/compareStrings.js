const myArgs = process.argv.slice(2);
console.log("arguments are "+myArgs[0]+ " and "+myArgs[1]);

if (myArgs[0] === myArgs[1]){
    
    console.log("Arguments are the same :)");
}
else{
    console.log("Arguments are not the same!")
}
