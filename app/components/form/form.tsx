"use client";

import { useEffect, useRef } from "react";
import { useFetch } from "@app/utils/use-fetch";
import { LoadingSpinner } from "@app/svgs/LoadingSpinner";
import { ErrorIcon } from "@app/svgs/ErrorIcon";
import { SuccessIcon } from "@app/svgs/SuccessIcon";
import { classList } from "@app/utils/class-list";
import styles from "./form.module.scss";

import { FormProps } from "./form.type";

export const Form = ({ form, className }: FormProps) => {
  const { heading, fields } = form;
  const containerClassList = classList(styles["container"], className || "");

  const ref = useRef<HTMLFormElement>(null);
  const { loading, error, data: success, perform } = useFetch();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const formData = Object.fromEntries(form.entries());

    await perform({
      method: "POST",
      url: "/api/contact",
      body: formData,
    });
  };

  useEffect(() => {
    if (success) {
      ref.current?.reset();
    }
  }, [success]);

  return (
    <form ref={ref} onSubmit={handleSubmit} className={containerClassList}>
      <h3 className={styles["heading"]}>{heading}</h3>

      <div className={styles["fields"]}>
        {fields.map((field, index) => (
          <label
            key={index}
            htmlFor={field.name}
            className={styles["inputWrapper"]}
          >
            <p
              className={
                field.type === "textarea"
                  ? classList(styles["label"], styles["labelMessage"])
                  : styles["label"]
              }
            >
              {field.label}
              {field.required && <span className={styles["required"]}>*</span>}
            </p>
            {field.type === "textarea" ? (
              <textarea
                id={field.name}
                name={field.name}
                className={classList(styles["input"], styles["inputMessage"])}
              />
            ) : (
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                className={styles["input"]}
              />
            )}
          </label>
        ))}

        {error && (
          <p
            className={classList(styles["formState"], styles["formStateError"])}
          >
            <ErrorIcon color="var(--color-white)" />
            {error}
          </p>
        )}
        {success && (
          <p
            className={classList(
              styles["formState"],
              styles["formStateSuccess"]
            )}
          >
            <SuccessIcon color="var(--color-white)" />
            {success?.message}
          </p>
        )}
      </div>

      <button type="submit" className={styles["button"]}>
        Send message
        {loading && (
          <div className={styles["buttonState"]}>
            <LoadingSpinner />
          </div>
        )}
      </button>
    </form>
  );
};
