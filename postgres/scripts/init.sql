CREATE TABLE if not exists users
(
    id SERIAL,
    name text,
    second_name text,
    CONSTRAINT users_pkey PRIMARY KEY (id)
);