// function name(){
// var a=()=>{
//     return 5;
// }

// return a;

// var a=()=>{
//     return 9;
// }



// }

// console.log(name()())


// var b=require('./bla')
// b.getName()
// const event=require('events')

// var newVent=new event()


// setTimeout(()=>{
//     newVent.emit('test',{name:"bla"})

// },3000)

// newVent.on('test',({name})=>{
// console.log("hello",name)

// })

//**********************creating server */


// const fs=require('fs');
// const http=require('http');
// http.createServer((req,res)=>{
    
//     if(req.method==="GET" &&req.url==="/"){

//         res.setHeader('Content-Type','text/html')

//         res.write(`
//             <form method="post" action="/data">
//             <input type="text" name="message">
//             <input type="submit">
    
//             </form>
    
    
    
//         `)
//     res.end()


//     }else if(req.method==="POST"&&req.url==="/data"){
//         var data=[];
//         req.on('data',(chuck)=>{
//             data.push(chuck)

//         })
//         req.on('end',()=>{
//             var fdata=Buffer.concat(data).toString();
//             fs.writeFileSync('data.txt',fdata);
//             res.statusCode=302
//           res.setHeader('Location','/')

//             res.setHeader('Content-Type','text/html')

//             res.write(`
//                 <form method="post" action="/data">
//                 <input type="text" name="message">
//                 <input type="submit">
        
//                 </form>
        
        
        
//             `)
//         res.end()


//         })


//     }else{

//         res.setHeader('Content-Type','text/html')

//         res.write(`
            
//         <h1>404 page not found</h1>
    
    
//         `)
//     res.end()

//     }
    
  

// }).listen(3000)



