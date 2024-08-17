export enum Type {
  button = 'button',
  submit = 'submit',
  reset = 'reset'
}

export enum Variant {
  filled = 'filled',
  tonal = 'tonal',
  elevated = 'elevated',
  outlined = 'outlined',
  text = 'text'
}

export enum Style {
  none = 'none',
  small = 'small',
  medium = 'medium',
  large = 'large'
}

export interface ButtonProps {
  variant?: keyof typeof Variant;
  type?: keyof typeof Type;
  variantRounded?: keyof typeof Style;
  variantSize?: keyof typeof Style;
}
