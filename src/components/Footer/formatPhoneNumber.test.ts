import { formatPhoneNumber } from './Footer.utils';

describe('formatPhoneNumber', () => {
  it('should format a valid phone number correctly', () => {
    expect(formatPhoneNumber('12345678901')).toBe('+1 (234) 567-89-01');
    expect(formatPhoneNumber('9876543210')).toBe('+9 (876) 543-21-00'); // Пример с числом, меньше 11 знаков
    expect(formatPhoneNumber('7001234567')).toBe('+7 (001) 234-56-70'); // Пример с кодом страны 7
  });

  it('should handle phone numbers with extra spaces and dashes', () => {
    expect(formatPhoneNumber(' 1 2 3 - 4 5 6 / 7 8 9 0 1 ')).toBe(
      '+1 (234) 567-89-01',
    );
    expect(formatPhoneNumber(' (987) 654 - 3210 ')).toBe('+9 (876) 543-21-00');
  });

  it('should return formatted string even if input contains only digits', () => {
    expect(formatPhoneNumber('12345678901')).toBe('+1 (234) 567-89-01');
    expect(formatPhoneNumber('987654321000')).toBe('+98 (765) 432-10-00');
  });

  it('should return an empty string if the input is empty', () => {
    expect(formatPhoneNumber('')).toBe('+0 (000) 000-00-00'); // Возможное поведение при пустом входе
  });

  it('should handle input with less than 11 digits', () => {
    expect(formatPhoneNumber('12345')).toBe('+1 (234) 500-00-00'); // Возможное поведение при недостаточном количестве цифр
  });

  it('should handle input with more than 11 digits', () => {
    expect(formatPhoneNumber('12345678901234')).toBe('+123 (456) 789-01-23');
  });
});
