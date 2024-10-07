export function clsx(...inputs: ClassValue[]): string {
  return inputs.filter(Boolean).join(" ");
}

export default clsx;
