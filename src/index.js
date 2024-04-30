const express = require("express");
const mongoose  = require("mongoose");

require("dotenv").config();
const userRoutes = require("./routes/user");

const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json());
app.use('/api', userRoutes);


//route
app.get('/', (req, res) => {
res.send('Bienvendio a mi API');
});

//Mongodb connection
mongoose.connect(process.env.MONGODB_URI).then(() => console.log("conectado a mongodb atlas")).catch((error) => console.error(error));


app.listen(port, () => console.log('server listening on port', port));