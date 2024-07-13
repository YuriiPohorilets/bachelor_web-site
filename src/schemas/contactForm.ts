import * as yup from 'yup';

export const contactFormSchema = yup.object({
  fullName: yup
    .string()
    .min(2, 'Name should be at least 2 characters long.')
    .matches(/^[aA-zZ\s]+$/, 'Only letters and spaces are allowed.')
    .required('Please fill out this field.'),
  email: yup
    .string()
    .email('Please enter a valid email address (e.g., example@mail.com).')
    .required('Please fill out this field.'),
  phoneNumber: yup
    .string()
    .matches(/^\d{10}$/, 'Please enter a valid phone number (e.g., 1234567890).')
    .required('Please fill out this field.'),
  message: yup
    .string()
    // .min(8, 'Message should be at least 8 characters long.')
    .max(3000, 'Message should be no more than 3000 characters long.'),
  // .required('Please fill out this field.'),
});

export const DEFAULT_VALUES = {
  fullName: '',
  email: '',
  phoneNumber: '',
  message: '',
};
