import emailjs from '@emailjs/browser';

// Get EmailJS credentials from environment variables
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const initEmailJS = () => {
  // Initialize EmailJS with your public key
  emailjs.init(EMAILJS_PUBLIC_KEY);
  
  // Log to verify initialization (can be removed in production)
  console.log('EmailJS initialized with public key:', EMAILJS_PUBLIC_KEY ? '[Key present]' : '[Key missing]');
};

// Export the constants for use in components
export const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
export const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
export const EMAILJS_KEY = EMAILJS_PUBLIC_KEY;
