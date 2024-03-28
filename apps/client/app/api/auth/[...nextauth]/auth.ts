import mongoClientPromise from '@/lib/database/mongoClientPromise';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import EmailProvider from 'next-auth/providers/nodemailer';

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [Google
    ({
        clientId: process.env.AUTH_GOOGLE_CLIENT_ID,
        clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET
      }),
      EmailProvider({
        server: {
          host: process.env.SMTP_HOST,
          port: process.env.SMTP_PORT,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD,
          },
        },
        from: process.env.SMTP_FROM,
      }),
],
secret: process.env.AUTH_SECRET,
adapter: MongoDBAdapter(mongoClientPromise, { dbName: process.env.ENVIRONMENT }),
pages: {
    signIn: '/auth',
    signOut: '/auth',
  },
});