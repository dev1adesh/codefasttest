import NextAuth from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "./libs/mongo";
import { adapter } from "next/dist/server/web/adapter";

const config = {
  providers: [
    // OAuth providers like Google, Facebook, etc.
  ],
  adapter: MongoDBAdapter(clientPromise),
};

export const { handlers, signIn, signOut, auth } = NextAuth(config);
