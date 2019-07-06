import css from "./HomeForm.scss";
import * as Yup from "yup";
import { Formik } from "formik";

const HomeForm = props => (
  <div className={css.HomeForm}>
    <Formik
      initialValues={{ email: "" }}
      onSubmit={(values, { setSubmitting }) => {
        props.submitCallback(values.email);
        setSubmitting(false);
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Invalid email")
          .required("Sorry, but you need to fill this out")
      })}
    >
      {formikProps => {
        const {
          values,
          touched,
          errors,
          handleChange,
          handleBlur,
          handleSubmit
        } = formikProps;
        return (
          <form onSubmit={handleSubmit}>
            <input
              id="email"
              type="text"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="your email"
              autoFocus={true}
              className={
                errors.email && touched.email && css.HomeFormInputError
              }
            />
            <div className={css.inputFeedback}>{errors.email}</div>
          </form>
        );
      }}
    </Formik>
  </div>
);

export default HomeForm;
