# Jupiter Curated Inventory Service
The Jupiter Curated Inventory Service provides data management functionality for "gold" application inventory records.  These records have references to metadata that is also managed via the service.  

The Curated Inventory Service provides CRUD operations and uses PostgreSQL for data storage.

## Deployment

### Production Environment

Docker Swarm is recommended for production deployment.  

Additional Docker Swarm deployment resources here: https://github.com/xpert98/jupiter-docker

#### Database Setup
SQL commands necessary to set up tables in the schema are included in db.sql.
Seed data is included in db_data_seed.sql.
1. Log into Postgres and create a new database
1. Execute the statements from db.sql to create the schema
1. Execute the statements from db_data_seed.sql to seed initial data into the database

### Development Environment
#### Prerequisites
* Node.js 11.9.0 or greater
* PostgreSQL 10 or greater
  * A database and user account should be created prior to running the Curated Inventory Service

#### Database Setup
SQL commands necessary to set up tables in the schema are included in db.sql.
Seed data is included in db_data_seed.sql.
1. Log into Postgres and create a new database
1. Execute the statements from db.sql to create the schema
1. Execute the statements from db_data_seed.sql to seed initial data into the database

#### Running the Curated Inventory Service
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
