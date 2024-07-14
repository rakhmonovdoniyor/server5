const exprress = require("express")

const app = exprress();

app.use(exprress.json());
app.use(exprress.urlencoded({extended:false}));



app.use("/add-tuning", (req, res, next)=> {
    res.send(
       `
       <div style="margin-top:20px; display:flex; flex-direction:column; align-items:center">
            <h1 style="text-align:center">Add new Tuning Car</h1>

            <form action="/tuning" method="POST" style="display:
             flex; flex-direction: column; gap: 50px; width: 500px;  border-radius: 10px; padding: 50px; background-color:  #006DAB ">

                <input style="padding: 12px; border:1px solid black; border-radius: 5px" type="text" name="name" placeholder="Name" />
                <input style="padding: 12px; border:1px solid black; border-radius: 5px" type="text" name="location" placeholder="location" />      
                <input style="padding: 12px; border:1px solid black; border-radius: 5px" type="number" name="phoneNumber" placeholder="Phone Number" />
                <input style="padding: 12px; border:1px solid black; border-radius: 5px" type="text" name="brand" placeholder="Brand" />
                <input style="padding: 12px; border:1px solid black; border-radius: 5px" type="Date" name="name" placeholder="Type"/>
                <input  style="padding: 12px; border:1px solid black; border-radius: 5px" type="number" name="CarCost" placeholder="Cost"/>                 
                 <input style="padding: 12px; border:1px solid black; border-radius: 5px" type="text" name="type" placeholder="type"/>                
                 <input style="padding: 12px; border:1px solid black; border-radius: 5px" type="text" name="Licensce" placeholder="License"/>                
                 <input style="padding: 12px; border:1px solid black; border-radius: 5px" type="number" name="People" placeholder="People"/>                 
                 <input style="padding: 12px; border:1px solid black; border-radius: 5px" type="date" name="date" />                  
                 <input style="padding: 12px; border:1px solid black; border-radius: 5px" type="text" name="company" placeholder="Company"/>                   
                 <input style="padding: 12px; border:1px solid black; border-radius: 5px" type="text" name="location" placeholder="Location"/> 
                
                <input  type="submit" value="Send me"
                 style="background-color: yellowgreen; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer"/>
            </form>
        </div>
        
        `
    );
});


app.use("/tuning", (req, res, next) => {
    console.log(req.body);
    res.end('<h1> Tuning Page</h1>')
    res.redirect("/");
});



app.use("/", (req, res, next) => {
    console.log("Midlwaves");
    res.send("<h1>Bismillah</h1>")
    next();
});


const PORT = process.env.PORT  || 5054;


app.listen(PORT, ()=> {
    console.log('Running:', PORT);
});


