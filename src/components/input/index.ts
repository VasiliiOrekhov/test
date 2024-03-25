import InternalInput, { InputProps } from './input';
import Password from './input-password';

export type { InputProps };

type CompoundedComponents = typeof InternalInput & {
  Password: typeof Password;
};

const Input = InternalInput as CompoundedComponents;

Input.Password = Password;

export default Input;
