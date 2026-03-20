import { Animal, Observation, Location } from '@terra-ping/universal-model';

function App() {
  const testAnimal: Animal = {
    id: 'test-1',
    species: 'Panthera leo',
    commonName: 'Lion',
    tags: ['africa', 'predator'],
    metadata: {},
  };

  const testLocation: Location = {
    latitude: -1.2921,
    longitude: 36.8219,
    source: 'gps',
    metadata: {},
  };

  const testObservation: Observation = {
    id: 'obs-1',
    animalId: testAnimal.id,
    animal: testAnimal,
    location: testLocation,
    timestamp: new Date(),
    source: 'test',
    metadata: {},
  };

  return (
    <div>
      <h1>TerraPing</h1>
      <p>Universal Animal Tracker</p>
      <pre>{JSON.stringify(testObservation, null, 2)}</pre>
    </div>
  );
}

export default App;
