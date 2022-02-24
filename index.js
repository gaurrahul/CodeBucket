const express = require('express');
const app = express();

const port = 8000;

app.listen(port, err){
    if(err){
        console.log(`Error is running on the server: ${err}`);
    }
    else{
        console.log(`Server is running on the port: ${port}`);
    }
}