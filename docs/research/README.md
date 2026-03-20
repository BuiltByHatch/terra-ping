# Research

Technical experiments, proofs of concept, and findings.

## Directory Structure

```
research/
└── experiments/    # POC projects and spike investigations
```

## Completed Research

### Data Format Analysis (2026-03)
Surveyed common animal tracking data formats:
- **Movebank CSV** - Standard academic format
- **GPX** - GPS exchange format
- **GeoJSON** - Web-friendly format
- **KML** - Google Earth format

**Finding**: Most datasets can be normalized to a common schema with location + timestamp + species.

## Active Investigations

### Transformer Architecture
Exploring the best pattern for building extensible data transformers that can handle varying input formats.

## Resources

- [Movebank Data Format](https://www.movebank.org/cms/movebank-content/data-formats)
- [iNaturalist API](https://api.inaturalist.org/v2/docs/)
