SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';

SET default_tablespace = '';

SET default_with_oids = false;

CREATE TABLE public.application (
    id integer NOT NULL,
    commonname character varying(255) NOT NULL,
    createddate date NOT NULL,
    primaryownerid integer,
    businessunitid integer,
    primarylanguageid integer,
    aliases text,
    description text,
    coderepourl text,
    binaryrepourl text,
    secondarylanguages text,
    typeid integer,
    secondaryowners text,
    exposureid integer,
    numusers integer,
    dataclassificationid integer,
    deploymentenvironmentid integer,
    deploymentenvironmenturl text,
    risklevelid integer,
    regulations text,
    chatchannel character varying(100),
    agilescrumboardurl text,
    buildserverurl text,
    age numeric,
    lifecyclestageid integer
);

CREATE SEQUENCE public.application_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER SEQUENCE public.application_id_seq OWNED BY public.application.id;

CREATE TABLE public.businessunit (
    id integer NOT NULL,
    businessunitname character varying(200) NOT NULL
);

CREATE SEQUENCE public.businessunit_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER SEQUENCE public.businessunit_id_seq OWNED BY public.businessunit.id;

CREATE TABLE public.dataclassification (
    id integer NOT NULL,
    dataclassificationname character varying(55) NOT NULL
);

CREATE SEQUENCE public.dataclassification_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER SEQUENCE public.dataclassification_id_seq OWNED BY public.dataclassification.id;

CREATE TABLE public.deploymentenvironment (
    id integer NOT NULL,
    deploymentenvironmentname character varying(55) NOT NULL
);

CREATE SEQUENCE public.deploymentenvironment_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER SEQUENCE public.deploymentenvironment_id_seq OWNED BY public.deploymentenvironment.id;

CREATE TABLE public.exposure (
    id integer NOT NULL,
    exposurename character varying(100) NOT NULL
);

CREATE SEQUENCE public.exposure_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER SEQUENCE public.exposure_id_seq OWNED BY public.exposure.id;

CREATE TABLE public.language (
    id integer NOT NULL,
    languagename character varying(100) NOT NULL
);

CREATE SEQUENCE public.language_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER SEQUENCE public.language_id_seq OWNED BY public.language.id;

CREATE TABLE public.lifecyclestage (
    id integer NOT NULL,
    lifecyclestagename character varying(100) NOT NULL
);

CREATE SEQUENCE public.lifecyclestage_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER SEQUENCE public.lifecyclestage_id_seq OWNED BY public.lifecyclestage.id;

CREATE TABLE public.owner (
    id integer NOT NULL,
    ownername text NOT NULL
);

CREATE SEQUENCE public.owner_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER SEQUENCE public.owner_id_seq OWNED BY public.owner.id;

CREATE TABLE public.risklevel (
    id integer NOT NULL,
    risklevelname character varying(100) NOT NULL
);

CREATE SEQUENCE public.risklevel_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER SEQUENCE public.risklevel_id_seq OWNED BY public.risklevel.id;

CREATE TABLE public.type (
    id integer NOT NULL,
    typename character varying(100) NOT NULL
);

CREATE SEQUENCE public.type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER SEQUENCE public.type_id_seq OWNED BY public.type.id;

ALTER TABLE ONLY public.application ALTER COLUMN id SET DEFAULT nextval('public.application_id_seq'::regclass);

ALTER TABLE ONLY public.businessunit ALTER COLUMN id SET DEFAULT nextval('public.businessunit_id_seq'::regclass);

ALTER TABLE ONLY public.dataclassification ALTER COLUMN id SET DEFAULT nextval('public.dataclassification_id_seq'::regclass);

ALTER TABLE ONLY public.deploymentenvironment ALTER COLUMN id SET DEFAULT nextval('public.deploymentenvironment_id_seq'::regclass);

ALTER TABLE ONLY public.exposure ALTER COLUMN id SET DEFAULT nextval('public.exposure_id_seq'::regclass);

ALTER TABLE ONLY public.language ALTER COLUMN id SET DEFAULT nextval('public.language_id_seq'::regclass);

ALTER TABLE ONLY public.lifecyclestage ALTER COLUMN id SET DEFAULT nextval('public.lifecyclestage_id_seq'::regclass);

ALTER TABLE ONLY public.owner ALTER COLUMN id SET DEFAULT nextval('public.owner_id_seq'::regclass);

ALTER TABLE ONLY public.risklevel ALTER COLUMN id SET DEFAULT nextval('public.risklevel_id_seq'::regclass);

ALTER TABLE ONLY public.type ALTER COLUMN id SET DEFAULT nextval('public.type_id_seq'::regclass);

SELECT pg_catalog.setval('public.application_id_seq', 1, true);

SELECT pg_catalog.setval('public.businessunit_id_seq', 1, true);

SELECT pg_catalog.setval('public.dataclassification_id_seq', 1, true);

SELECT pg_catalog.setval('public.deploymentenvironment_id_seq', 1, true);

SELECT pg_catalog.setval('public.exposure_id_seq', 1, true);

SELECT pg_catalog.setval('public.language_id_seq', 1, true);

SELECT pg_catalog.setval('public.lifecyclestage_id_seq', 1, true);

SELECT pg_catalog.setval('public.owner_id_seq', 1, true);

SELECT pg_catalog.setval('public.risklevel_id_seq', 1, true);

SELECT pg_catalog.setval('public.type_id_seq', 1, true);

ALTER TABLE ONLY public.application
    ADD CONSTRAINT application_pkey PRIMARY KEY (id);

ALTER TABLE ONLY public.businessunit
    ADD CONSTRAINT businessunit_pkey PRIMARY KEY (id);

ALTER TABLE ONLY public.dataclassification
    ADD CONSTRAINT dataclassification_pkey PRIMARY KEY (id);

ALTER TABLE ONLY public.deploymentenvironment
    ADD CONSTRAINT deploymentenvironment_pkey PRIMARY KEY (id);

ALTER TABLE ONLY public.exposure
    ADD CONSTRAINT exposure_pkey PRIMARY KEY (id);

ALTER TABLE ONLY public.language
    ADD CONSTRAINT language_pkey PRIMARY KEY (id);

ALTER TABLE ONLY public.lifecyclestage
    ADD CONSTRAINT lifecyclestage_pkey PRIMARY KEY (id);

ALTER TABLE ONLY public.owner
    ADD CONSTRAINT owner_pkey PRIMARY KEY (id);

ALTER TABLE ONLY public.risklevel
    ADD CONSTRAINT risklevel_pkey PRIMARY KEY (id);

ALTER TABLE ONLY public.type
    ADD CONSTRAINT type_pkey PRIMARY KEY (id);