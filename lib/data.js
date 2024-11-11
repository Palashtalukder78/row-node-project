const fs = require('fs')
const path = require('path')

const lib = {}

//Base directory of the data center
lib.baseDir = path.join(__dirname, '/../.data/');

//write data to file
lib.create = (dir, file, data, callback)=> {
    //Open file for writing
    fs.open(`${lib.baseDir+dir}/${file}.json`, 'wx', (err, fileDescriptor)=> {
        if(!err && fileDescriptor){
            //conert data to string
            const stringData = JSON.stringify(data)
            //write data to file and close it
            fs.writeFile(fileDescriptor, stringData, (err2)=> {
                if(!err2){
                    fs.close(fileDescriptor, (err3)=> {
                        if(!err3){
                            callback(false)
                        }else{
                            callback("Error closing the new file")
                        }
                    })
                }else{
                    callback('error writting to new file')
                }
            })
        }else{
            callback('There was an error, file may already exist')
        }
    })
}

//read data from file
lib.read = (dir, file, callback) =>{
    fs.readFile(`${lib.baseDir + dir}/${file}.json`, 'utf-8', (err, data)=>{
        callback(err, data)
    }); 
}

module.exports = lib;