import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AnimatedText = ({ name = "Your Name" }) => {
  const [displayText, setDisplayText] = useState("");
  const [phase, setPhase] = useState("typingOn"); // "typingOn", "erasing", "typingName"

  useEffect(() => {
    let timeout;

    if (phase === "typingOn") {
      // Typing "On..."
      const onText = "On...";
      if (displayText.length < onText.length) {
        timeout = setTimeout(() => {
          setDisplayText(onText.slice(0, displayText.length + 1));
        }, 100);
      } else {
        // Pause briefly and transition to erasing
        timeout = setTimeout(() => setPhase("erasing"), 1000);
      }
    } else if (phase === "erasing") {
      // Erase the current text
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 100);
      } else {
        // After erasing, decide the next phase
        setPhase("typingName");
      }
    } else if (phase === "typingName") {
      // Typing the full name
      if (displayText.length < name.length) {
        timeout = setTimeout(() => {
          setDisplayText(name.slice(0, displayText.length + 1));
        }, 200);
      } else {
        // Pause briefly and then erase the full name
        timeout = setTimeout(() => setPhase("erasing"), 100);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, phase, name]);

  return (
    <div className="text-[#FFB6A3]">
      {displayText.split("").map((letter, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.2,
            delay: i * 0.1,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </div>
  );
};

export default AnimatedText;

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const AnimatedText = ({ name = "Your Name" }) => {
//   const [displayText, setDisplayText] = useState("");
//   const [phase, setPhase] = useState("typingOn"); // "typingOn", "erasing", "typingName"

//   useEffect(() => {
//     let timeout;

//     if (phase === "typingOn") {
//       // Type "On..."
//       const onText = "On...";
//       if (displayText.length < onText.length) {
//         timeout = setTimeout(() => {
//           setDisplayText(onText.slice(0, displayText.length + 1));
//         }, 200);
//       } else {
//         // Move to erasing phase after a brief pause
//         timeout = setTimeout(() => setPhase("erasing"), 500);
//       }
//     } else if (phase === "erasing") {
//       // Erase "On..."
//       if (displayText.length > 0) {
//         timeout = setTimeout(() => {
//           setDisplayText(displayText.slice(0, -1));
//         }, 100);
//       } else {
//         // Move to typing the full name
//         setPhase("typingName");
//       }
//     } else if (phase === "typingName") {
//       // Type the full name letter by letter
//       if (displayText.length < name.length) {
//         timeout = setTimeout(() => {
//           setDisplayText(name.slice(0, displayText.length + 1));
//         }, 200);
//       } else {
//         // Restart the cycle after a brief pause
//         timeout = setTimeout(() => setPhase("typingOn"), 1000);
//       }
//     }

//     return () => clearTimeout(timeout);
//   }, [displayText, phase, name]);

//   return (
//     <div className="text-[#FFB6A3]">
//       {/* // <div> */}
//       {displayText.split("").map((letter, i) => (
//         <motion.span
//           key={i}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{
//             duration: 0.2,
//             delay: i * 0.1,
//             ease: [0.43, 0.13, 0.23, 0.96],
//           }}
//           className="inline-block"
//         >
//           {letter === " " ? "\u00A0" : letter}
//         </motion.span>
//       ))}
//     </div>
//   );
// };

// export default AnimatedText;

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const AnimatedText = ({ name = "Your Name" }) => {
//   const [displayText, setDisplayText] = useState("On...");
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const fullText = "On... " + name;
//     const interval = setInterval(() => {
//       if (index < fullText.length) {
//         setDisplayText(fullText.slice(0, index + 1));
//         setIndex(index + 1);
//       } else {
//         setDisplayText("On...");
//         setIndex(0);
//       }
//     }, 200); // Adjust timing for animation speed

//     return () => clearInterval(interval);
//   }, [index, name]);

//   return (
//     <div className="text-[#FFB6A3]">
//       {displayText.split("").map((letter, i) => (
//         <motion.span
//           key={i}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{
//             duration: 0.2,
//             delay: i * 0.1,
//             ease: [0.43, 0.13, 0.23, 0.96],
//           }}
//           className="inline-block"
//         >
//           {letter === " " ? "\u00A0" : letter}
//         </motion.span>
//       ))}
//     </div>
//   );
// };

// export default AnimatedText;
