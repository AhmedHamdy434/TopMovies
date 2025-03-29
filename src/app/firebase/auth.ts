/* eslint-disable @typescript-eslint/no-explicit-any */
import { auth, googleProvider } from "./config";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  //   UserCredential,
} from "firebase/auth";

interface AuthResponse {
  success: boolean;
  message?: string;
}

// Sign Up with Email & Password
export const signUp = async (
  email: string,
  password: string
): Promise<AuthResponse> => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
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
