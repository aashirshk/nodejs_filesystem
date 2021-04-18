const fs = require('fs');


// using readfilesync (synchronous read.)

try {
    const file_read = fs.readFileSync("test_file/test.txt", "utf-8");
    console.log("File read sync is: ")
    console.log(file_read);
} catch (error) {
    console.log(error);
}

// using writefile with promise.

const writeInFile = () => {
    return new Promise((resolve, reject)=>{
        fs.writeFile("test_file/test.txt", "I am writing in fileeee.", (err)=>{
            if (err) reject(err);
            resolve("Writing into file success.")
        })
    })
}

writeInFile().then(result => {
    console.log(result);
}).catch(error => {
    console.log("Writing into file error: ");
    console.log(error)
})

// using readfile with promise.
const read_file_promise = () => {
    return new Promise((resolve, reject)=>{
        fs.readFile("test_file/test.txt", "utf-8", (err, data)=>{
            if(err) reject(err);
            resolve(data)
        })
    })
};

const reading_async = async () =>{
    try{
        const readnz = await read_file_promise();
        console.log("Reading async..");
        console.log(readnz);
    }
    catch(error){
        console.log(error);
    }
    
};


// using append file with promise. 
const appending_async = ()=>{
    return new Promise((resolve, reject) => {
        fs.appendFile("test_file/test.txt", "Appendings...", (err)=>{
            if (err) reject(err);
            resolve("Successfully appended...")
        })
    })
};

appending_async().then(result => {
    console.log(result);
}).catch(error => {
    console.log("Error appending file")
    console.log(error);
})

reading_async()

const deleteFile = ()=>{
    return new Promise((resolve, reject) =>{
        fs.unlink("test_file/test.txt", (err)=>{
            if (err) reject(err);
            resolve("File deleted successfully.");
        })
    })
};

deleteFile().then(result => {
    console.log(result);
}).then(error => {
    console.log("Error: ")
    console.log(error);
})