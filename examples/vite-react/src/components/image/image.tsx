"use client";

import { config } from "./config";
import { EditorButtonsContainer } from "@lumina/core";
import styles from "./image.module.scss";
import { useState } from "react";

type TProps = {
  id: string;
  href: string;
  alt: string;
};

//block of buttons

export const Image = ({ href, alt, id }: TProps) => {
  const [isHovered, setIsHovered] = useState(false);
  if (!href) return null;
  return (
    <div
      className={styles.imageContainer}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img className="image" src={href} alt={alt} />
      <EditorButtonsContainer
        id={id}
        config={config}
        data={{ href, alt }}
        isHovered={isHovered}
      />
    </div>
  );
};
