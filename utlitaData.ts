import fs from 'fs';
export function  getAuthentData () {
   const filePath="login-data.json";
   const rawData= fs.readFileSync(filePath);
   const jsonData=JSON.parse(rawData.toString());
   return {
      tel: jsonData.tel as string,
      password: jsonData.password as string
   };
   

   
}