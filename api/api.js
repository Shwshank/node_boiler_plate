module.exports = (app, userCollection, bcrypt, jwt, saltRounds) => {

  app.get('/',(req, res)=> res.send('Hello Express!'));

  app.post('/',  (req, response)=>{

    console.log(req.body);

    userCollection.findOne({name:req.body.name})
    .then(res=>{
      if(res){
        console.log(res);
        response.send("User exists!");
      }
      else {

        bcrypt.hash(req.body.password, saltRounds).then(function(hash) {
          new userCollection({
            name: req.body.name,
            password: hash,
          }).save()
        });

        var tempJWT =  jwt.sign({
          exp: Math.floor(Date.now() / 1000) + (60 * 60),
          data: req.body.name
        }, 'secret');
        response.send("jwt: "+tempJWT);
      }
    })

  });

  app.post('/login', (req, response) =>{

    userCollection.findOne({name:req.body.name})
      .then(res=>{
        if(res){
          var temp2 = '';
          var temp1 = jwt.verify(req.body.jwt, 'secret', function(err, decoded) {
            temp2 = decoded.data;
          });

          console.log("--> "+temp2);
          let temp = res.password;
          bcrypt.compare(req.body.password, temp).then(res =>{
            if(res) {
              response.send("Valid login, user name as per jwt => temp2: " +temp2);
            } else {
              response.send("Invalid login");
            }
          });
        }
        else {
          response.send("User Don't exists!");
        }
      })
  });

  app.post('/multiUsers', (res, response) =>{

    var temp = res.body.data;
    console.log(temp);

  });

  app.post('/update', (res, req) => {
    console.log(res.body.data);
  });
}
