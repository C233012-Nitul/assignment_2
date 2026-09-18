import { useState, useEffect, useCallback, useRef } from 'react';

const ALL_SHOWS_URL = 'https://api.tvmaze.com/shows';
const SEARCH_URL = 'https://api.tvmaze.com/search/shows?q=';

function useMovies() {
  const [shows, setShows] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searching, setSearching] = useState(false);
  const debounceRef = useRef(null);

  const fetchAllShows = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(ALL_SHOWS_URL);
      if (!res.ok) throw new Error('Failed to load shows');
      const data = await res.json();
      setShows(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const searchShows = useCallback(async (q) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${SEARCH_URL}${encodeURIComponent(q)}`);
      if (!res.ok) throw new Error('Search failed');
      const data = await res.json();
      setShows(data.map((item) => item.show));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!query.trim()) {
      fetchAllShows();
      return;
    }
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      setSearching(true);
      searchShows(query).finally(() => setSearching(false));
    }, 400);
    return () => clearTimeout(debounceRef.current);
  }, [query, fetchAllShows, searchShows]);

  return { shows, query, setQuery, loading, error, searching, reload: fetchAllShows };
}

export default useMovies;