import { sum_to_n_a, sum_to_n_b, sum_to_n_c } from './sum_functions';

describe('sum_to_n_a', () => {
  it('should return the correct sum for positive numbers', () => {
    expect(sum_to_n_a(5)).toBe(15);
    expect(sum_to_n_a(10)).toBe(55);
    expect(sum_to_n_a(100)).toBe(5050);
  });

  it('should return 0 for 0', () => {
    expect(sum_to_n_a(0)).toBe(0);
  });

  it('should return 0 for negative numbers', () => {
    expect(sum_to_n_a(-1)).toBe(0);
    expect(sum_to_n_a(-5)).toBe(0);
  });
});

describe('sum_to_n_b', () => {
  it('should return the correct sum for positive numbers', () => {
    expect(sum_to_n_b(5)).toBe(15);
    expect(sum_to_n_b(10)).toBe(55);
    expect(sum_to_n_b(100)).toBe(5050);
  });

  it('should return 0 for 0', () => {
    expect(sum_to_n_b(0)).toBe(0);
  });

  it('should return 0 for negative numbers', () => {
    expect(sum_to_n_b(-1)).toBe(0);
    expect(sum_to_n_b(-5)).toBe(0);
  });
});

describe('sum_to_n_c', () => {
  it('should return the correct sum for positive numbers', () => {
    expect(sum_to_n_c(5)).toBe(15);
    expect(sum_to_n_c(10)).toBe(55);
    expect(sum_to_n_c(100)).toBe(5050);
  });

  it('should return 0 for 0', () => {
    expect(sum_to_n_c(0)).toBe(0);
  });

  it('should return 0 for negative numbers', () => {
    expect(sum_to_n_c(-1)).toBe(0);
    expect(sum_to_n_c(-5)).toBe(0);
  });
});