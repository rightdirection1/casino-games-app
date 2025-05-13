"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  src: string;
  alt: string;
};

export default function GameImage({ src, alt }: Props) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      width={300}
      height={300}
      alt={alt}
      className="w-full aspect-[4/3] object-cover rounded"
      onError={() => setImgSrc("/fallback-image.jpg")}
    />
  );
}
