# Troop 62 Calendar Parser

GoDaddy doesn't add local timezone information correctly to scouting.org's .ical
files. This is a web proxy that fetches the ical file, adds the Denver timezone,
and passes it back along to GoDaddy.

## Dev

Uses Express, Supertest, and Vitest.

```
npm install
npm test
npm dev
```
