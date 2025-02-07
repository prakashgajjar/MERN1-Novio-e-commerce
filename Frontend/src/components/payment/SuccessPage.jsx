import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";


export default function SuccessPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-400 to-blue-500 text-white p-4">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        className="mb-6"
      >
        <CheckCircle className="w-24 h-24 text-white drop-shadow-lg" />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center drop-shadow-md"
      >
        Success!
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-2 text-lg text-center"
      >
        Your action was completed successfully.
      </motion.p>
      <motion.button
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => (window.location.href = "/")}    
        type="button"
        className="mt-6 bg-white text-green-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-green-100 transition"
      >
        Go Back Home
      </motion.button>
    </div>
  );
}
