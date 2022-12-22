// import NextAuth from "next-auth"
// import GoogleProvider from "next-auth/providers/google"
// import { db } from "../../../firebase"
// import { FirestoreAdapter} from "@next-auth/firebase-adapter"

// export const authOptions = {
//   // Configure one or more authentication providers
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_ID as string,
//       clientSecret: process.env.GOOGLE_SECRET_ID as string,
//     }),
    
//     // ...add more providers here
//   ],

//   adapter: FirestoreAdapter(db)
// }

// export default NextAuth(authOptions)

import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
//import { FirestoreAdapter } from "@next-auth/firebase-adapter"
//import { FirebaseAdapter } from "@next-auth/firebase-adapter";
// import { db } from "../../../firebase"
//    import {
//      collection,
//      query,
//      getDocs,
//      where,
//      limit,
//      doc,
//      getDoc,
//      addDoc,
//      updateDoc,
//      deleteDoc,
//      runTransaction,
//    } from "firebase/firestore";

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET_ID as string,
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  // adapter: FirestoreAdapter({
  //   db,
  //   collection,
  //   query,
  //   getDocs,
  //   where,
  //   limit,
  //   doc,
  //   getDoc,
  //   addDoc,
  //   updateDoc,
  //   deleteDoc,
  //   runTransaction,
  // })

  //debug:true,
  //adapter: FirebaseAdapter(db)
  //   apiKey: process.env.FIREBASE_API_KEY,
  //   appId: process.env.FIREBASE_APP_ID,
  //   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  //   databaseURL: process.env.FIREBASE_DATABASE_URL,
  //   projectId: process.env.FIREBASE_PROJECT_ID,
  //   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  //   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  //   // Optional emulator config (see below for options)
  //   emulator: {},

//     adapter: FirestoreAdapter({
//     apiKey: process.env.FIREBASE_API_KEY,
//     appId: process.env.FIREBASE_APP_ID,
//     authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//     databaseURL: process.env.FIREBASE_DATABASE_URL,
//     projectId: process.env.FIREBASE_PROJECT_ID,
//     storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//     Optional emulator config (see below for options)
//   emulator: {},
//    })
// ,
// callbacks: {
//   session({ session, token, user }) {
//     return session // The return type will match the one returned in `useSession()`
//   }
//   }
})
  // // ...