import { useState, useEffect } from 'react';
import storageService from '../services/storageService';

function useLocalStorage(key, initialValue = null) {
  const [value, setValue] = useState(() => {
    const saved = storageService.get(key);
    return saved !== null ? saved : initialValue;
  });

  useEffect(() => {
    storageService.set(key, value);
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
