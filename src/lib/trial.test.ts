import { trialDays } from './trial';
import { describe, expect, it } from 'vitest';
import { firstName, validateTrialForm } from './trial';

describe('validateTrialForm', () => {
  it('accepts a complete form', () => {
    const errors = validateTrialForm({ fullName: 'Anna Petit', email: 'anna@bistro-lune.fr', locations: '1' });
    expect(errors).toEqual({});
  });

  it('asks for a full name', () => {
    const errors = validateTrialForm({ fullName: '', email: 'anna@bistro-lune.fr', locations: '1' });
    expect(errors.fullName).toBe('Enter your full name.');
  });
});

describe('firstName', () => {
  it('keeps the first word of the full name', () => {
    expect(firstName('  Anna Petit ')).toBe('Anna');
  });
});

describe('trialDays', () => {
  it.each([
    ['21', 21],
    [undefined, 14],
    ['45', 14],
    ['7', 7],
    ['30', 30],
    ['12.5', 14],
    ['6', 14],
    ['31', 14],
    ['', 14],
    ['invalid', 14],
    ['21days', 14],
    ['NaN', 14],
    ['Infinity', 14],
  ])('returns %s as %i days', (value, expected) => {
    expect(trialDays(value)).toBe(expected);
  });
});
