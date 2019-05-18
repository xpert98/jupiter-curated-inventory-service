# Jupiter Curated Inventory Service
The Jupiter Curated Inventory Service provides data management functionality for "gold" application inventory records.  These records have references to metadata that is also managed via the service.  

The Curated Inventory Service provides CRUD operations and uses PostgreSQL for data storage.

## Prerequisites
* Node.js 11.9.0 or greater
* PostgreSQL 10 or greater

## Database Setup
SQL commands necessary to set up tables in the schema are included in db.sql.  The script assumes the database user name to be "jupiter" so change that to suit the authentication set up for your database.

## Running the Curated Inventory Service
First, set environment variables or create a .env file (in the root directory alongside server.js) for the following:

* PG_HOST
* PG_SCHEMA
* PG_USERNAME
* PG_PASSWORD
* JWT_SECRET

For example:

```
PG_HOST=localhost

PG_SCHEMA=jupiter

PG_USERNAME=postgresqluser

PG_PASSWORD=Password123!

JWT_SECRET='e20TfeDLaPSSDhspOMc9sJBGOinDL4J/T37g+ppdKHBuCUL0+SzjubbAzBvrIiQHbvQacaeOS4D52vLclJQmTQ=='
```

Once everything is in place, simply start the server:

```
node server.js
```
