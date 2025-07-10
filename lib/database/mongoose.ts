import mongoose , { Mongoose } from "mongoose";

const MONGOOB_URL = process.env.MONGODB_URL;

interface MongoDBConnection {
    conn : Mongoose | null;
    promise : Promise<Mongoose> | null;
}

let cached: MongoDBConnection = (global as any).mongosse 

if (!cached) {
    cached = (global as any).mongosse = { conn: null, promise: null };
}

export const connectToDatabase = async () => {
    if (cached.conn) return cached.conn;
    if (!MONGOOB_URL) throw new Error('Missing MONGODB_URL ');

    cached.promise = 
     cached.promise || mongoose.connect(MONGOOB_URL , {
        dbName: 'imaginify',
        bufferCommands: false,
     })

     cached.conn = await cached.promise; 
        return cached.conn;
}