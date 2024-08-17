import styled, { css } from "styled-components";
import { ButtonProps, Style, Type, Variant } from "./types/button";

export const Button = styled.button.attrs<ButtonProps>((props) => ({
  type: props.type ?? Type.button,
  variantSize: props.variantSize ?? Style.small,
  variantRounded: props.variantRounded ?? Style.small,
}))`
  background: white;
  border: none;
  color: #bf4f74;
  margin: 0;
  outline: none;
  height: fit-content;

  &:focus {
    outline: none;
  }

  &:hover {
    opacity: 0.9;
  }

  ${(props) =>
    props.variantRounded === Style.small &&
    css`
      border-radius: 3px;
    `}

  ${(props) =>
    props.variantRounded === Style.medium &&
    css`
      border-radius: 10px;
    `}

  ${(props) =>
    props.variantRounded === Style.large &&
    css`
      border-radius: 30px;
    `}

  ${(props) =>
    props.variantSize === Style.small &&
    css`
      padding: 0.25em 0.5em;
    `}

  ${(props) =>
    props.variantSize === Style.medium &&
    css`
      padding: 0.5em 1em;
    `}

  ${(props) =>
    props.variantSize === Style.large &&
    css`
      padding: 1.5em 2em;
    `}

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
