/* eslint-disable @typescript-eslint/no-explicit-any */
import { auth, googleProvider, db } from "./config";
import { validatePassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

interface AuthResponse {
  success: boolean;
  message?: string;
}

// Sign Up with Email & Password
export const signUp = async (
  email: string,
  password: string,
  userName: string,
  firstName: string,
  lastName?: string,
  phoneNumber?: string
): Promise<AuthResponse> => {
  try {
    const status = await validatePassword(auth, password); //check valid password
    if (!status.isValid) {
      let passwordErrorMessage = "";
      const needsLowerCase = status.containsLowercaseLetter !== true;
      const needsUpperCase = status.containsUppercaseLetter !== true;
      const needsNumber = status.containsNumericCharacter !== true;
      const shortPassword = status.meetsMinPasswordLength !== true;
      if (needsLowerCase)
        passwordErrorMessage = "Needs at least one lowerCase character";
      else if (shortPassword)
        passwordErrorMessage =
          "Password is too short , it should be 8 character or more";
      else if (needsUpperCase)
        passwordErrorMessage = "Needs at least one upperCase character";
      else if (needsNumber)
        passwordErrorMessage = "Needs at least one number character";
      return { success: false, message: passwordErrorMessage };
    }

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      userName: userName,
      firstName: firstName || "",
      lastName: lastName || "",
      phoneNumber: phoneNumber || "",
      favouriteList: [],
    });
    return { success: true };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
};

// Sign In with Email & Password
export const signIn = async (
  email: string,
  password: string
): Promise<AuthResponse> => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return { success: true };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
};

// Sign In with Google
export const signInWithGoogle = async (): Promise<AuthResponse> => {
  try {
    if (typeof window === "undefined") {
      throw new Error("signInWithPopup can only be used in the browser.");
    }
    await signInWithPopup(auth, googleProvider);
    return { success: true };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
};

// Logout
export const logout = async (): Promise<AuthResponse> => {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
};
