import React from 'react';
import { ErrorMessage, Field } from 'formik';
import TextField from '@material-ui/core/TextField';

import { FormikFieldLayout } from './styled';

const FormikField = (props) => {
  return (
    <FormikFieldLayout>
      <Field
        {...props}
        as={TextField}
        helperText={<ErrorMessage name={props.name} />}
      />
    </FormikFieldLayout>
  );
};

export default FormikField;
