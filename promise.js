const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = (emosi) => {
  return new Promise((resolve, reject) => {
    if(emosi == undefined || emosi == ""){
      reject("emosi is undefined");
    }else{
      (async() =>{
        let totalEmosi = 0;
        const dataIXX = await promiseTheaterIXX();
        const dataVGC = await promiseTheaterVGC();
        
        dataIXX.forEach(item => {
          if(item.hasil == emosi){
            totalEmosi++;
          }
        });
      
        dataVGC.forEach(item => {
          if(item.hasil == emosi){
            totalEmosi++;
          }
        });
      
        resolve(totalEmosi);
      })();
    }
  });
};

module.exports = {
  promiseOutput,
};
