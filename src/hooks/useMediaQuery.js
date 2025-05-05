import { useState, useEffect } from 'react';

// Usage: const isMobile = useMediaQuery('(max-width: 600px)');
function useMediaQuery(query) {
  const getMatches = (q) => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(q).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState(getMatches(query));

  useEffect(() => {
    const matchMedia = window.matchMedia(query);
    const handleChange = () => setMatches(matchMedia.matches);
    matchMedia.addEventListener('change', handleChange);
    setMatches(matchMedia.matches);
    return () => matchMedia.removeEventListener('change', handleChange);
  }, [query]);

  return matches;
}

export default useMediaQuery;
