import { CORE_CONCEPTS } from './data';

import Header from './components/Header';
import CoreConcept from './components/CoreConcept';





function App() {
  return (
    <div>
      <Header />
      <main>

        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept title={CORE_CONCEPTS[0].title} descriptio={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image} />
            <CoreConcept title={CORE_CONCEPTS[1].title} descriptio={CORE_CONCEPTS[1].description} image={CORE_CONCEPTS[1].image} />

            <CoreConcept title={CORE_CONCEPTS[2].title} descriptio={CORE_CONCEPTS[2].description} image={CORE_CONCEPTS[2].image} />
            <CoreConcept title={CORE_CONCEPTS[3].title} descriptio={CORE_CONCEPTS[3].description} image={CORE_CONCEPTS[3].image} />

          </ul>
        </section>
      </main>

    </div>

  )
}

export default App;
