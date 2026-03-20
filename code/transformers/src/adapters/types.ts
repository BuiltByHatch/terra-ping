export interface TransformerAdapter<TInput> {
  sourceName: string;
  transform(input: TInput): Promise<import('@terra-ping/universal-model').Observation[]>;
}
