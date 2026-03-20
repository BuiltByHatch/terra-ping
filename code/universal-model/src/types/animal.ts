export interface Animal {
  id: string;
  species: string;
  commonName?: string;
  tags: string[];
  metadata: Record<string, unknown>;
}
