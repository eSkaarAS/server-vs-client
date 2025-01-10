# Start the app

## Steg 0 - Info

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## Steg 1

Lag en .env fil basert på .env.example og passordet vil bli laget i steg 2.

## Steg 2

Åpne Docker og kjør følgende kommando:

```bash
 ./start-database.sh
```

Du bør nå ha en database kjørende på localhost:5432 og passordet bør ha blitt skrevet i .env filen din.

## Steg 3

Kjør følgende kommando for å oppdatere databasen:

```bash
npx prisma db push
```

## Steg 4

Innstaller avhengigheter:

```bash
pnpm install
```

pnpm install er konfigurert til å generere typen til databasen automatisk.
Se postinstall scriptet i package.json for mer informasjon.

## Steg 5

Kjør opp applikasjonen på 3000 porten:

```bash
pnpm dev
```
