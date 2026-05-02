export interface TransformerAdapter<TInput, TOutput = import('@terra-ping/universal-model').Observation[]> {
  sourceName: string;
  transform(input: TInput): Promise<TOutput>;
}
