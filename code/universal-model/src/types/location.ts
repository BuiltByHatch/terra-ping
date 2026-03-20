export interface Location {
  latitude: number;
  longitude: number;
  altitude?: number;
  accuracy?: number;
  source: 'gps' | 'manual' | 'derived';
  metadata: Record<string, unknown>;
}
