const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());




let x;

let result='';

function getValues(str1) {
    result=''
    let str=str1.split('');
    x=str1.split('')
 do{
   
    for(let i=0;i+1<str.length;i++)
    {
            if(/\S/.test(str[i+1]))
            {
                let temp=str[0]
                if(/\S/.test(str[i+1])){
                    str[0]=str[i+1]
                    str[i+1]=temp
                    console.log(str)
                }else{
                    str[0]=str[i+2]
                    str[i+2]=temp
                    console.log(str)
                }
                result+=str.join('')+','
            }
    
    }

   
 }while(compare(str))

 return result;

}

function compare(arr) {
    
    let rotate=false
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]!=x[i])rotate=true
    }
    return rotate
}



app.post('/',(req,res)=>{

    console.log(req.body.str)
    let values=getValues(req.body.str)
    res.send(values)




})





const server=app.listen(8080, function () {
    console.log(' API Server for Mobile apps listening on port 8080!')
});


