import { FC } from "react";
import styles from "src/styles/Wrapper.module.scss";

export type WrapperVariant = "small" | "regular";

interface WrapperProps {
  variant?: WrapperVariant;
}

export const Wrapper: FC<WrapperProps> = ({
  children,
  variant = "regular",
}) => {
  return (
    <div
      className={variant === "regular" ? styles.container : styles.container}
    >
      {children}
    </div>
  );
};
