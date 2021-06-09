export const data=[{
    id:0,
    text:"Build a page"
},
{
    id:1,
    text:"Finish your task"
},
{
    id:2,
    text:"Write a code"
},
{
    id:3,
    text:"Take your lunch"
},
{
    id:4,
    text:"Sohaib"
},
]

let myPromise = new Promise(function(resolve, reject) {
    // "Producing Code" (May take some time)
    // Try another promise with passing parameter for these two functions
    resolve("data"); // when successful
    reject();  // when error
    });
    
    // "Consuming Code" (Must wait for a fulfilled Promise)
    myPromise
    .then(
      function(value) { /* code if successful */ },
      function(error) { /* code if some error */ }
    )
    .catch((e)=>console.log);
    