# TVMaze API Integration & Architecture

MovieVerse uses the public TVMaze REST API to discover, query, and retrieve TV shows and movie data without requiring authentication keys.

## Base URL
```
https://api.tvmaze.com
```

## Primary Endpoints Used

### 1. Trending & Featured Shows (Home Feed)
- **Endpoint**: `GET /search/shows?q=all`
- **Consumer**: `src/screens/HomeScreen.tsx`
- **Purpose**: Fetches the initial collection of curated shows displayed on the home screen carousel and grid.
- **Response Format**: Array of `SearchResult` objects:
  ```json
  [
    {
      "score": 0.908,
      "show": {
        "id": 1,
        "url": "https://www.tvmaze.com/shows/1/under-the-dome",
        "name": "Under the Dome",
        "type": "Scripted",
        "language": "English",
        "genres": ["Drama", "Science-Fiction", "Thriller"],
        "status": "Ended",
        "runtime": 60,
        "averageRuntime": 60,
        "premiered": "2013-06-24",
        "ended": "2015-09-10",
        "officialSite": "http://www.cbs.com/shows/under-the-dome/",
        "schedule": {
          "time": "22:00",
          "days": ["Thursday"]
        },
        "rating": {
          "average": 6.5
        },
        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg"
        },
        "summary": "<p><b>Under the Dome</b> is the story of a small town...</p>"
      }
    }
  ]
  ```

### 2. Search Shows Query
- **Endpoint**: `GET /search/shows?q={searchTerm}`
- **Consumer**: `src/screens/SearchScreen.tsx`
- **Purpose**: Real-time multi-keyword search with dynamic results grid.

## Data Models (`src/types/index.ts`)

- **`Show`**: Core entity representing a title (id, name, genres, status, schedule, rating, image, summary).
- **`SearchResult`**: Wrapper object with search relevance score and corresponding `Show`.
- **`FavoritesContext`**: Manages offline bookmarks using `@react-native-async-storage/async-storage`.
