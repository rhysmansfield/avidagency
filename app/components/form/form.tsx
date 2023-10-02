import { classList } from "@app/utils/class-list";
import styles from "./form.module.scss";

import { FormProps } from "./form.type";

export const Form = ({ form, className }: FormProps) => {
  const { heading, fields } = form;
  const containerClassList = classList(styles["container"], className || "");

  return (
    <form className={containerClassList}>
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
                className={classList(styles["input"], styles["inputMessage"])}
              />
            ) : (
              <input
                id={field.name}
                type={field.type}
                className={styles["input"]}
              />
            )}
          </label>
        ))}
      </div>

      <button type="submit" className={styles["button"]}>
        Send message
      </button>
    </form>
  );
};
