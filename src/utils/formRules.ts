export const formRules = {
  required: {
    required: true,
    message: 'validation_field_not_empty',
  },
  email: {
    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    message: 'validation_field_email',
    validateTrigger: ['onBlur'],
  },
  url: {
    pattern: /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/,
    message: 'validation_field_url',
    validateTrigger: ['onBlur'],
  },
  login: {
    pattern: /^[A-Za-z0-9_-]{3,20}$/,
    message: 'validation_field_login',
    validateTrigger: ['onBlur'],
  },
  name: {
    pattern: /^[А-ЯЁA-Z][а-яёa-z-]{1,}$/,
    message: 'validation_field_name',
    validateTrigger: ['onBlur'],
  },
  password: {
    pattern: /^(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9]{8,40}$/,
    message: 'validation_field_password',
    validateTrigger: ['onBlur'],
  },
  phone: {
    pattern: /^\+?\d{10,15}$/,
    message: 'validation_field_phone',
    validateTrigger: ['onBlur'],
  },
};

export const normalizeTextField = (text: string) => text.trimStart();
