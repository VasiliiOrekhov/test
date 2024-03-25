import { formRules } from 'utils/formRules';

export const profileInputs = [
  {
    name: 'first_name',
    rules: [formRules.required, formRules.name],
  },
  {
    name: 'second_name',
    rules: [formRules.required, formRules.name],
  },
  {
    name: 'display_name',
    rules: [formRules.required, formRules.name],
  },
  {
    name: 'login',
    rules: [formRules.required, formRules.login],
  },
  {
    name: 'email',
    rules: [formRules.required, formRules.email],
  },
  {
    name: 'phone',
    rules: [formRules.required, formRules.phone],
  },
];
