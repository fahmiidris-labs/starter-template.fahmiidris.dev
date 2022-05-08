/**
 *  Example format birthdate: mm-dd-yyyy
 *
 * @param birthdate string
 * @returns number
 */
export const getAge = (birthdate: string): number => {
  const today = new Date();
  const birthDate = new Date(birthdate);
  const age = today.getFullYear() - birthDate.getFullYear();
  const month = today.getMonth() - birthDate.getMonth();
  const day = today.getDate() - birthDate.getDate();

  if (month < 0 || (month === 0 && day < 0)) {
    return age - 1;
  }

  return age;
};
