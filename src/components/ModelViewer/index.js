import React, { Suspense, lazy } from 'react';

import { useMemoryStatus } from 'react-adaptive-hooks/memory';

const Model = lazy(() => import('./Model'));
const Cat = lazy(() => import('../Content/Cat'))

const DEVICE_MEMORY_LIMIT = 4;

const ModelViewer = () => {
  const { deviceMemory } = useMemoryStatus();

  const overLoaded = deviceMemory < DEVICE_MEMORY_LIMIT;

  return (
    <div>
      <p>overLoaded: {overLoaded ? 'true' : 'false'}</p>
      <Suspense fallback={ <div>Loading...</div> }>
        { overLoaded ? <Cat /> : <Model /> }
      </Suspense>
    </div>
  )
}

export default ModelViewer