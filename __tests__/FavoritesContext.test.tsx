import React from 'react';
import { describe, it, expect } from '@jest/globals';
import renderer from 'react-test-renderer';
import { FavoritesProvider, FavoritesContext } from '../src/context/FavoritesContext';
import { Show } from '../src/types';

const mockShow: Show = {
  id: 101,
  name: 'Stranger Things',
  genres: ['Drama', 'Fantasy', 'Horror'],
  status: 'Running',
  rating: {
    average: 8.6,
  },
  image: {
    medium: 'https://static.tvmaze.com/medium.jpg',
    original: 'https://static.tvmaze.com/original.jpg',
  },
  summary: '<p>When a young boy vanishes, a small town uncovers a mystery.</p>',
  premiered: '2016-07-15',
  language: 'English',
  runtime: 50,
  network: {
    name: 'Netflix',
  },
};

describe('FavoritesContext', () => {
  it('renders FavoritesProvider with children', () => {
    let contextValue: any;
    const TestConsumer = () => {
      const value = React.useContext(FavoritesContext);
      contextValue = value;
      return null;
    };

    renderer.create(
      <FavoritesProvider>
        <TestConsumer />
      </FavoritesProvider>
    );

    expect(contextValue.favorites).toEqual([]);
    expect(typeof contextValue.addToFavorites).toBe('function');
    expect(typeof contextValue.removeFromFavorites).toBe('function');
    expect(typeof contextValue.isFavorite).toBe('function');
    expect(contextValue.isFavorite(mockShow.id)).toBe(false);
  });
});
