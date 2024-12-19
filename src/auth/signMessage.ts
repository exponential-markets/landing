import { AuthResponse, User } from "./types";

async function handleEOAAuth(window: Window): Promise<AuthResponse> {
    try {
      if (!window.ethereum) {
        throw new Error('No wallet detected. Please install MetaMask.');
      }
  
      // Connect and get accounts
      const accounts = await window.ethereum.request({ 
        method: 'eth_requestAccounts' 
      });
      const address = accounts[0];
  
      // Sign message
      const message = `Authenticate with Exponential Markets\nNonce: ${Date.now()}`;
      const signature = await window.ethereum.request({
        method: 'personal_sign',
        params: [message, address],
      });
  
      // Verify with backend
      const response = await fetch(`http://localhost:8080/user/wallet`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ address, signature, message }),
      });
  
      const data = await response.json();
      console.log("data in signMessage", data);
      if (!data.success) {
        throw new Error(data.error || 'Authentication failed');
      }
  
      return data;
    } catch (error: any) {
      if (error.code === 4001) {
        throw new Error('User rejected the request');
      }
      console.error('EOA Auth error:', error);
      throw error;
    }
  }
  
  async function handleSCAAuth(user: User): Promise<AuthResponse> {
    try {
      console.log("user in signMessage", user);
      
      // const response = await fetch(`http://localhost:8080/user/auth`, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     address: user.address,
      //     email: user.email,
      //     orgId: user.orgId,
      //     userId: user.userId,
      //     type: user.type
      //   }),
      // });
  
      // const data = await response.json();
      // if (!data.success) {
      //   throw new Error(data.error || 'Authentication failed');
      // }
  
      // return data;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'Authentication failed');
    }
  }
  
  export const connectAndSignMessage = async (window: Window, user?: User | null): Promise<AuthResponse> => {
    if (!user) {
      throw new Error('No user provided');
    }
  
    if (user.type === 'eoa') {
      return handleEOAAuth(window);
    } else if (user.type === 'sca') {
      return handleSCAAuth(user);
    }
  
    throw new Error('Invalid user type');
  };
  