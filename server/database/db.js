import mongoose from 'mongoose';


const DBConnection = async () => {
    const MONODB_URL = `mongodb://aaaaaaa:000000@ac-j9rminp-shard-00-00.xxxnrmg.mongodb.net:27017,ac-j9rminp-shard-00-01.xxxnrmg.mongodb.net:27017,ac-j9rminp-shard-00-02.xxxnrmg.mongodb.net:27017/?ssl=true&replicaSet=atlas-qo4jg7-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(MONODB_URL, {useNewUrlParser: true})
        console.log("database connected successfully")
    } catch (error) {
        console.error(`Error while connecting with database`, error.message)
    }
}

export default DBConnection