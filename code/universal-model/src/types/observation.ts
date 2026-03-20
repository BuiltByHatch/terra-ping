import type { Animal } from './animal';
import type { Location } from './location';

export interface Observation {
  id: string;
  animalId: string;
  animal?: Animal;
  location: Location;
  timestamp: Date;
  source: string;
  metadata: Record<string, unknown>;
}
