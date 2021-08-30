// to do: call fs file here state condition if and if not file created

const fs = require('fs');

const writeFile = fileContent =>{
  return new Promise
  ((resolve, reject) => {
    
  fs.writeFile('./dist/index.html',
  fileContent, err => {
    if(err){
      reject(err);
      return;
    }
    resolve({
      ok:true,
      message: 'File Created please check Index.html'
    })
  })
})  
}

module.exports = writeFile