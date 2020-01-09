import React, { Suspense, lazy } from 'react';
import { useNetworkStatus } from 'react-adaptive-hooks/network';
import { useSaveData } from 'react-adaptive-hooks/save-data';
import { useHardwareConcurrency } from 'react-adaptive-hooks/hardware-concurrency';
import { useMemoryStatus } from 'react-adaptive-hooks/memory';

const Full = lazy(() => import('./Full'));
const Light = lazy(() => import('./Light'));

const CatMeme = () => {
  const { effectiveConnectionType } = useNetworkStatus(); // slow-2g, 2g, 3g, 4g
  const { saveData } = useSaveData();
  const { numberOfLogicalProcessors } = useHardwareConcurrency();
  const memoryStatus = useMemoryStatus();

  return (
    <div>
      <p>effectiveConnectionType: {effectiveConnectionType}</p>
      <p>saveData: {saveData ? 'true' : 'false'}</p>
      <p>numberOfLogicalProcessors: {numberOfLogicalProcessors}</p>
      <p>memoryStatus: {JSON.stringify(memoryStatus)}</p>
      <Suspense fallback={<div>Loading...</div>}>
        { effectiveConnectionType === '4g' && !saveData ? <Full /> : <Light /> }
      </Suspense>
    </div>
  )
}

export default CatMeme