import axios from "axios";
import { Formik } from "formik";
import { Form, Button, Stack } from "react-bootstrap";
import * as Yup from "yup";

const Login = () => {
  const InitialValues = { email: "", password: "" };
  const Schema = {
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("This field is required"),
  };

  const onSubmit = ({ email, password }) => {
    axios
      .post("http://challenge-react.alkemy.org/", {
        email,
        password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <Formik
        initialValues={InitialValues}
        validationSchema={Yup.object(Schema)}
        onSubmit={onSubmit}
      >
        {({ values, errors, handleSubmit, handleChange, handleBlur }) => {
          return (
            <Stack className="col-md-4 mx-auto">
              <h1 className="m-auto py-5">Welcome!</h1>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                  />
                  <Form.Text className="text-muted">{errors.email}</Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.password}
                  />
                  <Form.Text className="text-muted">
                    {errors.password}
                  </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Log in
                </Button>
              </Form>
            </Stack>
          );
        }}
      </Formik>
    </>
  );
};

export default Login;