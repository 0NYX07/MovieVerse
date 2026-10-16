import React, { useContext } from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { FavoritesContext, FavoritesProvider } from '../src/context/FavoritesContext';
import { Show } from '../src/types';

const mockShow: Show = {
  id: 101,
  url: 'https://www.tvmaze.com/shows/101/stranger-things',
  name: 'Stranger Things',
  type: 'Scripted',
  language: 'English',
  genres: ['Drama', 'Fantasy', 'Horror'],
  status: 'Running',
  runtime: 50,
  averageRuntime: 50,
  premiered: '2016-07-15',
  officialSite: 'https://www.netflix.com/title/80057281',
  schedule: {
    time: '',
    days: ['Thursday'],
  },
  rating: {
    average: 8.6,
  },
  image: {
    medium: 'https://static.tvmaze.com/medium.jpg',
    original: 'https://static.tvmaze.com/original.jpg',
  },
  summary: '<p>When a young boy vanishes, a small town uncovers a mystery.</p>',
};

describe('FavoritesContext', () => {
  it('initializes with empty favorites list', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <FavoritesProvider>{children}</FavoritesProvider>
    );
    const { result } = renderHook(() => useContext(FavoritesContext), { wrapper });

    expect(result.current.favorites).toEqual([]);
    expect(result.current.isFavorite(mockShow.id)).toBe(false);
  });
});
