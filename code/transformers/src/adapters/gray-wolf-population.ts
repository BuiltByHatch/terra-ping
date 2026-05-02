import type { Animal, PopulationEstimate } from '@terra-ping/universal-model';
import type { TransformerAdapter } from './types';

export interface GrayWolfPopulationCsvRow {
  species_common: string;
  species_scientific: string;
  country: string;
  admin1: string;
  admin1_code: string;
  year: string;
  population_estimate: string;
  estimate_type: string;
  source_name: string;
  source_url: string;
  source_notes: string;
}

const grayWolf: Animal = {
  id: 'canis-lupus',
  species: 'Canis lupus',
  commonName: 'Gray wolf',
  tags: ['gray-wolf', 'wolf', 'mammal'],
  metadata: {},
};

export const grayWolfPopulationAdapter: TransformerAdapter<
  string | GrayWolfPopulationCsvRow[],
  PopulationEstimate[]
> = {
  sourceName: 'gray-wolf-population-current-us-states',
  async transform(input) {
    const rows = typeof input === 'string' ? parseGrayWolfPopulationCsv(input) : input;

    return rows.map(transformGrayWolfPopulationRow);
  },
};

export function parseGrayWolfPopulationCsv(input: string): GrayWolfPopulationCsvRow[] {
  const [headerLine, ...lines] = input.trim().split(/\r?\n/);

  if (!headerLine) {
    return [];
  }

  const headers = parseCsvLine(headerLine) as Array<keyof GrayWolfPopulationCsvRow>;

  return lines
    .filter((line) => line.trim().length > 0)
    .map((line) => {
      const values = parseCsvLine(line);
      const row = {} as GrayWolfPopulationCsvRow;

      headers.forEach((header, index) => {
        row[header] = values[index] ?? '';
      });

      return row;
    });
}

export function transformGrayWolfPopulationRow(row: GrayWolfPopulationCsvRow): PopulationEstimate {
  const year = Number.parseInt(row.year, 10);
  const population = Number.parseInt(row.population_estimate, 10);

  if (!Number.isFinite(year) || !Number.isFinite(population)) {
    throw new Error(`Invalid gray wolf population row for ${row.admin1}: ${row.year}/${row.population_estimate}`);
  }

  return {
    id: `${grayWolf.id}-${slug(row.country)}-${slug(row.admin1)}-${year}`,
    animalId: grayWolf.id,
    animal: {
      ...grayWolf,
      species: row.species_scientific || grayWolf.species,
      commonName: row.species_common || grayWolf.commonName,
    },
    geography: {
      country: row.country,
      admin1: row.admin1,
      admin1Code: row.admin1_code,
    },
    year,
    population,
    estimateType: row.estimate_type,
    source: row.source_name,
    sourceUrl: row.source_url,
    metadata: {
      sourceNotes: row.source_notes,
    },
  };
}

function slug(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function parseCsvLine(line: string): string[] {
  const values: string[] = [];
  let current = '';
  let inQuotes = false;

  for (let index = 0; index < line.length; index += 1) {
    const character = line[index];
    const nextCharacter = line[index + 1];

    if (character === '"' && inQuotes && nextCharacter === '"') {
      current += '"';
      index += 1;
      continue;
    }

    if (character === '"') {
      inQuotes = !inQuotes;
      continue;
    }

    if (character === ',' && !inQuotes) {
      values.push(current);
      current = '';
      continue;
    }

    current += character;
  }

  values.push(current);

  return values;
}
