import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { orderFormSchema } from '@/schemas/orderForm';
// import { Button, Textarea, TextInput } from '@/components/ui';

import styles from './ContactForm.module.scss';

type FormData = yup.InferType<typeof orderFormSchema>;

// const formFields = [{ label: 'name', name: 'name', type: 'text' }];

export const OrderForm: React.FC = () => {
  const {
    // register,
    reset,
    handleSubmit,
    // formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(orderFormSchema),
  });

  const onSubmit: SubmitHandler<FormData> = data => {
    console.log('Form data:', data);

    reset();
  };

  return <form onSubmit={handleSubmit(onSubmit)} className={styles.form}></form>;
};
