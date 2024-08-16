import styled, { css } from "styled-components";

enum Variant {
  filled = "filled",
  tonal = "tonal",
  elevated = "elevated",
  outlined = "outlined",
  text = "text",
}

interface ButtonProps {
  variant?: keyof typeof Variant;
  type?: "button" | "submit" | "reset";
}

export const Button = styled.button.attrs<ButtonProps>((props) => ({
  type: props.type ?? "button",
}))`
  background: white;
  border-radius: 3px;
  border: none;
  color: #bf4f74;
  margin: 0;
  padding: 0.5em 1em;
  outline: none;

  &:focus {
  outline: none;
  }

  &:hover {
  opacity: 0.9;
  }

  ${(props) =>
    props.variant === Variant.elevated &&
    css`
      background: #45455a;
      color: #e2e0fb;
    `}

  ${(props) =>
    props.variant === Variant.filled &&
    css`
      background: #553f5d;
      color: #cbc4cc;
    `}

    ${(props) =>
    props.variant === Variant.outlined &&
    css`
      background: transparent;
      color: #553f5d;
      border: 1px solid #553f5d;

      &:hover {
        border: 1px solid #553f5d;
      }
    `}

    ${(props) =>
    props.variant === Variant.text &&
    css`
      background: transparent;
      border: none;
      color: #553f5d;
    `}

    ${(props) =>
    props.variant === Variant.tonal &&
    css`
      background: #45455a;
      color: #e2e0fb;
    `}
`;
