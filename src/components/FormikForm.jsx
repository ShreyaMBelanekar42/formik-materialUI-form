import React from "react";
import { Formik, Form } from "formik";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormControlLabel,
  RadioGroup,
  FormLabel,
  Radio,
} from "@mui/material";
import * as Yup from "yup";

const initialValues = {
  name: "",
  address: "",
  country: "",
  gender: "",
  hobbies: [],
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  address: Yup.string().required("Address is required"),
  country: Yup.string().required("Country is required"),
  gender: Yup.string().required("Gender is required"),
  hobbies: Yup.array()
    .min(1, "Select at least one hobby")
    .required("Hobbies are required"),
});

const FormikForm = () => {
  return (
    <div className="material-form">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, formikHelpers) => {
          console.log(values);
          formikHelpers.resetForm();
        }}
      >
        {({ values, handleChange, errors, touched }) => (
          <Form>
            <FormControl error={errors.name && touched.name}>
              <TextField
                label="Name"
                name="name"
                variant="outlined"
                color="primary"
                type="text"
                value={values.name}
                onChange={handleChange}
                fullWidth
              />
              {errors.name && touched.name && (
                <div className="error-message">{errors.name}</div>
              )}
            </FormControl>
            <br />
            <FormControl error={errors.address && touched.address}>
              <TextField
                label="Address"
                name="address"
                variant="outlined"
                color="primary"
                type="text"
                value={values.address}
                onChange={handleChange}
                fullWidth
                multiline
              />
              {errors.address && touched.address && (
                <div className="error-message">{errors.address}</div>
              )}
            </FormControl>
            <br />
            <FormControl error={errors.country && touched.country}>
              <InputLabel id="country-label">Country</InputLabel>
              <Select
                labelId="country-label"
                id="country-select"
                label="Country"
                name="country"
                value={values.country}
                onChange={handleChange}
              >
                <MenuItem value={"country"} disabled>
                  Country
                </MenuItem>
                <MenuItem value={"India"}>India</MenuItem>
                <MenuItem value={"USA"}>USA</MenuItem>
                <MenuItem value={"Japan"}>Japan</MenuItem>
                <MenuItem value={"China"}>China</MenuItem>
              </Select>
              {errors.country && touched.country && (
                <div className="error-message">{errors.country}</div>
              )}
            </FormControl>
            <br />
            <FormControl error={errors.gender && touched.gender}>
              <FormLabel id="gender-label">Gender</FormLabel>
              <RadioGroup
                row
                aria-labelledby="gender-label"
                defaultValue="female"
                name="gender"
                value={values.gender}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
              {errors.gender && touched.gender && (
                <div className="error-message">{errors.gender}</div>
              )}
            </FormControl>
            <br />
            <FormControl error={errors.hobbies && touched.hobbies}>
              <InputLabel id="hobbies-label">Hobbies/Interests</InputLabel>
              <Select
                labelId="hobbies-label"
                id="hobbies-select"
                label="Hobbies/Interests"
                multiple
                name="hobbies"
                value={values.hobbies}
                onChange={handleChange}
              >
                <MenuItem value={"drawing"}>Drawing</MenuItem>
                <MenuItem value={"singing"}>Singing</MenuItem>
                <MenuItem value={"playing football"}>Playing football</MenuItem>
                <MenuItem value={"writing"}>Writing</MenuItem>
                <MenuItem value={"reading"}>Reading</MenuItem>
                <MenuItem value={"listening to music"}>
                  Listening to music
                </MenuItem>
              </Select>
              {errors.hobbies && touched.hobbies && (
                <div className="error-message">{errors.hobbies}</div>
              )}
            </FormControl>
            <br />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
