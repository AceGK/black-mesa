import styles from "./styles.module.scss";
import { ChangeEvent, FC } from "react";

interface InputFieldProps {
  type: "text" | "textarea" | "password" | "email" | "number";
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholderText: string;
  required?: boolean;
  autoComplete?: string;
}

const InputField: FC<InputFieldProps> = ({
  type,
  name,
  value,
  onChange,
  placeholderText,
  required = false,
  autoComplete = "off",
}) => {
  const isNumber = type === "number";

  return (
    <div className={styles.inputContainer}>
      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          aria-labelledby={name}
          required={required}
          autoComplete={autoComplete}
          className={value ? styles.hasValue : ""}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          aria-labelledby={name}
          required={required}
          autoComplete={autoComplete}
          className={value ? styles.hasValue : ""}
          {...(isNumber && {
            inputMode: "decimal",
            pattern: "^\\d+(\\.\\d{0,2})?$",
          })}
        />
      )}

      <label className={styles.placeholderText} htmlFor={name} id={name}>
        <div className={styles.text}>{placeholderText}</div>
      </label>
    </div>
  );
};

export default InputField;
