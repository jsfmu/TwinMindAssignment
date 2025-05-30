import React, { createContext, useState, useContext, useEffect } from 'react';
import { auth } from '../config/firebase';
import { onAuthStateChanged, User, GoogleAuthProvider, signInWithCredential } from '@firebase/auth';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';

// Ensure WebBrowser is ready
WebBrowser.maybeCompleteAuthSession();

interface AuthContextData {
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: '815068404421-3u3b817bk1doskau065ev80ifadno5g0.apps.googleusercontent.com',
    scopes: ['profile', 'email']
  });

  useEffect(() => {
    if (!auth) {
      console.error('Auth not initialized');
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential).catch(error => {
        console.error('Firebase Sign-In Error:', error);
      });
    }
  }, [response]);

  const signInWithGoogle = async () => {
    try {
      await promptAsync();
    } catch (error) {
      console.error('Google Sign-In Error:', error);
      throw error;
    }
  };

  const signOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error('Sign-Out Error:', error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, signInWithGoogle, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 