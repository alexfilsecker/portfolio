import { Mail, Check } from "@mui/icons-material";
import { Alert, Button, CircularProgress, TextField } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const ContactForm = (): JSX.Element => {
  const [formStatus, setFormStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message is required cannot be empty"),
  });

  const formik = useFormik({
    initialValues: { name: "", lastName: "", email: "", message: "" },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setFormStatus("loading");
      try {
        const response = await axios.post("/api/mail", values);
        if (response.status === 200) {
          setFormStatus("success");
        } else {
          console.error("status not 200");
          setFormStatus("error");
        }
      } catch (e) {
        console.error(e);
        setFormStatus("error");
      }
    },
  });

  let bottomComponent: JSX.Element;
  switch (formStatus) {
    case "loading": {
      bottomComponent = <CircularProgress className="self-center" />;
      break;
    }
    case "success": {
      bottomComponent = (
        <Alert
          icon={<Check fontSize="inherit" />}
          severity="success"
          onClose={() => {
            setFormStatus("idle");
          }}
        >
          Your message has been sent successfully. You should have recieved a
          confirmation email
        </Alert>
      );
      break;
    }
    case "error": {
      bottomComponent = (
        <Alert
          severity="error"
          onClose={() => {
            setFormStatus("idle");
          }}
        >
          Ups! something went wrong.
        </Alert>
      );
      break;
    }
    case "idle":
    default: {
      const disabledByValues = Object.values(formik.values).reduce(
        (prev, curr) => {
          if (prev) return prev;
          if (curr.length === 0) return true;
          return false;
        },
        false
      );
      const disabledByErrors = Object.values(formik.errors).reduce(
        (prev, current) => {
          if (prev) return prev;
          return Boolean(current);
        },
        false
      );

      bottomComponent = (
        <Button
          variant="outlined"
          className="w-min self-center"
          endIcon={<Mail />}
          type="submit"
          disabled={disabledByValues || disabledByErrors}
        >
          Send
        </Button>
      );
      break;
    }
  }

  return (
    <form
      className="flex flex-col gap-3 md:w-1/2"
      onSubmit={formik.handleSubmit}
    >
      <div className="flex gap-3 w-full">
        <TextField
          name="name"
          className="flex-grow"
          label="Name"
          variant="outlined"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          name="lastName"
          className="flex-grow"
          label="Last Name"
          variant="outlined"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />
      </div>
      <TextField
        name="email"
        label="Email"
        variant="outlined"
        required
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        name="message"
        label="Message"
        variant="outlined"
        multiline
        rows={4}
        required
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.message}
        error={formik.touched.message && Boolean(formik.errors.message)}
        helperText={formik.touched.message && formik.errors.message}
      />

      {bottomComponent}
    </form>
  );
};

export default ContactForm;
