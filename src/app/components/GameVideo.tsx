"use client";

type Props = {
  src: string;
};

export default function GameVideo({ src }: Props) {
  return (
    <video
      autoPlay
      muted
      loop
      className="w-full aspect-[4/3] object-cover rounded"
    >
      <source src={src} type="video/webm" />
      Your browser does not support video.
    </video>
  );
}
