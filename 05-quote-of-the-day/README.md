# P05 — Quote of the Day

## What I built
First full-stack app. Django stores quotes in SQLite, RN fetches and displays a random one.

## Tech used
- React Native + Expo (Expo Router)
- Django + Django REST Framework
- SQLite
- fetch API + useEffect

## Architecture
iPhone → GET /api/quotes/random/ → Django → SQLite → JSON → RN renders

## What I learned
- Django models + migrations
- ModelSerializer
- ORM: Quote.objects.all()
- useEffect for data fetching on mount
- async/await fetch pattern
- try/catch/finally error handling
- ActivityIndicator for loading states
- Expo Router file-based navigation structure
