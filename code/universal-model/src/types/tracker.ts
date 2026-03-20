export interface Tracker {
  id: string;
  type: string;
  manufacturer?: string;
  model?: string;
  metadata: Record<string, unknown>;
}
