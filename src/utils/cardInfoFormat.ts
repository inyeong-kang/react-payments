export function makeCardNumber(str: string) {
  return str.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, '$1-$2-$3-$4');
}

export function makeCardDate(str: string) {
  return str.replace(/(\d{2})(\d{2})/, '$1/$2');
}