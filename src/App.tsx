import { useCallback } from 'react';
import './App.css';
import Card from './components/Card';
import useFetchRepos from './queries/repo';
import useFavoriteRepoStore from './store/useFavoriteRepos';

function App() {
  const { data } = useFetchRepos('ericsporto');

  const favoriteRepoIds = useFavoriteRepoStore(
    (state) => state.favoriteRepoIds
  );
  const addToFavorite = useFavoriteRepoStore((state) => state.addToFavorite);
  const removeFromFavorite = useFavoriteRepoStore(
    (state) => state.removeFromFavorite
  );

  const handleAddToFavorites = useCallback((repoId: number) => {
    addToFavorite(repoId);
  }, []);
  const handleRemoveFromFavorites = useCallback((repoId: number) => {
    removeFromFavorite(repoId);
  }, []);

  return (
    <div className="App">
      {data?.map((repo) => (
        <Card
          key={repo.id}
          repo={repo}
          addToFavorites={handleAddToFavorites}
          removeFromFavorites={handleRemoveFromFavorites}
          isFavorite={favoriteRepoIds.includes(repo.id)}
        />
      ))}
    </div>
  );
}

export default App;
