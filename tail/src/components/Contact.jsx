const Contact = () => {
  return (
    <div name='contact'
    className=" w-full h-fit bg-gradient-to-b from-black to-gray-600  p-4 text-white" >
         <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center  h-full">
            <div className="pb-8 pt-12 md:pt-40 lg:pt-56 ">
                <p className= "text-4xl font-bold inline border-b-4 border-gray-500 ">Contact</p>
                <p className="p-6">Submit the form below to get in touch with me</p>
            </div>
            <div className="flex justify-center items-center">
                <form action="https://getform.io/f/1eb3cc9f-e754-4f40-a8c7-d09d6e6232df" method="POST" className="flex flex-col w-full md:w-1/2">
                    <input type="text" name="name" placeholder="enter your name" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                    />
                    <input type="text" name="email" placeholder="enter your email" className=" my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                    />
                    <textarea name="message"
                    placeholder="enter your message"   rows="10" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
                    <button className= "  text-white w-fit px-6 py-3 my-8 mx-auto flex items-center rounded-md bg-gradient-to-b from-cyan-500 to-blue-500 cursor-pointer hover:scale-110 duration-300">Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}
export default Contact