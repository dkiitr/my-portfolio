import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className="bg-gradient-to-b from-black to-gray-800 w-full h-screen text-white ">
       
            <div className="flex flex-col mx-auto p-4 justify-center w-full h-full max-w-screen-lg "> 
            <div className="p-8">
                <p className="text-4xl font-bold border-gray-800 inline border-b-4">&lt; Contact /&gt;</p>
                <p className="py-6">Submit the form below to get in touch with me::</p>
            </div>
            <div className="flex justify-center items-center">
                <form action="https://getform.io/f/fc50a4b3-39cb-4bed-ae24-06c70a4f8f3b" method="POST" className="flex flex-col w-full md:w-1/2">
                    <input type="text" name="name" id="name" className="p-2 bg-transparent border-2 rounded-md focus:outline-none text-white" placeholder="Enter your name"/>
                    <input type="email" name="email" id="email" className="p-2 bg-transparent border-2 rounded-md focus:outline-none my-4 text-white" placeholder="Enter your email" />
                    <textarea type="text" name="message" rows="10" placeholder="Write your message" className="border-2 text-white bg-transparent focus:outline-none p-2" >
                    </textarea>
                    <button type="submit" className="text-white font-bold bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                        Let's Connect
                    </button>
                </form>
            </div>

 
        </div>
        <div className=" flex justify-center w-full bottom-10 mx-auto relative" >
      <div>
       © 2022 
    <a className="text-white font-bold" href="https://github.com/dkiitr/"> Deepak Kumar</a> 
      </div>
   
  </div>
    </div>
  )
}

export default Contact;