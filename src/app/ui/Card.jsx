// import Image from "next/image"
// import Rodo from "../../../public/images/rodo.jpeg"
// import Mateo from "../../../public/images/mat.jpg"
// import DobleA from "../../../public/images/dobleA.jpeg"


// export default function Card() {

//   return (
//     <section className="md:flex md:justify-between md:mr-44 md:ml-44">

     






//     <div className="flex flex-col justify-center text-center bg-black m-10 md:md-2 rounded-md md:shadow-sm shadow-md shadow-black ">
//         <div className="mt-5 ">
//         <h2 className="bg-blue-500 font-bold text-4xl  md:text-3xl">
//           MEET OUR STAFF
//         </h2>
//       </div>
//       <div className="flex justify-center">
//         <Image
//           src={Rodo}
//           alt="Profesor Rodo"
//           width={400}
//         />
//       </div>
//       <div className="">
//         <div className="bg-blue-500 font-black text-2xl">Rodolfo Pertuz</div>
//         <div className="text-white font-bold m-5">Owner and Chiefh Insturctor</div>        
//       </div>
//       <div className="bg-white ">
//         <p>
// I am a paragraph. Click here to add your own text and edit me. I am a great place for you to tell a story and let your users know a little more about you. </p>
//       </div>
//       </div>
      
//       <div className="flex flex-col justify-center text-center bg-black m-10 md:md-2 rounded-md md:shadow-sm shadow-md shadow-black ">
//         <div className="mt-5 ">
//           <h2 className="bg-blue-500 font-bold text-4xl  md:text-3xl">
//             MEET OUR STAFF
//           </h2>
//         </div>
//         <div className="flex justify-center">
//           <Image
//             src={Mateo}
//             alt="Profesor Rodolfo"
//             width={400}
//           />
//         </div>
//         <div>
//           <div className="bg-blue-500 font-black text-2xl">Mateo Romero</div>
//           <div className="text-white font-bold m-5">Black Belt Insturctor</div>
//         </div>
//         <div className="bg-white ">
//           <p>
//             I am a paragraph. Click here to add your own text and edit me. I am a great place for you to tell a story and let your users know a little more about you. </p>
//         </div>
//       </div>

//       <div className="flex flex-col justify-center text-center bg-black m-10 md:md-2 rounded-md md:shadow-sm shadow-md shadow-black ">
//         <div className="mt-5">
//           <h2 className="bg-blue-500 font-bold text-4xl  md:text-3xl">
//             MEET OUR STAFF
//           </h2>
//         </div>
//         <div className="flex justify-center">
//           <Image
//             src={DobleA}
//             alt="Profesor DobleA"
//             width={400}
//           />
//         </div>
//         <div>
//           <div className="bg-blue-500 font-black text-2xl">Doble A</div>
//           <div className="text-white font-bold m-5">Black Belt Insturctor</div>
//         </div>
//         <div className="bg-white ">
//           <p>
//             I am a paragraph. Click here to add your own text and edit me. I am a great place for you to tell a story and let your users know a little more about you. </p>
//         </div>
//       </div>
//     </section>
//   )
// }

'use client'

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Rodo from "../../../public/images/rodo.jpeg";
import Mateo from "../../../public/images/mat.jpg";
import DobleA from "../../../public/images/dobleA.jpeg";

// Hook personalizado para detectar si un elemento está en el viewport
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return [ref, isVisible];
}

export default function Card() {
  const [ref1, isVisible1] = useInView();
  const [ref2, isVisible2] = useInView();
  const [ref3, isVisible3] = useInView();

  return (
    <section className="md:flex md:flex-wrap md:justify-between md:mr-44 md:ml-44">
      {/* Card 1 */}
      <div
        ref={ref1}
        className={`transition-all duration-700 ease-out transform ${isVisible1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } flex flex-col justify-center text-center bg-black m-10 rounded-md shadow-md`}
      >
        <div className="mt-5">
          <h2 className="bg-blue-500 font-bold text-4xl md:text-3xl">
            MEET OUR STAFF
          </h2>
        </div>
        <div className="flex justify-center">
          <Image src={Rodo} alt="Profesor Rodo" width={400} />
        </div>
        <div className="bg-blue-500 font-black text-2xl">Rodolfo Pertuz</div>
        <div className="text-white font-bold m-5">
          Owner and Chief Instructor
        </div>
        <div className="bg-white p-4">
          <p>
            I am a paragraph. Click here to add your own text and edit me. I am
            a great place for you to tell a story and let your users know a
            little more about you.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div
        ref={ref2}
        className={`transition-all duration-700 ease-out transform ${isVisible2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } flex flex-col justify-center text-center bg-black m-10 rounded-md shadow-md`}
      >
        <div className="mt-5">
          <h2 className="bg-blue-500 font-bold text-4xl md:text-3xl">
            MEET OUR STAFF
          </h2>
        </div>
        <div className="flex justify-center">
          <Image src={Mateo} alt="Profesor Mateo" width={400} />
        </div>
        <div className="bg-blue-500 font-black text-2xl">Mateo Romero</div>
        <div className="text-white font-bold m-5">Black Belt Instructor</div>
        <div className="bg-white p-4">
          <p>
            I am a paragraph. Click here to add your own text and edit me. I am
            a great place for you to tell a story and let your users know a
            little more about you.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div
        ref={ref3}
        className={`transition-all duration-700 ease-out transform ${isVisible3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } flex flex-col justify-center text-center bg-black m-10 rounded-md shadow-md`}
      >
        <div className="mt-5">
          <h2 className="bg-blue-500 font-bold text-4xl md:text-3xl">
            MEET OUR STAFF
          </h2>
        </div>
        <div className="flex justify-center">
          <Image src={DobleA} alt="Profesor DobleA" width={400} />
        </div>
        <div className="bg-blue-500 font-black text-2xl">Doble A</div>
        <div className="text-white font-bold m-5">Black Belt Instructor</div>
        <div className="bg-white p-4">
          <p>
            I am a paragraph. Click here to add your own text and edit me. I am
            a great place for you to tell a story and let your users know a
            little more about you.
          </p>
        </div>
      </div>
    </section>
  );
}
