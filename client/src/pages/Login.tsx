import { useEffect } from 'react';
import { getLoginUrl } from '@/const';
import { motion } from 'framer-motion';

export default function Login() {
  useEffect(() => {
    // Redirect to login URL after a brief delay for UX
    const timer = setTimeout(() => {
      window.location.href = getLoginUrl();
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-dark flex items-center justify-center pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="glass-lg p-12 text-center max-w-md"
      >
        <div className="mb-6">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#E84A8A] mx-auto"></div>
        </div>
        <h1 className="text-3xl font-bold text-white mb-4">Redirecting to Login</h1>
        <p className="text-white/70 mb-6">Please wait while we redirect you to the authentication page...</p>
        <p className="text-white/50 text-sm">If you are not redirected automatically, please click the button below.</p>
        <a
          href={getLoginUrl()}
          className="cta-button-lg mt-6 inline-block"
        >
          Login Now
        </a>
      </motion.div>
    </div>
  );
}
