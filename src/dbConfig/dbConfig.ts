import mongoose from 'mongoose'

export async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection;

        connection.on("connected",()=>{
            console.log("DB connected.")
        })

        connection.on('error',(e)=>{
            console.log("MongoDB connection error.",e)
        })
    } catch (error) {
        console.log("Something went wrong!")
        console.log(error)
    }
}