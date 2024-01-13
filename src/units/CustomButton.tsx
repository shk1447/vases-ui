import { cva, type VariantProps } from 'class-variance-authority';
import React, { ButtonHTMLAttributes, FC } from 'react';
import { cn } from './utils/tailwind';

const ButtonVariants = cva(``, {
  variants: {
    shape: {
      square: 'rounded-none',
      primary: 'rounded',
      full: 'rounded-full',
    },
    size: {
      small: 'text-sm py-1 px-2',
      medium: 'text-base py-2 px-6',
      large: 'text-lg py-3 px-6',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    color: {
      more: 'bg-background-main hover:underline text-black-800 border-yellow-50',
      register: 'bg-black hover:bg-gray-800 text-white',
      cancel:
        'bg-transparent border border-gray-300 hover:bg-gray-300 hover:text-white text-gray-500',
    },
  },
  compoundVariants:[{
    color:'more',
    shape:'primary',
    class: "hover:py-8"
  }],
  defaultVariants: {
    color: 'more',
    shape: 'primary',
    size: 'small',
    weight: 'normal',
  },
});

export interface CustomButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {
  children?: React.ReactNode | Element
}

export const CustomButton: FC<CustomButtonProps> = ({
  color,
  shape,
  size,
  weight,
  children,
  ...props
}) => {
  return (
    <button className={cn(ButtonVariants({ color, shape, size, weight }))} {...props}>
      <>{children}</>
    </button>
  );
};