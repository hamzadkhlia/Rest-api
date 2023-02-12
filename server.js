const express = require('express')
const connectDB=require('./config/connectdb')
const User=require("./models/User")
const app = express()

app.get('/users',async(req,res)=>{
    const users = await User.find({});
    res.json(users)
})
// POST :  ADD A NEW USER TO THE DATABASE 
app.post("/user", async (req, res) => {
    try {
    const newUser = new User({
        name: req.body.name,
        age: req.body.age
    });
    await newUser.save();
    res.json({ message: "User added successfully" });
    } catch (error) {
    res.status(400).send(error);
    }
});
newUser
.save()
.then((user) => res.json(user))
.catch((err) => res.status(400).json({ message: err.message }));
;

app.put("/users/:id", (req, res) => {
User.findByIdAndUpdate(req.params.id, req.body, { new: true })
.then((user) => {
if (!user) return res.status(404).json({ message: "User not found" });
res.json(user);
})
.catch((err) => res.status(400).json({ message: err.message }));
});
app.delete("/users/:id", (req, res) => {
    User.findByIdAndDelete(req.params.id)
    .then((user) => {
        if (!user) return res.status(404).json({ message: "User not found" });
        res.send({ message: "User successfully deleted" });
    })
    .catch((err) => res.status(400).json({ message: err.message }));
});
app.listen(port, (err) =>err? console.log(err): console.log(`app listening on port ${port}!`))