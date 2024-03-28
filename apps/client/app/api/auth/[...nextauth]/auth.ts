import mongoClientPromise from '@/lib/database/mongoClientPromise';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [Google
    ({
        clientId: process.env.AUTH_GOOGLE_CLIENT_ID,
        clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET
      })
],
secret: process.env.AUTH_SECRET,
adapter: MongoDBAdapter(mongoClientPromise, { dbName: process.env.ENVIRONMENT })
});