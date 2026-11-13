import { describe, expect, it } from 'vitest';
import { monthlyPrice } from './pricing';

describe('monthlyPrice', () => {
  it('charges 29 per location per month', () => {
    expect(monthlyPrice(1, 'monthly')).toBe(29);
    expect(monthlyPrice(10, 'monthly')).toBe(290);
  });

  it('charges 24 for each location from the 11th', () => {
    expect(monthlyPrice(11, 'monthly')).toBe(314);
  });

  it('takes 20% off with annual billing', () => {
    expect(monthlyPrice(1, 'annual')).toBe(23.2);
  });
});

describe('monthlyPrice TC-12 annual pricing', () => {
  it.each([
    [10, 232],
    [11, 251.2],
    [12, 270.4],
  ])('applies the annual discount once for %i locations', (locations, expected) => {
    expect(monthlyPrice(locations, 'annual')).toBe(expected);
  });
});
