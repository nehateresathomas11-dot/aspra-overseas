import { motion } from 'framer-motion';
import { useState } from 'react';
import { openWhatsAppChats } from '@/lib/whatsapp';

export default function WhatsAppFloat() {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    openWhatsAppChats();
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="fixed bottom-6 right-6 z-40"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-lg smooth-transition relative"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Official WhatsApp Chat Bubble Icon */}
        <svg
          className="w-7 h-7 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* WhatsApp chat bubble with phone handset */}
          <path d="M20.52 3.98C18.44 1.9 15.54 0.75 12.31 0.75c-5.74 0-10.41 4.67-10.41 10.41 0 1.83.48 3.61 1.4 5.18L2.01 23.25l5.5-1.44c1.52.83 3.23 1.27 4.98 1.27 5.74 0 10.41-4.67 10.41-10.41 0-2.78-1.13-5.39-3.18-7.36zm-8.21 15.93c-1.56 0-3.09-.41-4.44-1.19l-.32-.19-3.3.86.88-3.22-.21-.33c-.83-1.32-1.27-2.85-1.27-4.44 0-4.77 3.88-8.65 8.65-8.65 2.31 0 4.48.9 6.11 2.53 1.63 1.63 2.53 3.8 2.53 6.11 0 4.77-3.88 8.65-8.65 8.65z"/>
          <path d="M17.48 14.3c-.26-.13-1.53-.76-1.77-.84-.24-.08-.41-.13-.58.13-.17.26-.66.84-.81 1.01-.15.17-.3.19-.56.06-.26-.13-1.09-.4-2.07-1.28-.77-.68-1.29-1.52-1.44-1.78-.15-.26-.02-.4.11-.53.11-.11.26-.29.39-.43.13-.14.17-.24.26-.4.08-.17.04-.31-.02-.43-.06-.13-.58-1.4-.79-1.92-.21-.5-.42-.43-.58-.43-.15 0-.31-.02-.48-.02-.17 0-.44.06-.67.31-.24.26-.91.89-.91 2.17 0 1.28.93 2.51 1.06 2.68.13.17 1.82 2.78 4.41 3.9.62.27 1.1.43 1.48.55.62.2 1.18.17 1.62.1.49-.07 1.53-.63 1.75-1.23.22-.6.22-1.11.15-1.23-.06-.12-.23-.19-.48-.32z"/>
        </svg>
      </motion.a>

      {/* Tooltip */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          className="absolute bottom-16 right-0 bg-white text-gray-800 px-3 py-2 rounded-lg text-sm font-semibold whitespace-nowrap shadow-lg"
        >
          Chat with us on WhatsApp
        </motion.div>
      )}
    </motion.div>
  );
}
