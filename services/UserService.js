import Database from './firebase';
import { 
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithCredential,  
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
//import { LoginManager, AccessToken } from 'react-native-fbsdk-next';

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
    
};

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
  GoogleSignin.configure({
    scopes: ['email'], // qual API você quer acessar em nome do usuário; o padrão é o email e o perfil
    webClientId:
      '521418039726-2gonr408anuqf69qs158tdgis962uihh.apps.googleusercontent.com', // o ID do client do tipo WEB para seu servidor (necessário para verificar o ID do usuário e o acesso off-line)
    offlineAccess: true, // se você deseja acessar a API do Google API em nome do usuário DE SEU SERVIDOR
  });
  try {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    const userInfo = await GoogleSignin.signIn();        
    // create a google credential with the token
    const googleCredential = GoogleAuthProvider.credential(userInfo.idToken);
    // login with credential
    return signInWithCredential(auth, googleCredential);
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
      console.log('Sign cancelled', error)
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
      console.log('Sign in progress', error)
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
      console.log('Play services not availabe', error)
    } else {
      // some other error happened
      console.log('Something goes wrong', error)
    }
  }
};

export const googleLogout = async () => {
  try {
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
    setloggedIn(false);
    setuserInfo([]);
  } catch (error) {
    console.error(error);
  }
};

export const loginWithFacebook = async () => {
  try {
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }
    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();
    if (!data) {
      throw 'Something went wrong obtaining access token';
    }
    // Create a Firebase credential with the AccessToken
    const facebookCredential = FacebookAuthProvider.credential(data.accessToken);
    // Sign-in the user with the credential
    return signInWithCredential(auth, facebookCredential);
  } catch (error) {
    console.log(error);
  }
}