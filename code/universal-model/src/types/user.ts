export interface User {
  id: string;
  name: string;
  email?: string;
  role: 'researcher' | 'conservationist' | 'citizen-scientist' | 'admin';
  metadata: Record<string, unknown>;
}
