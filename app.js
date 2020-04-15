const express=require('express');

const port=process.env.PORT || 2000;
const hbs=require('hbs');
var app=express();

hbs.registerPartials(__dirname + '/views/partials');

hbs.registerHelper('small',(text)=>

{
    return text.toLowerCase();
});



hbs.registerHelper('getCurrentYear',()=>
{
return new Date().getFullYear()
});

//getCurrentYear is helper name
hbs.registerHelper('Capt',(text)=>{
    return text.toUpperCase();
});
//Helper is form of function,declare a hlper name and define a helper call
//not need to make seperate hbs file
//capt is helper name use it in hbs file 


app.get('/',(req,res)=>
{
    res.render('home.hbs',
    {
        title:'CAR SERVICING APPLICATION',
        
        date:new Date()
       

    });
});

app.get('/book',(req,res)=>
{
    res.render('book.hbs',
    {
        title:'Succesfully Booked An Appointment',
        name:'Gurleen Kaur',
        Date:'29th April,2020',
        Service:'Wheel Balancing',
        Carno:'PB08 EJ 2930'
        
        
       

    });
});
app.get('/cancel',(req,res)=>
{
    res.render('cancel.hbs',
    {
        title:'Succesfully Cancelled An Appointment',
        name:'Gurleen Kaur',
        Date:'29th April,2020',
        Service:'Wheel Balancing',
        Carno:'PB08 EJ 2930'  
       

    });
});
app.get('/update',(req,res)=>
{
    res.render('update.hbs',
    {
        title:'Succesfully Updated An Appointment',
        name:'Gurleen Kaur',
        Date:'30th April,2020',
        Service:'Washing',
        Carno:'PB08 EJ 2930'  
       

    });
});









app.listen(port,()=>{
    
    console.log(`Server is up on port ${port}`);
}
);