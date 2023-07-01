import Database from './firebase';
import { 
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 

const auth = getAuth();

export const login = async (email, password) => {
    try{
        // Logging in with email and password
        const userCredential = await signInWithEmailAndPassword(auth, email, password);

        // Getting the logged-in user
        const user = userCredential.user;

        // Returning the logged-in user or any other required information
        return user;
    } catch (error) {
        console.error("Error loggin in: ", error);
        throw error;
    }
    
}

export const logout = async () => {
    try {          
      await auth.signOut();
      console.log("Logout successful!");
      // Perform any desired actions after successful logout
    } catch (error) {
      console.error("Logout failed:", error);
      // Handle the error as needed
    }
};

export const recoverPassword = async (email) => {
    try {
      await auth.sendPasswordResetEmail(email);
      console.log("Password recovery email sent successfully!");
      // Perform any desired actions after the recovery email is sent
    } catch (error) {
      console.error("Password recovery failed:", error);
      // Handle the error as needed
    }
};

export const signUp = async (email, password, name) => {
    try {      
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      // Save the user's name in a user collection
      const db = Database;
      const userRef = doc(db, 'users', user.uid);
  
      setDoc(userRef, { name: name })
  
      console.log("Signup successful!");
      console.log("User:", user);
      return user
      // Perform any desired actions after successful signup
    } catch (error) {
      console.error("Signup failed:", error);
      // Handle the error as needed
    }
};

export const loginWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider(Database.app);
    signInWithRedirect(auth, provider);
    
    // Sign in with Google popup
    const result = await getRedirectResult(auth);
    console.log('estou aqui')    

    // Access the user's information
    const user = result.user;

    console.log("Login with Google successful!");
    console.log("User:", user);
    // Perform any desired actions after successful login
  } catch (error) {
    console.error("Login with Google failed:", error);
    // Handle the error as needed
  }
};