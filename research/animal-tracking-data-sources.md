# Open Data Sources for Animal Tracking Research

This document catalogs open data sources available for tracking and monitoring animal species. Data sources are organized by type and use case, with recommendations provided at the end.

---

## 1. General Wildlife Tracking Databases

### Movebank
**URL:** https://www.movebank.org  
**Type:** Animal tracking telemetry database  
**License:** Varies by dataset (CC-BY, CC0, etc.)

**Overview:**
The largest repository of animal tracking data globally, hosted by the Max Planck Institute of Animal Behavior.

**Key Statistics:**
- 9.8 billion animal locations
- 8.4 billion other sensor records
- 9,755 studies
- 1,633 taxa
- 5,094 data owners

**Data Types:**
- GPS collar data
- Argos satellite telemetry
- Geolocator data
- Acceleration sensors
- Heart rate monitors

**Access Methods:**
- Web interface for browsing and downloading
- REST API for programmatic access
- Animal Tracker mobile app
- MoveApps for analysis workflows

**Strengths:**
- Extremely broad taxonomic coverage
- Standardized data model
- DOIs for published datasets
- Long-term archival commitment
- Active researcher community

**Considerations:**
- Data access varies by study (some require requests)
- Quality varies across contributed datasets
- Requires understanding of telemetry data formats

---

### Global Biodiversity Information Facility (GBIF)
**URL:** https://www.gbif.org  
**Type:** Species occurrence database  
**License:** Varies by dataset

**Overview:**
International network and database providing open access to biodiversity data from institutions worldwide.

**Key Statistics:**
- 3+ billion occurrence records
- 200+ million species observations
- 1.7+ million species
- Thousands of datasets from national parks, museums, research institutions

**Data Types:**
- Species occurrences
- Specimen records
- Observation data
- Audio recordings
- Images

**Access Methods:**
- Web interface and map viewer
- API for programmatic access
- Bulk download of datasets
- Integration with analysis tools

**Strengths:**
- Massive global coverage
- Standardized Darwin Core format
- National and institutional backing
- Rich metadata
- Active integration with research community

**Considerations:**
- Occurrence data (presence only), not continuous tracking
- Variable data quality across contributors
- Duplicate records may exist

---

## 2. Citizen Science Platforms

### iNaturalist
**URL:** https://www.inaturalist.org  
**Type:** Community science observation platform  
**License:** CC0, CC-BY, CC-BY-NC (varies by observation)

**Overview:**
A social network where participants record observations of living organisms with photographic evidence.

**Key Statistics:**
- 400+ million photos
- Research-grade observations globally
- 400,000+ species documented
- Active global community

**Data Products:**
- Open Dataset (monthly snapshots)
- Open Range Map Dataset (species distribution models)
- Geomodel predictions (GeoJSON/GeoPackage)
- Photos with metadata

**Access Methods:**
- REST API
- AWS S3 bucket (inaturalist-open-data)
- GBIF integration
- Direct database exports

**Strengths:**
- Massive scale and global coverage
- Community-vetted species IDs
- Rich multimedia data
- Open access with flexible licensing
- Range map models available

**Considerations:**
- Observation data, not GPS tracking
- Geographic bias toward accessible areas
- Requires filtering for research-grade quality

---

### eBird
**URL:** https://ebird.org  
**Type:** Bird observation database  
**License:** CC0 for public data

**Overview:**
Cornell Lab of Ornithology's citizen science platform for bird observations worldwide.

**Data Products:**
- **EBD (eBird Basic Dataset):** Complete observation dataset (requires request)
- **EOD (eBird Observation Dataset):** Public dataset via GBIF
- **Status and Trends:** Species abundance models
- **APIs:** Real-time data access

**Key Features:**
- Standardized survey protocols
- Effort-based observations
- Expert-reviewed data
- Seasonal abundance models
- Migration forecasts

**Strengths:**
- Highest quality bird data available
- Standardized protocols ensure consistency
- Global coverage with local expertise
- Rich analytical products

**Considerations:**
- Focused exclusively on birds
- Some data requires registration and request process
- Protocols may limit data types

---

## 3. Marine & Ocean Data

### Ocean Biodiversity Information System (OBIS)
**URL:** https://obis.org  
**Type:** Marine biodiversity database  
**License:** Varies by dataset

