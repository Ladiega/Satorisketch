'use client'


// import { useEffect, useRef, useState } from "react";

// export default function AnimatedCard({ children }) {
//   const cardRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (cardRef.current) {
//       observer.observe(cardRef.current);
//     }
//     return () => {
//       <div
//         ref={cardRef}
//         className={`opacity-0 translate-x-full transition-all duration-700 ease-in-out transform ${isVisible ? "opacity-100 translate-x-0" : ""}`}
//       >
//         {children}
//       </div>
//     }

//   })

//   return (
//     <div>Animated Card</div>
//   )
// }

// import { useEffect, useRef, useState } from "react";

// const AnimatedCard = ({ children }) => {
//   const cardRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true); // Activa la animación
//         }
//       },
//       { threshold: 0.1 } // Detecta cuando el 10% de la card es visible
//     );

//     if (cardRef.current) {
//       observer.observe(cardRef.current);
//     }

//     return () => {
//       if (cardRef.current) {
//         observer.unobserve(cardRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div
//       ref={cardRef}
//       className={`opacity-0 translate-x-full transition-all duration-700 ease-in-out transform ${isVisible ? "opacity-100 translate-x-0" : ""
//         }`}
//     >
//       {children}
//     </div>
//   );
// };

// export default AnimatedCard;

// import { useEffect, useRef, useState } from "react";

// const AnimatedCard = ({ children }) => {
//   const cardRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       {
//         rootMargin:"100px 0px -100px 0px" // Activa cuando el 10% del elemento es visible
//       }
//     );

//     if (cardRef.current) {
//       observer.observe(cardRef.current);
//     }

//     return () => {
//       if (cardRef.current) {
//         observer.unobserve(cardRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div
//       ref={cardRef}
//       className={`opacity-0 translate-x-full transition-all duration-700 ease-in-out ${isVisible ? "opacity-100 translate-x-0" : ""
//         }`}
//     >
//       {children}
//     </div>
//   );
// };

// export default AnimatedCard;

import { useEffect, useRef, useState } from "react";

const AnimatedCard = ({ children }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1, // Detecta cuando el 10% del elemento es visible
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`opacity-0 translate-x-full transition-all duration-700 ease-in-out ${isVisible ? "opacity-100 translate-x-0" : ""
        }`}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;