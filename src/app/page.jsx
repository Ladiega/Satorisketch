import Image from "next/image";
import SatoriMat from "../../public/images/satorimat.jpg"

import Card from "./ui/Card"

export default function Home() {
  return (
    <div>      
      <main>
        <section className="">
        <div className=" bg-crew-img w-full h-[45rem] bg-cover bg-center">
            <div className="">  
              <div className=" absolute top-[25rem] md:top-[20rem] z-10 text-white ">
                <div className=" absolute m-2 ">
              <h1 className=" text-3xl md:text-6xl font-extrabold mb-10">
                ROUNDHOUSE <br />
                Brazilian Jiujitsu
              </h1>
                
                <div className="">
                  <button className="top-[30rem] text-2xl font-bold  bg-blue-500 opacity-75 hover:opacity-100  text-black p-2 md:pt-4 md:pb-4 md:pl-4 md:pr-4 border-4 border-black cursor-pointer">Try a Free Class Today </button>
                  </div>
                </div>
              </div>
             
              
            </div>  

        </div>
        </section>
        {/* <section className="border-yellow-500 mt-20 mb-20 mr-44 ml-44"> */}
        <section className=" m-2 md:mr-44 md:ml-44 mt-20 mb-20">
        <div className="flex flex-col">
          <div className="">
            <Image
              src={SatoriMat}
              alt="Rodo"
              

            />            
          </div>
          <div>
            <div className="bg-blue-500 h-full">
              <h2 className="text-white font-bold text-center pt-4 lg:text">ABOUT OUR SATORI BJJ</h2>
              <p className="text-black font-medium mt-4 ">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you. <br />
              This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. </p>
            </div>
            </div>
          </div>
        </section>
        <section className=" m-9">
          
          <div className="  flex flex-col md:mr-44 md:ml-44">
            
            <div className=" flex  p-4 md:text-5xl text-2xl font-bold  text-center border-4 border-black "><p className="mr-6 text-blue-500 text-8xl">6</p><p className="ml-auto mr-auto mt-auto mb-auto">PRINCIPLES OF SATORI BJJ</p></div>
            <div className="flex flex-col justify-between font-extrabold md:flex-row">
            <div className="border-l-4 border-b-4 border-r-4 border-black">Respect <br />Self-Disciplin</div>
              <div className="border-l-4 border-b-4 border-r-4 border-black">Focus <br />Confidence</div>
              <div className="border-l-4 border-b-4 border-r-4 border-black">Safety <br />Leadership</div>
          </div>
          </div>
         
        </section>
        <section>
          <Card/>
        </section>
      </main>
      

    
    </div>

    
  );
}
