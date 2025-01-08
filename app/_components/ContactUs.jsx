
// "use client";
// import React from 'react';

// function ContactUs() {
//   return (
//     <section className="py-24" id='contact'>
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="grid lg:grid-cols-2 grid-cols-1">
//           <div className="lg:mb-0 mb-10">
//             <div className="group w-full h-full">
//               <div className="relative h-full">
//                 <img
//                   src="https://pagedone.io/asset/uploads/1696488602.png"
//                   alt="ContactUs tailwind section"
//                   className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-indigo-700 object-cover"
//                 />
//                 <h1 className="font-manrope text-white text-4xl font-bold leading-10 absolute top-11 left-11">
//                   Contact us
//                 </h1>
//                 <div className="absolute bottom-0 w-full lg:p-11 p-5">
//                   <div className="bg-white rounded-lg p-6 block">
//                     <a href="#" className="flex items-center mb-6">
//                       📞
//                       <h5 className="text-black text-base font-normal leading-6 ml-5">
//                         470-601-1911
//                       </h5>
//                     </a>
//                     <a href="mailto:Pagedone1234@gmail.com" className="flex items-center mb-6">
//                       📧
//                       <h5 className="text-black text-base font-normal leading-6 ml-5">
//                         Pagedone1234@gmail.com
//                       </h5>
//                     </a>
//                     <a href="#" className="flex items-center">
//                       📍
//                       <h5 className="text-black text-base font-normal leading-6 ml-5">
//                         654 Sycamore Avenue, Meadowville, WA 76543
//                       </h5>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Contact Form Section */}
//           <div className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
//             <h2 className="text-indigo-600 font-manrope text-4xl font-semibold leading-10 mb-11">
//               Send Us A Message
//             </h2>

//             <form>
//               <input
//                 type="text"
//                 className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-4"
//                 placeholder="Name"
//               />
//               <input
//                 type="email"
//                 className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-4"
//                 placeholder="Email"
//               />
//               <input
//                 type="tel"
//                 className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-4"
//                 placeholder="Phone"
//               />

//               <div className="mb-4">
//                 <h4 className="text-gray-500 text-lg font-normal leading-7 mb-2">
//                   Preferred method of communication
//                 </h4>
//                 <div className="flex">
//                   <label className="flex items-center mr-6 cursor-pointer">
//                     <input type="radio" name="contactMethod" value="email" className="hidden" />
//                     <span className="w-4 h-4 border border-gray-300 rounded-full flex justify-center items-center mr-2">
//                       <span className="w-2 h-2 bg-indigo-600 rounded-full hidden"></span>
//                     </span>
//                     Email
//                   </label>
//                   <label className="flex items-center cursor-pointer">
//                     <input type="radio" name="contactMethod" value="phone" className="hidden" />
//                     <span className="w-4 h-4 border border-gray-300 rounded-full flex justify-center items-center mr-2">
//                       <span className="w-2 h-2 bg-indigo-600 rounded-full hidden"></span>
//                     </span>
//                     Phone
//                   </label>
//                 </div>
//               </div>

//               <input
//                 type="text"
//                 className="w-full h-12 text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-4"
//                 placeholder="Message"
//               />

//               <button
//                 type="submit"
//                 className="w-full h-12 text-white text-base font-semibold leading-6 rounded-full transition-all duration-700 hover:bg-indigo-800 bg-indigo-600 shadow-sm"
//               >
//                 Send
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ContactUs;

// "use client";
// import React, { useState } from "react";
// import { toast } from "react-hot-toast";

// function ContactUs() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     contactMethod: "email",
//     message: "",
//   });

//   const [status, setStatus] = useState(null);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("sending");
//     toast.loading("Sending your message...", { id: "sending" });

//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const result = await res.json();
//       if (result.success) {
//         setStatus("success");
//         setFormData({ name: "", email: "", phone: "", contactMethod: "email", message: "" });
//         toast.success("Message sent successfully!", { id: "sending" });
//       } else {
//         setStatus("error");
//         toast.error("Failed to send message. Try again!", { id: "sending" });
//       }
//     } catch (error) {
//       setStatus("error");
//       toast.error("An error occurred. Please try again.", { id: "sending" });
//     }
//   };

//   return (
//     <section className="py-24" id="contact">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="grid lg:grid-cols-2 grid-cols-1">
          
//           {/* Left Section - Image & Contact Details */}
//           <div className="lg:mb-0 mb-10">
//             <div className="group w-full h-full">
//               <div className="relative h-full">
//                 <img
//                   src="https://pagedone.io/asset/uploads/1696488602.png"
//                   alt="Contact Us"
//                   className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-indigo-700 object-cover"
//                 />
//                 <h1 className="font-manrope text-white text-4xl font-bold leading-10 absolute top-11 left-11">
//                   Contact us
//                 </h1>
//                 <div className="absolute bottom-0 w-full lg:p-11 p-5">
//                   <div className="bg-white rounded-lg p-6 block">
//                     <a href="#" className="flex items-center mb-6">
//                       📞
//                       <h5 className="text-black text-base font-normal leading-6 ml-5">
//                         470-601-1911
//                       </h5>
//                     </a>
//                     <a href="mailto:Pagedone1234@gmail.com" className="flex items-center mb-6">
//                       📧
//                       <h5 className="text-black text-base font-normal leading-6 ml-5">
//                         Pagedone1234@gmail.com
//                       </h5>
//                     </a>
//                     <a href="#" className="flex items-center">
//                       📍
//                       <h5 className="text-black text-base font-normal leading-6 ml-5">
//                         654 Sycamore Avenue, Meadowville, WA 76543
//                       </h5>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Section - Contact Form */}
//           <div className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
//             <h2 className="text-indigo-600 font-manrope text-4xl font-semibold leading-10 mb-11">
//               Send Us A Message
//             </h2>

