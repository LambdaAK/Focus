import { FirebaseApp, initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import { Database, getDatabase } from "firebase/database";
import firebaseConfig from "./firebaseConfig";

const app: FirebaseApp = initializeApp(firebaseConfig);
const database: Database = getDatabase(app)
const auth: Auth = getAuth()

const usersCreate = async (email: string, password: string) => {
  
  const response = await fetch('http://127.0.0.1:5000/users/create', {
    method: 'POST',
    mode: "cors",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  const json = await response.json()
  return json
}

const setWorkingHours = async (workingHours: {
  monday: {start: string, end: string},
  tuesday: {start: string, end: string},
  wednesday: {start: string, end: string},
  thursday: {start: string, end: string},
  friday: {start: string, end: string},
  saturday: {start: string, end: string},
  sunday: {start: string, end: string},
}) => {

  try {
    if (auth.currentUser == null) {
      throw new Error("User is not logged in")
    }

    const idToken: string = await auth.currentUser.getIdToken();

    // add the idToken to the headers of the request

    const response: Response = await fetch("http://127.0.0.1:5000/users/profile/working_hours", {
      method: 'POST',
      mode: "cors",
      headers: {
        'Content-Type': 'application/json',
        "Authorization": idToken
      },
      body: JSON.stringify(workingHours)
    })
  }
  catch (error) {
    alert(`Error: ${error}`)
  }

}

export {
  usersCreate,
  setWorkingHours
}