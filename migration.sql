DROP TABLE IF EXISTS game_library;
DROP TABLE IF EXISTS library;
DROP TABLE IF EXISTS game;

CREATE TABLE library (
  id SERIAL PRIMARY KEY,
  name TEXT
);

CREATE TABLE game (
  id SERIAL PRIMARY KEY,
  genre TEXT,
  title TEXT,
  rating TEXT
);

CREATE TABLE game_library (
  library_id INTEGER REFERENCES library(id),
  game_id INTEGER REFERENCES game(id)
);

INSERT INTO library (name) VALUES ('Danny library');
INSERT INTO library (name) VALUES ('Kevin library');
INSERT INTO library (name) VALUES ('Ilsa library');

INSERT INTO game (genre, title, rating) VALUES ('FPS', 'Call of Duty 235', 'M');
INSERT INTO game (genre, title, rating) VALUES ('RPG', 'Final Fantasy IIV', 'T');

INSERT INTO game_library (library_id, game_id) VALUES (1, 1);
INSERT INTO game_library (library_id, game_id) VALUES (2, 1);
INSERT INTO game_library (library_id, game_id) VALUES (2, 2);
INSERT INTO game_library (library_id, game_id) VALUES (3, 2);
