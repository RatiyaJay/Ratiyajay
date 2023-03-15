const itemsModel = require("../models/itemsModel")
const Item = require("../models/itemsModel")

/* GET request handler */
const getItem = async (req, res) => {
    const items = await Item.find()
    res.json(items)
}

/* POST Request handler */
const addItem = async (req, res) => {

    // const highlights = req.body.highlights.split(",")
    // const size = req.body.size.split(",")
try{

    /*var arrimages=[];
    for(let i=0;i<req.files.length;i++)
    {
arrimages[i]=req.files[i].filename;
    }
    /* The request.body must have all these values */
    const item = {
        id:req.body.id,
        name: req.body.name,
        type: req.body.type,
        price: req.body.price,
        //image: req.files,
        quantity: req.body.quantity,
        
        
    }

    const items=new itemsModel(item);
const item_data= await items.save()

    if(item){
        await Item.create(item)
        res.status(201).json({message: "Items Add Success"})
        res.redirect("/shop")
    } 
    else {
        res.status(400).json({message: "Unable to add item"})
    }
}
catch(error)
{
    res.status(400).send({message:"error occured"});
}
}

/* PUT Request handler */
const updateItem = (req, res) => {
    res.json({message: "update Item"})
}

/* DELETE Request handler */
const deleteItem = (req, res) => {
    res.json({message: "delete Item"})
}

module.exports = {
    getItem,
    addItem,
    updateItem,
    deleteItem
}