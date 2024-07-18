

async function apicall(){
 try{
let res = await fetch("./src/public/js/data.json");
console.log(res);
let data = await res.json()
console.log(data);

data.map((item)=>{
    document.querySelector("#demo").innerHTML = `<img src=${item.img} >`
})
 } catch(err){
    console.log(err);
 }
       
    
}

apicall()