**Overview:**
Global open-access hub for marine biodiversity data, operating under IOC-UNESCO.

**Key Statistics:**
- 168 million species observations
- 204,000 marine species
- 7,082 datasets
- 30 million DNA sequences

**Access Methods:**
- OBIS Mapper (visual exploration)
- Search interface
- REST API
- AWS Open Data (GeoParquet format)
- R package (robis)

**Data Enrichment:**
- Sea surface temperature
- Bathymetry
- IUCN Red List status
- Taxonomy via WoRMS

**Strengths:**
- Specialized marine focus
- Global coordinated network (37 nodes)
- Standardized quality control
- Environmental context data

**Considerations:**
- Marine species focus
- Mix of occurrence and survey data
- Variable resolution across datasets

---

### OBIS-SEAMAP
**URL:** https://seamap.env.duke.edu  
**Type:** Marine megafauna database (thematic OBIS node)  
**License:** Creative Commons (varies)

**Overview:**
Focused database for marine mammals, seabirds, sea turtles, sharks, and rays.

**Data Sources:**
- Satellite telemetry
- Acoustic monitoring
- Photo-ID
- Survey data
- Citizen science

**Key Species Groups:**
- Marine mammals
- Sea turtles
- Seabirds
- Sharks and rays

**Strengths:**
- Specialized for megafauna
- Rich telemetry data
- Integration with OBIS broader network
- Duke University maintained

**Considerations:**
- Marine focus limits terrestrial species
- Regional data gaps possible

---

## 4. Government & Institutional Sources

### USGS Alaska Science Center Wildlife Tracking
**URL:** https://www.usgs.gov/centers/alaska-science-center/science/usgs-alaska-science-center-wildlife-tracking-data-collection  
**Type:** Government telemetry database  
**License:** Public Domain (US Government)

**Overview:**
US Geological Survey's archive of wildlife tracking studies, primarily focused on Arctic and Alaskan species.

**Species Coverage:**
- Polar bears
- Pacific walruses
- Various seabirds (loons, ducks, geese)
- Caribou
- Seals

**Data Products:**
- Processed GPS/Argos data
- Raw telemetry data
- Seasonal distribution maps
- Interactive TAME explorer

**Access Methods:**
- Direct download from USGS
- ScienceBase catalog
- Movebank integration
- Google Earth animations

**Strengths:**
- Government-verified quality
- Long-term data series (1980s-present)
- Excellent documentation
- Public domain licensing
- Standardized formats

**Considerations:**
- Geographic focus (Alaska/Arctic)
- Species limited to studied populations
- Some datasets require understanding of telemetry formats

---

### Data.gov Animal Tracking
**URL:** https://catalog.data.gov/dataset/?tags=animal-tracking  
**Type:** US Government open data portal  
**License:** Public Domain / Varies

**Overview:**
Centralized catalog of US federal government datasets including wildlife tracking data.

**Coverage:**
- 157+ animal tracking datasets
- Multiple federal agencies (USGS, USFWS, NOAA, NPS)
- Diverse species and ecosystems

**Key Agencies:**
- US Fish and Wildlife Service
- National Park Service
- NOAA Fisheries
- USGS
- Department of Defense

**Data Types:**
- GPS collar data
- Satellite telemetry
- Survey observations
- Camera trap data

**Strengths:**
- Centralized federal access
- Standardized metadata
- Cross-agency discovery
- Trusted government sources

**Considerations:**
- US-focused coverage
- Variable data formats
- Requires navigating federal systems

---

### U.S. Fish and Wildlife Service (USFWS)
**URL:** https://iris.fws.gov/  
**Type:** Federal wildlife data  
**License:** Public Domain

**Recent Notable Datasets:**
- Ocelot GPS tracking (Texas, 2012-2021)
- Bobcat GPS tracking (Texas, 2013-2021)
- Multiple species monitoring programs

**Data Access:**
- Service Catalog (iris.fws.gov)
- GBIF integration
- Direct data requests

---

## 5. Specialized Tracking Networks

### EarthRanger
**URL:** https://www.earthranger.com  
**Type:** Conservation tracking platform  
**License:** Free tier available

**Overview:**
Integrated platform for wildlife monitoring and anti-poaching efforts.

