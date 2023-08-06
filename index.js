const http=require("http");

const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.end("<h1>hi, this is mukesh from home page</h1>");
    }
    else if(req.url=="/about"){
        res.end("<h1>hi, this is mukesh from about page</h1>");
    }
    else{
        res.end("<h1>sorry i didn't get you!!</h1>");
    }
});

server.listen("800",()=>{
    console.log("post 800");
})