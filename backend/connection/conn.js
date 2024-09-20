const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://bhukyaanilnayak123:Anil_2413@cluster0.kwkuj.mongodb.net/crud?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then((res) => console.log("connected"));