//             <form onSubmit={handleSubmit}>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-4"
//                 placeholder="Name"
//                 required
//               />
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-4"
//                 placeholder="Email"
//                 required
//               />
//               <input
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-4"
//                 placeholder="Phone"
//                 required
//               />

//               <div className="mb-4">
//                 <h4 className="text-gray-500 text-lg font-normal leading-7 mb-2">
//                   Preferred method of communication
//                 </h4>
//                 <div className="flex">
//                   <label className="flex items-center mr-6 cursor-pointer">
//                     <input
//                       type="radio"
//                       name="contactMethod"
//                       value="email"
//                       checked={formData.contactMethod === "email"}
//                       onChange={handleChange}
//                       className="hidden"
//                     />
//                     <span className="w-4 h-4 border border-gray-300 rounded-full flex justify-center items-center mr-2">
//                       <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
//                     </span>
//                     Email
//                   </label>
//                   <label className="flex items-center cursor-pointer">
//                     <input
//                       type="radio"
//                       name="contactMethod"
//                       value="phone"
//                       checked={formData.contactMethod === "phone"}
//                       onChange={handleChange}
//                       className="hidden"
//                     />
//                     <span className="w-4 h-4 border border-gray-300 rounded-full flex justify-center items-center mr-2">
//                       <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
//                     </span>
//                     Phone
//                   </label>
//                 </div>
//               </div>

//               <input
//                 type="text"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="w-full h-12 text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-4"
//                 placeholder="Message"
//                 required
//               />

//               <button
//                 type="submit"
//                 className="w-full h-12 text-white text-base font-semibold leading-6 rounded-full transition-all duration-700 hover:bg-indigo-800 bg-indigo-600 shadow-sm"
//               >
//                 {status === "sending" ? "Sending..." : "Send"}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ContactUs;



"use client";
import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    contactMethod: "email",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    toast.loading("Sending your message...", { id: "sending" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", contactMethod: "email", message: "" });
        toast.success("Message sent successfully!", { id: "sending" });
      } else {
        setStatus("error");
        toast.error("Failed to send message. Try again!", { id: "sending" });
      }
    } catch (error) {
      setStatus("error");
      toast.error("An error occurred. Please try again.", { id: "sending" });
    }
  };

  return (
    <section className="py-24" id="contact">
      {/* Toaster for notifications */}
      <Toaster position="top-right" reverseOrder={false} />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 grid-cols-1">
          
          {/* Left Section - Image & Contact Details */}
          <div className="lg:mb-0 mb-10">
            <div className="group w-full h-full">
              <div className="relative h-full">
                <img
                  src="https://pagedone.io/asset/uploads/1696488602.png"
                  alt="Contact Us"
                  className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-indigo-700 object-cover"
                />
                <h1 className="font-manrope text-white text-4xl font-bold leading-10 absolute top-11 left-11">
                  Contact us
                </h1>
                <div className="absolute bottom-0 w-full lg:p-11 p-5">
                  <div className="bg-white rounded-lg p-6 block">
                    <a href="#" className="flex items-center mb-6">
                      📞
                      <h5 className="text-black text-base font-normal leading-6 ml-5">
                        470-601-1911
                      </h5>
                    </a>
                    <a href="mailto:Pagedone1234@gmail.com" className="flex items-center mb-6">
                      📧
                      <h5 className="text-black text-base font-normal leading-6 ml-5">
                        Pagedone1234@gmail.com
                      </h5>
                    </a>
                    <a href="#" className="flex items-center">
                      📍
                      <h5 className="text-black text-base font-normal leading-6 ml-5">
                        654 Sycamore Avenue, Meadowville, WA 76543
                      </h5>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
            <h2 className="text-indigo-600 font-manrope text-4xl font-semibold leading-10 mb-11">
              Send Us A Message
            </h2>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-4"
                placeholder="Name"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-4"
                placeholder="Email"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-4"
                placeholder="Phone"
                required
              />

              <div className="mb-4">
                <h4 className="text-gray-500 text-lg font-normal leading-7 mb-2">
                  Preferred method of communication
                </h4>
                <div className="flex">
                  <label className="flex items-center mr-6 cursor-pointer">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="email"
                      checked={formData.contactMethod === "email"}
                      onChange={handleChange}
                      className="hidden"
                    />
                    <span className="w-4 h-4 border border-gray-300 rounded-full flex justify-center items-center mr-2">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                    </span>
                    Email
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="phone"
                      checked={formData.contactMethod === "phone"}
                      onChange={handleChange}
                      className="hidden"
                    />
                    <span className="w-4 h-4 border border-gray-300 rounded-full flex justify-center items-center mr-2">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                    </span>
                    Phone
                  </label>
                </div>
              </div>

              <input
                type="text"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full h-12 text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-4"
                placeholder="Message"
                required
              />

              <button
                type="submit"
                className="w-full h-12 text-white text-base font-semibold leading-6 rounded-full transition-all duration-700 hover:bg-indigo-800 bg-indigo-600 shadow-sm"
              >
                {status === "sending" ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;

