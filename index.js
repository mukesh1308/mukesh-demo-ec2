const http=require("http");

const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.end("<h1>hi, this is <b>jothlingam</b> from home page</h1>");
    }
    else if(req.url=="/about"){
        res.end("<h1>hi, this is <b>jothilingam</b> from about page</h1>");
    }
    else{
        res.end("<h1>sorry i didn't get you!!</h1>");
    }
});

server.on("error",(e)=>{
    console.log(e);
})

server.listen("8000",()=>{
    console.log("post 8000");
})