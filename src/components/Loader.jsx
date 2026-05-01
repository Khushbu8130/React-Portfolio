import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-neutral-950 flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
      >
        Loading...
      </motion.div>
    </div>
  );
};

export default Loader;