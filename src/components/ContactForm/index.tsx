'use client';

import { useState, ChangeEvent } from "react";
import styles from "./styles.module.scss";
import InputField from "@/components/Input";
import Button from "@/components/Button";

const ContactForm: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [modalOpen, setModalOpen] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setModalOpen(true); // open modal
    setForm({ name: "", email: "", message: "" });
  };

  const handleCloseModal = () => setModalOpen(false);

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <InputField
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholderText="Name"
          required
        />
        <InputField
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholderText="Email"
          required
        />
        <InputField
          type="textarea"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholderText="Message"
          required
        />
        <Button type="submit">
          Send Message
        </Button>
      </form>

      {modalOpen && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modal__body}>
              <p>
                Thank you for contacting Black Mesa Research Facility. <br/>A staff member will get back to you as soon as possible.
              </p>
              <Button 
                type="button"
                onClick={handleCloseModal}
              >
                Close 
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactForm;
