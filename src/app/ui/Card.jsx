import Image from "next/image"
import Rodo from "../../../public/images/rodo.jpeg"
import Mateo from "../../../public/images/mat.jpg"
import DobleA from "../../../public/images/dobleA.jpeg"

export default function Card() {

  return (
    <section className="md:flex md:justify-between md:mr-44 md:ml-44">
    <div className="flex flex-col justify-center text-center bg-black m-2  ">
        <div className="mt-5 ">
        <h2 className="bg-blue-500 font-bold text-4xl  md:text-3xl">
          MEET OUR STAFF
        </h2>
      </div>
      <div className="flex justify-center">
        <Image
          src={Rodo}
          alt="Profesor Rodo"
          width={400}
        />
      </div>
      <div>
        <div className="bg-blue-500 font-black text-2xl">Rodolfo Pertuz</div>
        <div className="text-white font-bold m-5">Owner and Chiefh Insturctor</div>        
      </div>
      <div className="bg-white border-4 border-black">
        <p>
I am a paragraph. Click here to add your own text and edit me. I am a great place for you to tell a story and let your users know a little more about you. </p>
      </div>
      </div>
      
      <div className="flex flex-col justify-center text-center bg-black m-2  ">
        <div className="mt-5 ">
          <h2 className="bg-blue-500 font-bold text-4xl  md:text-3xl">
            MEET OUR STAFF
          </h2>
        </div>
        <div className="flex justify-center">
          <Image
            src={Mateo}
            alt="Profesor Rodolfo"
            width={400}
          />
        </div>
        <div>
          <div className="bg-blue-500 font-black text-2xl">Mateo Romero</div>
          <div className="text-white font-bold m-5">Black Belt Insturctor</div>
        </div>
        <div className="bg-white border-4 border-black">
          <p>
            I am a paragraph. Click here to add your own text and edit me. I am a great place for you to tell a story and let your users know a little more about you. </p>
        </div>
      </div>

      <div className="flex flex-col justify-center text-center bg-black m-2 ">
        <div className="mt-5">
          <h2 className="bg-blue-500 font-bold text-4xl  md:text-3xl">
            MEET OUR STAFF
          </h2>
        </div>
        <div className="flex justify-center">
          <Image
            src={DobleA}
            alt="Profesor Mateo"
            width={400}
          />
        </div>
        <div>
          <div className="bg-blue-500 font-black text-2xl">Doble A</div>
          <div className="text-white font-bold m-5">Black Belt Insturctor</div>
        </div>
        <div className="bg-white border-4 border-black">
          <p>
            I am a paragraph. Click here to add your own text and edit me. I am a great place for you to tell a story and let your users know a little more about you. </p>
        </div>
      </div>
    </section>
  )
}