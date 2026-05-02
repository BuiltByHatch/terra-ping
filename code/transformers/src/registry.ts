import type { TransformerAdapter } from './adapters/types';

const registry: Map<string, TransformerAdapter<unknown, unknown>> = new Map();

export function registerAdapter<TInput, TOutput>(adapter: TransformerAdapter<TInput, TOutput>): void {
  registry.set(adapter.sourceName, adapter as TransformerAdapter<unknown, unknown>);
}

export function getAdapter(sourceName: string): TransformerAdapter<unknown, unknown> | undefined {
  return registry.get(sourceName);
}

export function listAdapters(): string[] {
  return Array.from(registry.keys());
}
