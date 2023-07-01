// const express=require('express')
// const app=express()
// const bodyParser=require('body-parser')
// const cors=require('cors')
// const dotenv=require('dotenv')
// const mongoose=require('mongoose')

// app.use(bodyParser.json())
// app.use(cors())
// dotenv.config()

// const newPhotos=new mongoose.model(
//     'photos',
//     new mongoose.Schema({
//         imgURL:String
//     })
// )


// //CRUD

// //PHOTOS

// app.get('/photos', async(req,res)=>{
//     const photos=await newPhotos.find()
//     res.status(200).send(photos)
// })

// //BY ID

// app.get('/api/photos/:id', async(req,res)=>{
//     const id=req.params.id
//     const photo= await newPhotos.findById(id)
//     res.status(200).send(photo)

// })

// //DELETE

// app.delete('/api/photos/:id', (req,res)=>{
//     const id=parseInt(req.params.id)
//     const photoDeleted= newPhotos.findByIdAndDeleted(id).then(()=>{
//         res.status(200).send(`succesfully deleted ${photoDeleted.name}`)
//     })
// })

// app.post('/api/photos', async(req,res)=>{
//     const newModel=newPhotos({
//         imgURL:req.body.imgURL
//     })
//    await newModel.save()
//    res.status(200).send(`succesfully posted ${newModel.name}`)
// })

// const DB_KEY=process.env.DB_KEY
// const DB_PASSWORD=process.env.DB_PASSWORD

// mongoose.connect(DB_KEY.replace('<password>', DB_PASSWORD)).then(()=>{
//     console.log('MONGO DB CONNECTED')
// })

// const PORT=process.env.PORT

// app.listen(PORT,()=>{
//     console.log(`Running PORT ${PORT}`)
// })