**Key Statistics:**
- 850+ conservation sites
- 23,000 animals tracked
- 150+ integrations
- 80 countries

**Features:**
- Real-time GPS tracking
- Sensor integration
- Patrol management
- Alert systems
- Conservation analytics

**Strengths:**
- Operational conservation focus
- Real-time data capabilities
- Multiple sensor integration
- Active global deployment

**Considerations:**
- Commercial platform (free tier limited)
- Focus on protected areas
- May require partnerships for access

---

### Motus Wildlife Tracking System
**URL:** https://motus.org  
**Type:** Automated radio telemetry network  
**License:** Varies by project

**Overview:**
Collaborative research network using automated radio telemetry to track small animals.

**Technology:**
- Automated radio telemetry stations
- nanotags (lightweight tracking devices)
- Continental-scale network

**Applications:**
- Bird migration studies
- Bat tracking
- Small mammal movements
- Insect dispersal

**Strengths:**
- Tracks smaller animals than satellite/GPS
- Long-term continuous data
- Community network collaboration

**Considerations:**
- Requires proximity to Motus stations
- Regional coverage limitations
- Technical understanding required

---

### Seabird Tracking Database
**URL:** https://www.seabirdtracking.org  
**Type:** Specialized seabird telemetry database  
**License:** Varies by dataset

**Overview:**
Global database for seabird tracking studies, hosted by BirdLife International.

**Key Statistics:**
- 80+ million locations
- 194 seabird species
- 545 colonies tracked
- 1,600+ datasets

**Recent Growth (2025):**
- 33 million new locations added
- 62 species tracked (12 new)
- 186 new datasets
- 2,000+ data requests fulfilled

**Strengths:**
- Seabird-specific focus
- Global colony coverage
- Research-grade data
- Conservation application focus

**Considerations:**
- Birds only (seabirds)
- Dependent on researcher contributions
- Variable access policies

---

### ICARUS Initiative
**URL:** https://www.icarus.mpg.de  
**Type:** Space-based animal tracking  
**License:** Open access planned

**Overview:**
International Cooperation for Animal Research Using Space - satellite-based global tracking system.

**Technology:**
- ISS-based receivers (recently resumed)
- Lightweight GPS tags
- Global coverage including remote areas

**Applications:**
- Continental and transoceanic migrations
- Small animal tracking
- Global movement patterns

**Strengths:**
- True global coverage
- Real-time tracking capability
- Small tag weights

**Considerations:**
- System recently reactivated (2024+)
- Tag availability may be limited
- Early-stage deployment

---

## 6. Regional & Thematic Resources

### WildlifeData.org
**URL:** https://wildlifedata.org  
**Type:** Wildlife data portal directory  
**License:** N/A (directory)

**Overview:**
Directory of wildlife data portals and repositories worldwide, helping researchers find appropriate sources.

**Coverage:**
- Continental portals (African, European, etc.)
- National biodiversity centers
- Specialized taxon databases
- Ocean tracking networks

**Use Case:**
- Discovery tool for specific geographic regions
- Links to specialized databases
- Cross-referencing with GBIF/OBIS

---

### WildLife Insights
**URL:** https://www.wildlifeinsights.org  
**Type:** Camera trap data platform  
**License:** Varies

**Overview:**
Cloud platform for camera trap data from conservation projects worldwide.

**Features:**
- Automated species identification
- Data standardization
- Conservation area mapping
- Global species coverage

---

## Summary Comparison Table

| Source | Species | Records | Geographic | Access | Best For |
|--------|---------|---------|------------|--------|----------|
| **Movebank** | 1,633 taxa | 9.8B locations | Global | API/Web | GPS telemetry |
| **GBIF** | 1.7M+ | 3B+ | Global | API/Web | Species occurrences |
| **iNaturalist** | 400K+ | 400M+ obs | Global | API/S3 | Community observations |
| **eBird** | 10K+ | Massive | Global | API/Request | Bird surveys |
| **OBIS** | 204K | 168M | Marine | API/AWS | Marine biodiversity |
| **USGS** | 26+ species | Various | Alaska/Arctic | Direct | Government telemetry |
| **EarthRanger** | Various | Real-time | Global | Platform | Conservation ops |
| **Seabird DB** | 194 | 80M | Global | Request | Seabird telemetry |

