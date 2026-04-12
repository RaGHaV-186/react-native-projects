# react-native-projects — Learning Context

## Repo structure
~/react-native-projects/
├── 01-hello-world-rn/
├── 02-counter-app/
├── 03-todo-list/
├── 04-hello-api/
├── 05-quote-of-the-day/
│   ├── backend/      ← Django
│   └── frontend/     ← React Native (Expo Router)
└── CLAUDE.md  ← you are here

## Stack
- React Native + Expo (Expo Router — file-based navigation)
- Python 3 + Django + Django REST Framework
- PostgreSQL (from P9 onwards)
- Redis (from P21 onwards)
- JWT auth with djangorestframework-simplejwt (from P9)
- Django Channels + WebSockets (from P18)
- Git monorepo on GitHub: github.com/RaGHaV-186/react-native-projects

## Progress tracker
- [x] P01 — Hello World RN (View, Text, Image, StyleSheet)
- [x] P02 — Counter App (useState, TouchableOpacity)
- [x] P03 — To-Do List (FlatList, array state patterns, TextInput)
- [x] P04 — Django Hello API (Django setup, DRF, @api_view, URL routing, URL params)
- [x] P05 — Quote of the Day (first full-stack, Django model, serializer, ORM, useEffect, fetch)
- [ ] P06 — BMI Calculator
- [ ] P07 — Note Saver (full CRUD)
- [ ] P08 — Multi-screen Navigation
- [ ] P09 — User Auth (JWT)
- [ ] P10 — Personal Diary
- [ ] P11 — Profile Editor
- [ ] P12 — Habit Tracker
- [ ] P13 — Expense Tracker
- [ ] P14 — Recipe Book
- [ ] P15 — Movie Watchlist
- [ ] P16 — Push Notifications
- [ ] P17 — Location Tracker
- [ ] P18 — Live Chat
- [ ] P19 — Social Feed
- [ ] P20 — Like & Comment
- [ ] P21 — Group Chat Rooms
- [ ] P22 — Collaborative To-Do
- [ ] P23 — Photo Gallery
- [ ] P24 — Event Booking
- [ ] P25 — Live Poll/Quiz
- [ ] P26 — Notifications Center
- [ ] P27 — E-commerce Store
- [ ] P28 — Food Delivery App
- [ ] P29 — Job Board
- [ ] P30 — Telemedicine App
- [ ] P31 — LMS
- [ ] P32 — Airbnb Clone
- [ ] P33 — Fitness Coaching
- [ ] P34 — Social Marketplace
- [ ] P35 — Production Deploy

## Concepts learned so far

### React Native
- Core components: View, Text, Image, TextInput, TouchableOpacity, FlatList
- useState — single values, arrays, objects
- StyleSheet, flexbox layout
- Controlled inputs
- Array state patterns: spread (add), map (update), filter (delete)
- Conditional styling with style arrays
- useEffect — running code on mount with empty dependency array []
- async/await fetch pattern — calling REST APIs from RN
- try/catch/finally — error handling for network calls
- ActivityIndicator — built-in loading spinner
- Expo Router — file-based routing, app/ folder structure
- Conditional rendering with ternary (loading ? spinner : content)

### Django + DRF
- Project vs app distinction (django-admin startproject vs startapp)
- INSTALLED_APPS — registering apps and third-party packages
- URL routing: root urls.py → app urls.py → view function
- @api_view decorator — handling HTTP methods, returning JSON
- DRF Response — auto-serializes Python dicts to JSON
- URL parameters: <str:name>, <int:id>
- Query params: request.query_params.get('key', 'default')
- manage.py commands: makemigrations, migrate, runserver, createsuperuser
- Virtual environments with venv
- Django models — TextField, CharField, __str__
- Migrations — makemigrations generates SQL, migrate runs it
- Django Admin — registering models, adding data via UI
- ORM basics — Quote.objects.all(), random.choice()
- ModelSerializer — translates Python model instances to JSON
- runserver 0.0.0.0:8000 — expose server to local network (phone access)

### Git
- git init, add, commit, push
- Single monorepo structure
- feat(0X): commit convention
- rm -rf .git after create-expo-app
- .gitignore — must exclude venv/ to avoid committing thousands of files
- git rm -r --cached — stop tracking files already committed

## Git commit convention
feat(0X): short description of what was built

## Environment
- OS: macOS
- Editor: VS Code
- Phone: iPhone with Expo Go
- Node: v18+
- Python: 3.x (Anaconda base env)

## Important notes
- Always rm -rf .git inside new Expo projects before adding to monorepo
- Django projects live in their own numbered folder inside this repo
- Each project folder has its own README.md documenting what was learned
- Virtual environment (venv/) lives inside the Django project folder, never committed
- Always add .gitignore BEFORE first commit to avoid committing venv/
- Expo Router is the default in new Expo projects — main screen is app/(tabs)/index.tsx not App.js
- To expose Django to phone on same WiFi: runserver 0.0.0.0:8000
- Phone cannot use localhost — always use Mac's local IP (ipconfig getifaddr en0)
- From P9: switch from SQLite to PostgreSQL
- From P18: add Redis + Django Channels
- System design moment in every backend project — before coding (design) + after coding (what breaks at 1M users)

## Database learning path
- P04–P08: Django models, migrations, SQLite, basic ORM
- P09–P17: Relationships (FK, M2M, O2O), aggregations, indexes
- P18–P26: Query optimization, Redis cache, EXPLAIN ANALYZE
- P27–P35: Transactions, select_for_update, connection pooling