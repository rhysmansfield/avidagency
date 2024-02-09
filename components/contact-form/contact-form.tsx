"use client";

import React from "react";

import { useForm, SubmitHandler } from "react-hook-form";

import styles from "./contact-form.module.scss";
import { classList } from "@/utils/class-list";
import { Animation } from "../animation/animation";

type Inputs = {
  name: string;
  emailAddress: string;
  phoneNumber: string;
  message: string;
};

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <section className={styles.root}>
      <div className={classList(styles.wrapper, "wrapper")}>
        <div className={styles["text-wrapper"]}>
          <Animation
            element="h2"
            animation="fade-in"
            animateOnScroll
            amount="all"
            className={styles.title}
          >
            <div>Lets chat.</div>
            Tell us about your project.
          </Animation>

          <Animation
            element="p"
            animation="fade-in"
            animateOnScroll
            amount="all"
            className={styles.text}
          >
            Let&apos;s create something together 👋
          </Animation>
        </div>

        <div className={styles["form-wrapper"]}>
          <h3 className={styles["form-title"]}>Send us a message 🚀</h3>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <label>
              <div>Name</div>
              <input {...register("name", { required: true })} />
              {errors.name && (
                <div className={styles.error}>Please enter your name</div>
              )}
            </label>

            <label>
              <div>Email Address</div>
              <input {...register("emailAddress", { required: true })} />
              {errors.emailAddress && (
                <div className={styles.error}>
                  Please enter your email address
                </div>
              )}
            </label>

            <label>
              <div>Phone Number</div>
              <input {...register("phoneNumber", { required: true })} />
              {errors.phoneNumber && (
                <div className={styles.error}>
                  Please enter your phone number
                </div>
              )}
            </label>

            <label>
              <div>Message</div>
              <textarea {...register("message", { required: true })} />
              {errors.message && (
                <div className={styles.error}>Please enter a message</div>
              )}
            </label>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};