---

## Recommendations

Based on the research conducted, the following two data source sets are recommended as primary resources:

---

### Recommended Set 1: Comprehensive General Tracking Data

**Primary Source: Movebank + GBIF**

**Rationale:**
These two sources together provide the most comprehensive coverage of animal tracking and observation data available.

**Movebank Benefits:**
- Largest repository of actual GPS/telemetry tracking data
- 9.8 billion location records across 1,633 taxa
- Standardized data model ensures interoperability
- Long-term archival commitment from Max Planck Institute
- Published datasets have DOIs for citation

**GBIF Benefits:**
- Supplements with specimen and occurrence data
- National and institutional backing ensures sustainability
- Broad taxonomic and geographic coverage
- Standardized Darwin Core format
- Integration with thousands of data publishers

**Combined Use Cases:**
- Migration corridor analysis
- Species distribution modeling
- Cross-species movement comparisons
- Habitat utilization studies
- Climate change impact research

**Access Considerations:**
- Movebank: Some studies require data request/permission
- GBIF: Most data publicly accessible
- Both support programmatic API access

---

### Recommended Set 2: Ecosystem-Specific & Government Data

**Primary Source: OBIS + USGS Alaska Wildlife Tracking**

**Rationale:**
This combination provides high-quality, government-verified data for specific ecosystem types, with excellent documentation and long-term data series.

**OBIS Benefits:**
- 168 million marine species observations
- Global marine coverage with 37 regional nodes
- Environmental context (temperature, bathymetry)
- Quality-controlled standardized data
- AWS Open Data for large-scale analysis

**USGS Alaska Benefits:**
- Public domain licensing
- Government-verified quality standards
- Long-term data series (1980s-present)
- Excellent metadata documentation
- Standardized telemetry formats
- Species include polar bears, walruses, seabirds, caribou

**Combined Use Cases:**
- Marine ecosystem studies (OBIS)
- Arctic/alaska wildlife research (USGS)
- Climate change monitoring (long-term series)
- Government compliance/research
- Conservation planning

**Access Considerations:**
- OBIS: Highly accessible via multiple methods
- USGS: Direct download with standardized formats
- Both provide environmental context data

---

## Additional Recommendations by Use Case

| Use Case | Primary Source | Secondary Source |
|----------|---------------|------------------|
| **Bird migration** | eBird | Movebank |
| **Marine species** | OBIS | OBIS-SEAMAP |
| **Small animals** | Motus | iNaturalist |
| **Real-time tracking** | EarthRanger | Movebank |
| **US Federal data** | USGS | Data.gov |
| **Community science** | iNaturalist | eBird |
| **Conservation ops** | EarthRanger | Wildlife Insights |
| **Global coverage** | Movebank + GBIF | iNaturalist |

---

## Data Access Notes

### API Availability
Most sources provide REST APIs for programmatic access. Movebank, GBIF, OBIS, and iNaturalist have well-documented APIs.

### Bulk Downloads
- iNaturalist: AWS S3 bucket (inaturalist-open-data)
- OBIS: AWS Open Data (GeoParquet)
- GBIF: Bulk download options
- USGS: Direct download from ScienceBase

### Licensing Considerations
- USGS, Data.gov: Public Domain (US Government)
- Most scientific databases: CC-BY or CC0
- Some datasets: Restricted access (contact data owner)
- Always verify license for intended use

### Data Quality
- Government sources (USGS, USFWS): High documentation standards
- Published datasets: Peer-reviewed, DOI-cited
- Citizen science: Variable, may require filtering
- Community platforms: Consider research-grade subsets

---

## References & Further Reading

- Movebank: https://www.movebank.org
- GBIF: https://www.gbif.org
- iNaturalist: https://www.inaturalist.org
- eBird: https://ebird.org
- OBIS: https://obis.org
- USGS Wildlife Tracking: https://www.usgs.gov/centers/alaska-science-center/science/usgs-alaska-science-center-wildlife-tracking-data-collection
- EarthRanger: https://www.earthranger.com
- Seabird Tracking Database: https://www.seabirdtracking.org
- Motus: https://motus.org
- Data.gov: https://catalog.data.gov
- WildlifeData.org: https://wildlifedata.org

---

*Document prepared: March 2026*
