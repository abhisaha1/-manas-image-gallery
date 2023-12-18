import { type ClassValue, clsx } from "clsx"
import { getCldImageUrl } from "next-cloudinary";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function getDataUrl(public_id: string) {
  const imageUrl = getCldImageUrl({
    src: public_id,
    width: 10, // Resize the original file to a smaller size
  });
  const response = await fetch(imageUrl);
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const base64 = buffer.toString("base64");
  const dataUrl = `data:${response.type};base64,${base64}`;
  return dataUrl
}