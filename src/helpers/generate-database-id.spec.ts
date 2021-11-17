import { generateDatabaseId } from './generate-database-id';

describe('generateId', () => {
  it('should return string', () => {
    expect(typeof generateDatabaseId()).toEqual('string');
  });

  it('should not exceed 64 bits', () => {
    expect(generateDatabaseId().length).toBeLessThanOrEqual(64);
  });

  it('should be longer than 10 bits', () => {
    expect(generateDatabaseId().length).toBeGreaterThan(10);
  });
});
