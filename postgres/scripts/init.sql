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



CREATE TABLE if not exists worktime
(
    id text NOT NULL,
    userId text NOT NULL,
    startTime timestamp NOT NULL,
    endTime timestamp NOT NULL,
    interval int NOT NULL,
    CONSTRAINT worktime_pkey PRIMARY KEY (id),
    CONSTRAINT fk_users
      FOREIGN KEY(userId) 
	  REFERENCES users(id)
);