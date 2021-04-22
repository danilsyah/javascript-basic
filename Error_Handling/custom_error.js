class validationError extends Error{
    constructor(message){
        super(message);
        this.name = "validationError";
    }
}

let json = '{"age":26}';

try {
    let user = JSON.parse(json)

    if(!user.name){
        throw new validationError("'name' is required");
    }

    if (!user.age){
        throw new validationError("'age' is required.");
    }

    console.log(user.name)
    console.log(user.age)
} catch (error) {
    if(error instanceof SyntaxError){
        console.log(`JSON Syntax Error: ${error.message}`);
    }else if(error instanceof validationError){
        console.log(`Invalid data : ${error.message}`);
    }else if(error instanceof ReferenceError){
        console.log(error.message)
    }else{
        console.log(error.stack)
    }
}