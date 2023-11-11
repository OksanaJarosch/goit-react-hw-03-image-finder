import css from "./Searchbar.module.css";
import { Formik, Form, Field } from 'formik';


export const Searchbar = ({onSubmit}) => {
    return (
      <Formik
      initialValues={{
          query: '',
      }}
      onSubmit={(values, actions) => {
        onSubmit(values);
          actions.resetForm();
      }}>
  <Form className={css.searchForm} >
    <Field
      className={css.searchFormInput}
      type="text"
      autoComplete="off"
      name="query"
      placeholder="Search images and photos"
    />       
      <button className={css.searchFormButton}>
      <span className={css.searchFormButtonLabel}>Search</span>
    </button>
  </Form>
  </Formik>
    )
};