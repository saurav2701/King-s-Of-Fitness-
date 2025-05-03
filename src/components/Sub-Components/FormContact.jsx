import React from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import formclasses from "./FormContact.module.css";

const Input = (props) => {
  return (
    <div className={formclasses.controls}>
      <input
        {...props.register(props.name, props.validation)}
        autoComplete="off"
        spellCheck="false"
        className={formclasses.control}
        type={props.type}
        placeholder={props.placeholder}
      />
      <div id="spinner" className={formclasses.spinner}></div>
      {props.errors[props.name] && (
        <p className={formclasses.error}>{props.errors[props.name].message}</p>
      )}
    </div>
  );
};

const FormContact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

 const onSubmit = (data) => {
   try {
     console.log("Form Data Submitted:", data); // Log form data in a structured way
     window.alert("Form submitted successfully!"); // Show alert on successful submission
     toast.success("🎉 Form submitted successfully!", {
       position: toast.POSITION.TOP_CENTER,
       autoClose: 3000, // Close after 3 seconds
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
       theme: "colored", // Use a colored theme
     });
     reset(); // Reset the form after submission
   } catch (error) {
     console.error("Form submission error:", error);
     toast.error("❌ An error occurred during form submission.", {
       position: toast.POSITION.TOP_CENTER,
       autoClose: 5000, // Close after 5 seconds
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
       theme: "dark", // Use a dark theme
     });
   }
 };
  return (
    <>
      <form
        className={formclasses["login-form"]}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={formclasses.inputdiv}>
          <Input
            placeholder="Name"
            type="text"
            name="name"
            register={register}
            validation={{ required: "Name is required" }}
            errors={errors}
          />
          <Input
            placeholder="Email"
            type="email"
            name="email"
            register={register}
            validation={{
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            }}
            errors={errors}
          />
          <textarea
            {...register("message", { required: "Message is required" })}
            className={`${formclasses.control} ${formclasses["login-form__textarea"]}`}
            placeholder="Type your message here."
          />
          {errors.message && (
            <p className={formclasses.error}>{errors.message.message}</p>
          )}
        </div>
        <button className={formclasses.control} type="submit">
          JOIN NOW
        </button>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" // Default theme for the container
      />
    </>
  );
};

export default FormContact;
