import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import FormInput from "./FormInput.component";
import "./contact-form.styles.css";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Error from "./Error.component";
import AnimatingBtn from "../animating-btn/AnimatingBtn.component";

export default function ContactForm() {
  // yup schema
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("This Field Is Required")
      .email("Invalid Email"),
    name:yup
    .string()
    .required("This Field Is Required"),
    subject : yup
    .string()
    .required("This Field Is Required"),
    message:yup
    .string()
    .min(5, "That's a very short message"),
  });
  //react form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  //!!sending email using email JS
  const form = useRef();
  // priv keys
  const {
    REACT_APP_EMAIL_JS_SERVICE_ID,
    REACT_APP_EMAIL_JS_TEMPLATE_ID,
    REACT_APP_EMAIL_JS_PUBLIC_KEY,
  } = process.env;
  // the actual send email JS
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        REACT_APP_EMAIL_JS_SERVICE_ID,
        REACT_APP_EMAIL_JS_TEMPLATE_ID,
        form.current,
        REACT_APP_EMAIL_JS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    
  };
  //# a comnination between react form that listens on the data passed, if the data is valid
  // the sendEmail function will be called
  const onSubmit = (data,e)=>{
    sendEmail(e)
  }
  return (
    <div className="section contact">
      <h2 className="section-title">Say Hi</h2>
      <div className="info-container">
        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
          <FormInput label="Name" type="text" name="name" register={register("name")}/>
          {errors?.name && <Error message = {errors.name.message} />}
          <FormInput label="Subject" type="text" name="subject"  register={register("subject")}/>
          {errors?.subject && <Error message = {errors.subject.message} />}
          <FormInput label="Email" type="text" name="email" register={register("email")}/>
          {errors?.email && <Error message = {errors.email.message} />}
          <div className="input-holder">
            <textarea name="message" placeholder=" " {...register("message")}/>
            <label className="label">Message</label>
          </div>
          {errors?.message && <Error message = {errors.message.message} />}
          {/* disable the animation if there are erros */}
          <AnimatingBtn disable={Object.keys(errors).length > 0 ? true : false} type="submit">Send</AnimatingBtn>
        </form>
      </div>
    </div>
  );
}
