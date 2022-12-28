CREATE TABLE if not exists users
(
    id text NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    firstName text,
    secondName text,
    avatar bytea,
    CONSTRAINT users_pkey PRIMARY KEY (id)
);