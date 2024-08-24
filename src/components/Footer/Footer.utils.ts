export const formatPhoneNumber = (phoneNumber: string) => {
  const cleanNumber = phoneNumber.replace(/\D/g, '');
  const numberToFormat = cleanNumber.padEnd(11, '0').slice(0, 13);
  return numberToFormat.replace(
    /^(\d{1,3})(\d{3})(\d{3})(\d{2})(\d{2})/,
    '+$1 ($2) $3-$4-$5',
  );
};
