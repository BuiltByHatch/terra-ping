import { grayWolfPopulationAdapter } from './adapters/gray-wolf-population';
import { registerAdapter } from './registry';

registerAdapter(grayWolfPopulationAdapter);

export * from './adapters/gray-wolf-population';
export * from './adapters/types';
export * from './registry';
