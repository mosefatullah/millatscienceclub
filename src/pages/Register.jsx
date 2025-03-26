import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import Button from "../components/Button";
import Input from "../components/Input";
import { api } from "../utils/data";

function Register() {
 const loading = useRef(null);
 const info = useRef(null);
 const register = useRef(null);
 const confirm = useRef(null);
 const [active, setActive] = useState(null);
 const [formData, setFormData] = useState({
  email: "",
  first_name: "",
  last_name: "",
  phone: "",
  gender: "",
  education_institution: "",
  major: "",
  payment_reference_code: "",
 });
 const [isSubmitting, setIsSubmitting] = useState(false);

 useEffect(() => {
  const _ = () => {
   loading.current.classList.add("hidden");
   info.current.classList.add("hidden");
   register.current.classList.add("hidden");
   confirm.current.classList.add("hidden");
  };
  if (active == null) {
   _();
   loading.current.classList.remove("hidden");
  } else if (active == "_info") {
   _();
   info.current.classList.remove("hidden");
  } else if (active == "_register") {
   _();
   register.current.classList.remove("hidden");
  } else if (active == "_confirm") {
   _();
   confirm.current.classList.remove("hidden");
  }
  window.scrollTo(0, 0);
 }, [active]);

 useEffect(() => {
  setTimeout(() => {
   setActive("_info");
  }, 1000);
 }, []);

 const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
   ...prevData,
   [name]: value,
  }));
 };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
   const response = await fetch(api + "/member/register", {
    method: "POST",
    headers: {
     "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
   });

   if (response.status === 201) {
    setActive("_confirm");
   } else {
    console.error("Error: ", response.statusText);
    alert("An error occurred. Please try again later.");
   }
  } catch (error) {
   alert(error.message);
  } finally {
   setIsSubmitting(false);
  }
 };

 return (
  <>
   <Helmet>
    <title>Member Registration</title>
    <meta
     name="description"
     content="Register as a member of Millat Science Club."
    />
   </Helmet>
   <div className="w-full max-w-6xl mx-auto my-[5rem] p-8 lg:p-12 rounded-3xl bg-gray-100/80 dark:bg-white/5">
    <div className="_steps mb-12">
     <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base overflow-x-auto">
      <li
       className={`flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700 ${
        active === "_register" || active === "_confirm"
         ? "after:bg-blue-600 dark:after:bg-blue-500"
         : ""
       }`}
      >
       <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
        <span className="me-2">1.</span>
        Information
       </span>
      </li>
      <li
       className={`flex md:w-full items-center ${
        active === "_register" || active === "_confirm"
         ? "text-blue-600 dark:text-blue-500"
         : ""
       } after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700 ${
        active === "_confirm"
         ? "after:border-bg-600 dark:after:bg-blue-500"
         : ""
       }`}
      >
       <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
        <span className="me-2">2.</span>
        Registration <span className="hidden sm:inline-flex sm:ms-1">Form</span>
       </span>
      </li>
      <li
       className={`flex items-center ${
        active === "_confirm" ? "text-blue-600 dark:text-blue-500" : ""
       } ${
        active === "_confirm" ? "after:bg-blue-600 dark:after:bg-blue-500" : ""
       }`}
      >
       <span className="me-2">3.</span>
       Confirmation
      </li>
     </ol>
    </div>

    <div
     className="_loading min-h-[60vh] flex items-center justify-center"
     ref={loading}
    >
     <div role="status">
      <svg
       aria-hidden="true"
       className="inline w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
       viewBox="0 0 100 101"
       fill="none"
       xmlns="http://www.w3.org/2000/svg"
      >
       <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor"
       />
       <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentFill"
       />
      </svg>
      <span className="sr-only">Loading...</span>
     </div>
    </div>
    <div className="_info hidden mb-8" ref={info}>
     <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
      <li className="flex items-center space-x-3 rtl:space-x-reverse">
       <svg
        className="shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 16 12"
       >
        <path
         stroke="currentColor"
         stroke-linecap="round"
         stroke-linejoin="round"
         stroke-width="2"
         d="M1 5.917 5.724 10.5 15 1.5"
        />
       </svg>
       <span>A Unique ID Card & Number!</span>
      </li>
      <li className="flex items-center space-x-3 rtl:space-x-reverse">
       <svg
        className="shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 16 12"
       >
        <path
         stroke="currentColor"
         stroke-linecap="round"
         stroke-linejoin="round"
         stroke-width="2"
         d="M1 5.917 5.724 10.5 15 1.5"
        />
       </svg>
       <span>Chance to participate in Science Fests & Events</span>
      </li>
      <li className="flex items-center space-x-3 rtl:space-x-reverse">
       <svg
        className="shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 16 12"
       >
        <path
         stroke="currentColor"
         stroke-linecap="round"
         stroke-linejoin="round"
         stroke-width="2"
         d="M1 5.917 5.724 10.5 15 1.5"
        />
       </svg>
       <span>
        Membership fee:{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
         200 taka
        </span>
       </span>
      </li>
     </ul>

     <div className="mt-5 pt-3 flex justify-end">
      <Button onClick={() => setActive("_register")}>Agree & Continue</Button>
     </div>
    </div>
    <div className="_register hidden" ref={register}>
     <form className="max-w-3xl mx-auto" onSubmit={handleSubmit}>
      <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold mb-12">
       Member Registration
      </h2>

      {/* User Details */}
      <Input
       type="email"
       name="email"
       id="r_email"
       label="Email Address"
       required
       value={formData.email}
       onChange={handleInputChange}
      />
      <p className="text-[0.8rem] text-gray-600 dark:text-gray-400 my-4">
       A confirmation message will be sent to this email, so please provide a
       valid email.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-16">
       <Input
        type="text"
        name="first_name"
        id="r_first_name"
        label="First Name"
        required
        value={formData.first_name}
        onChange={handleInputChange}
       />
       <Input
        type="text"
        name="last_name"
        id="r_last_name"
        label="Last Name"
        required
        value={formData.last_name}
        onChange={handleInputChange}
       />
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-8 mb-16">
       <Input
        type="tel"
        name="phone"
        id="r_phone"
        label="Phone Number"
        required
        value={formData.phone}
        onChange={handleInputChange}
       />
       <div className="relative z-0 w-full group">
        <select
         name="gender"
         id="gender"
         className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
         value={formData.gender}
         onChange={handleInputChange}
        >
         <option value="" disabled selected>
          Select Gender
         </option>
         <option value="male" className="dark:text-gray-900">
          Male
         </option>
         <option value="female" className="dark:text-gray-900">
          Female
         </option>
        </select>
        <label
         htmlFor="gender"
         className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
         Gender
        </label>
       </div>
      </div>

      {/* Education Information */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
       <div className="relative z-0 w-full group">
        <Input
         type="text"
         name="education_institution"
         id="education_institution"
         label="Educational Institution"
         required
         value={formData.education_institution}
         onChange={handleInputChange}
        />
       </div>

       <div className="relative z-0 w-full group">
        <Input
         type="text"
         name="major"
         id="major"
         label="Class/Subject"
         required
         value={formData.major}
         onChange={handleInputChange}
        />
       </div>
      </div>

      {/* Payment Information */}
      <div className="relative z-0 w-full mb-3 group">
       <Input
        type="text"
        name="payment_reference_code"
        id="payment_reference_code"
        label="Payment Reference Code"
        required
        value={formData.payment_reference_code}
        onChange={handleInputChange}
       />
      </div>

      {/* Payment Instructions */}
      <p className="text-[0.8rem] text-gray-600 dark:text-gray-400 my-4">
       Please pay 50 TK to one of the following options and provide the payment
       reference code:
      </p>
      <ul className="list-disc pl-5 text-[0.9rem] text-gray-600 dark:text-gray-400 mb-5">
       <li>বিকাশ (Bkash): 01318349028</li>
      </ul>

      <div className="mt-5 pt-3 gap-3 flex justify-end">
       <Button dark onClick={() => setActive("_info")}>
        Previous
       </Button>
       <Button type="submit" disabled={isSubmitting}>
        Submit
       </Button>
      </div>
     </form>
    </div>
    <div
     ref={confirm}
     className="hidden max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-2xl text-center dark:bg-gray-800"
    >
     <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
      Welcome to Millat Science Club! 🎉
     </h2>

     <p className="text-gray-700 dark:text-gray-300 mb-4">
      Thank you for registering as a member of MSC! A confirmation email has
      been sent to your provided email address. Please check your inbox (and
      spam folder if needed) to verify your membership.
     </p>

     <div className="px-4 py-3 rounded-xl bg-primary text-white my-4">
      <p>
       Your email address: <b>{formData.email}</b>
      </p>
     </div>

     <p className="text-gray-700 dark:text-gray-300 mb-4">
      We are excited to have you on board and look forward to your participation
      in our science programs and events! 🚀
     </p>

     <p className="text-gray-700 dark:text-gray-300 mb-4">
      If you have any questions, feel free to contact us.
     </p>

     <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
      Happy Exploring! 🔬✨
     </p>
    </div>
   </div>
  </>
 );
}

export default Register;
