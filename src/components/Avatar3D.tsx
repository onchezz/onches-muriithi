import { motion } from "framer-motion";

const Avatar3D = ({ className }: { className?: string }) => {
  return (
    <div className={`aspect-square w-80 rounded-full overflow-hidden ${className}`}>
      <motion.img
        src="/lovable-uploads/ffdd34fd-b353-4089-b4c4-09d3f98cda45.png"
        alt="Avatar"
        className="w-full h-full object-contain"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
};

export default Avatar3D;