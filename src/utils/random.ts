export function randomCardNumber() {
  return Array(16)
    .fill(0)
    .map(() => Math.floor(Math.random() * 10))
    .join("");
}

export function randomExpiry() {
  const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, "0");
  const year = String(26 + Math.floor(Math.random() * 5));
  return `${month}/${year}`;
}
