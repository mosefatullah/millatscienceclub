import { Mail, MapPin, Phone } from "lucide-react";

function Contact() {
 return (
  <div>
   <div className="__topToBottom w-full max-w-6xl mx-auto py-20 mb-12 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg">
    <div className="px-8 lg:px-16">
     <h2 className="text-2xl xl:text-3xl font-bold mb-8">Get in Touch</h2>

     <div className="grid gap-12 lg:grid-cols-2">
      <div className="space-y-6">
       <div className="flex items-start">
        <div className="bg-blue-700/10 rounded-full p-3 mr-4">
         <MapPin className="h-6 w-6 text-blue-700" />
        </div>
        <div>
         <h3 className="font-semibold text-lg">Our Location</h3>
         <p className="text-gray-600 dark:text-gray-400">
          315, Mirhajirbag, Kazibari, Jatrabari, Dhaka-1204
         </p>
        </div>
       </div>

       <div className="flex items-start">
        <div className="bg-blue-700/10 rounded-full p-3 mr-4">
         <Phone className="h-6 w-6 text-blue-700" />
        </div>
        <div>
         <h3 className="font-semibold text-lg">Phone Number</h3>
         <p className="text-gray-600 dark:text-gray-400">
          <a href="tel:+8801946009864">+880-1946009864 (General Secretary)</a>{" "}
          <br />
          <a href="tel:+8801318349028">+880-1318349028 (Chief Administrator)</a>
         </p>
        </div>
       </div>

       <div className="flex items-start">
        <div className="bg-blue-700/10 rounded-full p-3 mr-4">
         <Mail className="h-6 w-6 text-blue-700" />
        </div>
        <div>
         <h3 className="font-semibold text-lg">Email Address</h3>
         <p className="text-gray-600 dark:text-gray-400">contact@mscbd.org</p>
        </div>
       </div>
      </div>

      <div>
       <iframe
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Tamirul+Millat+Kamil+Madrasah,+Dhaka"
        width="600"
        height="278"
        style={{ width: "100%" }}
        allowFullScreen=""
       ></iframe>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
}

export default Contact;
