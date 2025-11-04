import type { ButtonHTMLAttributes } from "react";
import {
  getButtonAttributes,
  buttonRoot,
  type ButtonBaseProps,
} from "@ahoui/core";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  Omit<ButtonBaseProps, "onClick"> & {
    classNames?: { root?: string; label?: string; icon?: string };
  };

export const Button = (props: ButtonProps) => {
  const {
    variant = "solid",
    size = "md",
    disabled = false,
    loading = false,
    onClick,
    classNames,
    children,
    ...rest
  } = props;

  const buttonAttributes = getButtonAttributes({
    variant,
    size,
    disabled,
  });

  const className = [
    buttonRoot({ variant, size }),
    classNames?.root,
    rest.className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={className}
      {...buttonAttributes}
      {...rest}
      onClick={disabled ? undefined : onClick}
      data-ahoui-variant={variant}
      data-ahoui-size={size}
    >
      <span className={classNames?.label}>{children}</span>
    </button>
  );
};
