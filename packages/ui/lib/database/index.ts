import mongoose from "mongoose";

let cached = (global as any).mongoose || { conn: null, promise: null };

export async function connectToDatabase(MONGODB_URI: string) {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URI) throw new Error("MONGODB_URI is missing");

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URI, {
      dbName: "courses",
      bufferCommands: false,
    });

  cached.conn = await cached.promise;

  return cached.conn;
}
