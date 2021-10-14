-- Database has not been created, however the below is the proposed Schema

CREATE DATABASE team_profiles;
\c team_profiles

CREATE TABLE profiles(
  id SERIAL PRIMARY KEY,
  first_name TEXT,
  surname TEXT,
  position TEXT,
  department TEXT
  image TEXT,
  location TEXT,
  lat DECIMAL,
  lng DECIMAL,
  date_created DATE,
  date_updated DATE
);

