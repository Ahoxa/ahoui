import { recipe } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";

export const buttonRoot = recipe({
  base: {
    border: "1px solid transparent",
    borderRadius: "var(--ahoui-radius, 10px)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    cursor: "pointer",
    userSelect: "none",
    whiteSpace: "nowrap",
    transition:
      "transform 0.1s ease, box-shadow 0.1s ease, background-color 0.1s ease",
    boxShadow: "var(--ahoui-shadow-sm, 0 1px 2px rgba(0, 0, 0, 0.05))",
    selectors: {
      "&:hover": { transform: "translateY(-1px)" },
      "&:active": { transform: "translateY(0)" },
      "&[aria-disabled='true'], &[disabled]": {
        cursor: "not-allowed",
        opacity: 0.5,
        transform: "none",
        boxShadow: "none",
      },
      "&:focus-visible": {
        outline: "2px solid oklch(0.70 0.20 260 / 0.6)",
        outlineOffset: "2px",
      },
    },
    fontWeight: "600",
  },
  variants: {
    variant: {
      solid: {
        backgroundColor: "var(--ahoui-color-primary, #6ea8fa)",
        color: "var(--ahoui-color-on-primary, #121212)",
      },
      outline: {
        backgroundColor: "transparent",
        color: "var(--ahoui-color-fg, #222)",
        borderColor: "currentColor",
      },
      ghost: {
        backgroundColor: "transparent",
        color: "var(--ahoui-color-fg, #222)",
      },
    },
    size: {
      sm: {
        padding: "0.375rem 0.5rem",
        fontSize: "0.875rem",
        lineHeight: "1.1",
      },
      md: { padding: "0.5rem 0.75rem", fontSize: "1rem", lineHeight: "1.2" },
      lg: { padding: "0.75rem 1rem", fontSize: "1.125rem", lineHeight: "1.25" },
    },
  },
  defaultVariants: {
    variant: "solid",
    size: "md",
  },
});

export const buttonLabel = style({ lineHeight: 1 });
export const buttonIcon = style({ display: "inline-flex" });
