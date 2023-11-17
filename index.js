const express = require('express')
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})
  
const adminRouting = require('./routes/admin-routes/admin-routing');
const userRouting = require('./routes/user-routes/user-routing');

//const workersRouting = require('./routes/workers-routes/workers-routing');

app.use('/api', adminRouting,userRouting);



const supabase=require('./config/supabase');
const bodyParser=require('body-parser');