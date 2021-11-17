import FlakeId from 'flakeid';

export const generateDatabaseId = (): string => new FlakeId().gen();
