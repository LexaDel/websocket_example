CREATE TABLE if not exists users
(
    id text NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    firstName text,
    secondName text,
    avatar bytea,
    role text,
    CONSTRAINT users_pkey PRIMARY KEY (id)
);