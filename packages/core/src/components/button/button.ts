export type ButtonVariant = "solid" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  onClick?: (e: Event) => void;
}

export const getButtonAttributes = (props: ButtonProps) => {
  const {
    variant = "solid",
    size = "md",
    disabled = false,
    loading = false,
    onClick,
  } = props;

  return {
    type: "button" as const,
    "data-ahoui-variant": variant,
    "data-ahoui-size": size,
    disabled: disabled || loading,
    onClick: disabled || loading ? undefined : onClick,
  };
};
