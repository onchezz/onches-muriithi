import { motion } from "framer-motion";

const Avatar3D = ({ className }: { className?: string }) => {
  return (
    <div className={`relative aspect-square w-full max-w-[320px] mx-auto overflow-hidden rounded-full ${className}`}>
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 opacity-50" />
      <motion.img
        src="/lovable-uploads/ffdd34fd-b353-4089-b4c4-09d3f98cda45.png"
        alt="Avatar"
        className="w-full h-full object-contain p-2"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
};

export default Avatar3D;