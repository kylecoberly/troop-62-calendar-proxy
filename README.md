# Troop 62 Calendar Proxy

The Scouting API returns event .ics files in Zulu time, which is a distinct time
zone. This service fetches the .ics file from api.scouting.org, strips Zulu time
from the events, and adds the US/Denver timezone to each event. You can point
GoDaddy to this service to get the Troop 62 calendar in the correct timezone.

NOTE: The .ical format requires CRLF line endings, which are usually stripped by
Git. The repo is configured to preserve line-endings, but be careful manually
editing .ics and text files!

Currently deployed to fly.io at
[https://troop-62-calendar-proxy-wandering-dream-8989.fly.dev](https://troop-62-calendar-proxy-wandering-dream-8989.fly.dev)

## Dev

Uses Express, Supertest, and Vitest.

```
npm install
npm test
npm dev
```
