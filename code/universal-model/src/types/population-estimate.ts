import type { Animal } from './animal';

export interface PopulationEstimate {
  id: string;
  animalId: string;
  animal?: Animal;
  geography: {
    country: string;
    admin1?: string;
    admin1Code?: string;
  };
  year: number;
  population: number;
  estimateType: string;
  source: string;
  sourceUrl?: string;
  metadata: Record<string, unknown>;
}
