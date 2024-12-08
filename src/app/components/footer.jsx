import { FacebookIcon,Instagram, InstagramIcon } from "lucide-react"

export default function Footer() {
  return (
    <footer className="pt-20 pb-20 bg-black text-white md:mt-44 ">     
        <div className="border-4 border-blue-500 m-2 md:m-44 md:p-4 text-center">
          <div>
            <h1 className="text-blue-500 m-5 text-4xl font-black md:text-7xl">STAY UPDATE</h1>
          </div>
          <div>
            <form action="">
            <div className="flex flex-col justify-center">
              <label htmlFor="email" >Enter your email here*</label>
              <input type="text" id="Email" className=" md:w-80 ml-auto mr-auto" />              
            </div>
          </form>
          </div>
          
          
            <div>
              <div className="flex justify-center gap-3">
            <input type="checkbox" name="" id="" />
            <p>yes, subcribe me to your newsletter.</p>
            </div>
            <div className="mt-5 mb-5">
              <button className="bg-blue-500 text-black font-extrabold pl-10 pr-10 pt-5 pb-5">Subcribe Now</button>
          </div>
          <div className="flex flex-col-reverse justify-center gap-2">
            <div>
            <div>tel:234435344</div>
              <div>email:tehuthuthe@thethet.com</div>
            </div>
            <div className="flex justify-center">
            <div className=" cursor-pointer"><FacebookIcon /></div>
            <div className=" cursor-pointer"><InstagramIcon /></div>
            </div>
          </div>
          <div>
            <div className="text-blue-500">© 2025 by Satoribjj</div>

          </div>
            </div>
          
        </div>
        
    
    </footer>
  )
}
