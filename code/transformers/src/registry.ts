import type { TransformerAdapter } from './adapters/types';

const registry: Map<string, TransformerAdapter<unknown>> = new Map();

export function registerAdapter<TInput>(adapter: TransformerAdapter<TInput>): void {
  registry.set(adapter.sourceName, adapter as TransformerAdapter<unknown>);
}

export function getAdapter(sourceName: string): TransformerAdapter<unknown> | undefined {
  return registry.get(sourceName);
}

export function listAdapters(): string[] {
  return Array.from(registry.keys());
}
