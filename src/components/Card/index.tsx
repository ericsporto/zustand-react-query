import { Repo } from '../../queries/repo/types';
import './styles.css';

type CardProps = {
  addToFavorites: (id: number) => void;
  removeFromFavorites: (id: number) => void;
  repo: Repo;
  isFavorite: boolean;
};

export default function Card({ repo, addToFavorites, removeFromFavorites, isFavorite }: CardProps) {
  function handleToggleFavorite() {
    if (isFavorite) {
      return  removeFromFavorites(repo.id)
    }
    return addToFavorites(repo.id)
  }

  return (
    <div className="card">
      <h2>{repo.name}</h2>

      <div className="card-buttons">
        <button onClick={handleToggleFavorite}>
            {!isFavorite ? 'Add to Favorites' : 'Remove from Favorites'}
        </button>
      </div>
    </div>
  );
}
