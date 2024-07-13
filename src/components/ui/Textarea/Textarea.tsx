import { FieldError, FieldValues, Path, UseFormRegister } from 'react-hook-form';
import { AnimatePresence, motion } from 'framer-motion';
import styles from '../TextInput/TextInput.module.scss';

interface IProps<TFieldValues extends FieldValues> {
  name: Path<TFieldValues>;
  label: string;
  type?: string;
  register: UseFormRegister<TFieldValues>;
  error?: FieldError;
}

export const Textarea = <TFieldValues extends FieldValues>({
  label,
  name,
  register,
  error,
}: IProps<TFieldValues>) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <textarea
        data-lenis-prevent
        id={name}
        className={styles.textarea}
        spellCheck={true}
        {...register(name)}
      />

      <AnimatePresence>
        {error && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className={styles.errorMsg}
          >
            {error.message}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
};
