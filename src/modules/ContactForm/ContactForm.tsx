import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { contactFormSchema, DEFAULT_VALUES } from '@/schemas/contactForm';
import { Button, Textarea, TextInput } from '@/components/ui';

import styles from './ContactForm.module.scss';

type FormData = yup.InferType<typeof contactFormSchema>;

const formFields = [
  { label: 'Full name', name: 'fullName', type: 'text' },
  { label: 'E-mail', name: 'email', type: 'email' },
  { label: 'Phone number', name: 'phoneNumber', type: 'tel' },
];

export const ContactForm: React.FC = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(contactFormSchema),
    defaultValues: DEFAULT_VALUES,
  });

  const onSubmit: SubmitHandler<FormData> = data => {
    console.log('Form data:', data);

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      {formFields.map(({ label, name, type }) => (
        <TextInput<FormData>
          key={name}
          type={type}
          name={name as keyof FormData}
          label={label}
          register={register}
          error={errors[name]}
        />
      ))}

      <Textarea name="message" label="Message" register={register} error={errors.message} />

      <div className={styles.btnWrapper}>
        <Button type="submit" variant="accent">
          Send
        </Button>
      </div>
    </form>
  );
};
