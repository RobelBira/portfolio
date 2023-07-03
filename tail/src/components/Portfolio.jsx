import PortImage1 from "../assets/githubfinder.png"
import PortImage2 from "../assets/feedback.png"
import PortImage3 from "../assets/workout.png"
import PortImage4 from "../assets/shop.png"
import PortImage5 from "../assets/housemarket.png"
import PortImage6 from "../assets/portfolio.png"
const Portfolio = () => {

 return (
    <div name="portfolio"
    className=" bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full" >
      <div className=" pt-12">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">Portfolio</p>

        <p className="py-6">check out some of my works right here</p>
        </div>
        


  <div 
  className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
<div
className="shadow-md shadow-gray-600 rounded-lg">
<img 
src={PortImage5} alt=""
className="rounded-md duration-200 hover:scale-105 w-full"
/> 
<div className="flex items-center justify-center">
  <a href="https://robelhousemarketplace.vercel.app" >
 <button className="w-1/2  px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
 </a>
 <a href="https://github.com/RobelBira">
 <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
 </a>
</div>
</div>

<div
className="shadow-md shadow-gray-600 rounded-lg">
<img 
src={PortImage1} alt=""
className="rounded-md duration-200 hover:scale-105 w-full "
/> 
<div className="flex items-center justify-center">
   <a href="https://robelgithubfinder.vercel.app" >
 <button className="w-1/2  px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
 </a>
 <a href="https://github.com/RobelBira">
 <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
 </a>
</div>
</div>
<div
className="shadow-md shadow-gray-600 rounded-lg">
<img 
src={PortImage2} alt=""
className="rounded-md duration-200 hover:scale-105 "
/> 
<div className="flex items-center justify-center">
   <a href="https://robelfeedbackapp.netlify.app" >

 <button className="w-1/2  px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
   </a>
    <a href="https://github.com/RobelBira">

 <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
    </a>
</div>
</div>

<div
className="shadow-md shadow-gray-600 rounded-lg">
<img 
src={PortImage6} alt=""
className="rounded-md duration-200 hover:scale-105 w-full"
/> 
<div className="flex items-center justify-center">
   <a href="https://robelportfolio.netlify.app" >
 <button className="w-1/2  px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
 </a>
  <a href="https://github.com/RobelBira">
 <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
  </a>
    
</div>
</div>

<div
className="shadow-md shadow-gray-600 rounded-lg">
<img 
src={PortImage4} alt=""
className="rounded-md duration-200 hover:scale-105 w-full"
/> 
<div className="flex items-center justify-center">
   <a href="https://robelelectronicsshop.netlify.app" >
 <button className="w-1/2  px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
 </a>
  <a href="https://github.com/RobelBira">

 <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
  </a>
</div>
</div>
<div
className="shadow-md shadow-gray-600 rounded-lg">
<img 
src={PortImage3} alt=""
className="rounded-md duration-200 hover:scale-105 w-full"
/> 
<div className="flex items-center justify-center">
 <button className="w-1/2  px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
  <a href="https://github.com/RobelBira">

 <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
  </a>
</div>
</div>


 

</div>




     </div>  
     
    </div>
  )
}
export default Portfolio