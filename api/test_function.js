module.exports = (userCollection, bcrypt, saltRounds) => {

  // date testing --- ISO date works!

  var date = new Date("2019/04/14");
  date = date.toISOString()
  console.log(date);

  userCollection.find({
    "date": {$lte:date}
  }).then(res=>{
    console.log("res "+res);
  }, err=>{
    console.log("err "+err);
  })

  // multi insert

  // console.log("Testing function");
  // let newArray = [
  //   { name: 'name01', password: 'pass1' },
  //   { name: 'name02', password: 'pass2' },
  //   { name: 'name03', password: 'pass3' },
  //   { name: 'name04', password: 'pass4' }
  // ];
  //
  // let promise = new Promise(function(resolve, reject) {
  //   let yolo;
  //   newArray.map((arr)=>{
  //     bcrypt.hash(arr.password, saltRounds, function(err, hash) {
  //       if(hash){
  //         arr.password = hash;
  //         yolo = hash;
  //         console.log(hash);
  //       }
  //     });
  //   });
  //   if(typeof(yolo)!="undefined")
  //     resolve(yolo);
  //
  // });
  //
  // const fun = async () => {
  //   let temp = await promise;
  //   console.log(temp);
  // }
  //
  // fun();

  // promise.then(
  //   function(result) {console.log(result);},
  //   function(error) { console.log(error); }
  // );

  // userCollection.insertMany(temp, function(err, doc){
  //   console.log("err "+err);
  //   console.log("doc "+doc);
  // })

}
