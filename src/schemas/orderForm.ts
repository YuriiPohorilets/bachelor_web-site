import {
  favoriteDesserts,
  favoriteTypeOfFood,
  healthyMenuFocus,
  level,
  preferredDinnerTime,
  toggle,
} from '@/constants/order';
import * as yup from 'yup';

export const orderFormSchema = yup.object({
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
  birthday: yup.date().nullable().notRequired(),
  favoriteFood: yup.string().nullable().notRequired(),
  leastFavoriteFood: yup.string().nullable().notRequired(),
  favoriteTypeOfFood: yup
    .array()
    .of(yup.string().oneOf(favoriteTypeOfFood))
    .nullable()
    .notRequired(),
  healthyMenuFocus: yup.string().oneOf(healthyMenuFocus).nullable().notRequired(),
  issuesWithFreshVeggies: yup.string().oneOf(toggle).nullable().notRequired(),
  issuesWithSauces: yup.string().oneOf(toggle).nullable().notRequired(),
  toleranceForSalt: yup.string().oneOf(level).nullable().notRequired(),
  toleranceForSpicy: yup.string().oneOf(level).nullable().notRequired(),
  favoriteDesserts: yup.array().of(yup.string().oneOf(favoriteDesserts)).nullable().notRequired(),
  foodAllergies: yup.string().oneOf(toggle).required('Please fill out this field.'),
  dietaryRestrictions: yup.string().oneOf(toggle).required('Please fill out this field.'),
  issuesWithEggsMilkButter: yup
    .string()
    .oneOf(['yes', 'no', 'other'])
    .required('Please fill out this field.'),
  additionalInfo: yup.string().nullable().notRequired(),
  preferredDinnerTime: yup
    .string()
    .oneOf(preferredDinnerTime)
    .required('Please fill out this field.'),
});
