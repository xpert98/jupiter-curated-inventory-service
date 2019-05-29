--
-- PostgreSQL database dump
--

-- Dumped from database version 10.7
-- Dumped by pg_dump version 10.7

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: application; Type: TABLE; Schema: public; Owner: jupiter
--

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


ALTER TABLE public.application OWNER TO jupiter;

--
-- Name: application_id_seq; Type: SEQUENCE; Schema: public; Owner: jupiter
--

CREATE SEQUENCE public.application_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.application_id_seq OWNER TO jupiter;

--
-- Name: application_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jupiter
--

ALTER SEQUENCE public.application_id_seq OWNED BY public.application.id;


--
-- Name: businessunit; Type: TABLE; Schema: public; Owner: jupiter
--

CREATE TABLE public.businessunit (
    id integer NOT NULL,
    businessunitname character varying(200) NOT NULL
);


ALTER TABLE public.businessunit OWNER TO jupiter;

--
-- Name: businessunit_id_seq; Type: SEQUENCE; Schema: public; Owner: jupiter
--

CREATE SEQUENCE public.businessunit_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.businessunit_id_seq OWNER TO jupiter;

--
-- Name: businessunit_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jupiter
--

ALTER SEQUENCE public.businessunit_id_seq OWNED BY public.businessunit.id;


--
-- Name: dataclassification; Type: TABLE; Schema: public; Owner: jupiter
--

CREATE TABLE public.dataclassification (
    id integer NOT NULL,
    dataclassificationname character varying(55) NOT NULL
);


ALTER TABLE public.dataclassification OWNER TO jupiter;

--
-- Name: dataclassification_id_seq; Type: SEQUENCE; Schema: public; Owner: jupiter
--

CREATE SEQUENCE public.dataclassification_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.dataclassification_id_seq OWNER TO jupiter;

--
-- Name: dataclassification_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jupiter
--

ALTER SEQUENCE public.dataclassification_id_seq OWNED BY public.dataclassification.id;


--
-- Name: deploymentenvironment; Type: TABLE; Schema: public; Owner: jupiter
--

CREATE TABLE public.deploymentenvironment (
    id integer NOT NULL,
    deploymentenvironmentname character varying(55) NOT NULL
);


ALTER TABLE public.deploymentenvironment OWNER TO jupiter;

--
-- Name: deploymentenvironment_id_seq; Type: SEQUENCE; Schema: public; Owner: jupiter
--

CREATE SEQUENCE public.deploymentenvironment_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.deploymentenvironment_id_seq OWNER TO jupiter;

--
-- Name: deploymentenvironment_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jupiter
--

ALTER SEQUENCE public.deploymentenvironment_id_seq OWNED BY public.deploymentenvironment.id;


--
-- Name: exposure; Type: TABLE; Schema: public; Owner: jupiter
--

CREATE TABLE public.exposure (
    id integer NOT NULL,
    exposurename character varying(100) NOT NULL
);


ALTER TABLE public.exposure OWNER TO jupiter;

--
-- Name: exposure_id_seq; Type: SEQUENCE; Schema: public; Owner: jupiter
--

CREATE SEQUENCE public.exposure_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.exposure_id_seq OWNER TO jupiter;

--
-- Name: exposure_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jupiter
--

ALTER SEQUENCE public.exposure_id_seq OWNED BY public.exposure.id;


--
-- Name: language; Type: TABLE; Schema: public; Owner: jupiter
--

CREATE TABLE public.language (
    id integer NOT NULL,
    languagename character varying(100) NOT NULL
);


ALTER TABLE public.language OWNER TO jupiter;

--
-- Name: language_id_seq; Type: SEQUENCE; Schema: public; Owner: jupiter
--

CREATE SEQUENCE public.language_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.language_id_seq OWNER TO jupiter;

--
-- Name: language_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jupiter
--

ALTER SEQUENCE public.language_id_seq OWNED BY public.language.id;


--
-- Name: lifecyclestage; Type: TABLE; Schema: public; Owner: jupiter
--

CREATE TABLE public.lifecyclestage (
    id integer NOT NULL,
    lifecyclestagename character varying(100) NOT NULL
);


ALTER TABLE public.lifecyclestage OWNER TO jupiter;

--
-- Name: lifecyclestage_id_seq; Type: SEQUENCE; Schema: public; Owner: jupiter
--

CREATE SEQUENCE public.lifecyclestage_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.lifecyclestage_id_seq OWNER TO jupiter;

--
-- Name: lifecyclestage_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jupiter
--

ALTER SEQUENCE public.lifecyclestage_id_seq OWNED BY public.lifecyclestage.id;


--
-- Name: owner; Type: TABLE; Schema: public; Owner: jupiter
--

CREATE TABLE public.owner (
    id integer NOT NULL,
    ownername text NOT NULL
);


ALTER TABLE public.owner OWNER TO jupiter;

--
-- Name: owner_id_seq; Type: SEQUENCE; Schema: public; Owner: jupiter
--

CREATE SEQUENCE public.owner_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.owner_id_seq OWNER TO jupiter;

--
-- Name: owner_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jupiter
--

ALTER SEQUENCE public.owner_id_seq OWNED BY public.owner.id;


--
-- Name: risklevel; Type: TABLE; Schema: public; Owner: jupiter
--

CREATE TABLE public.risklevel (
    id integer NOT NULL,
    risklevelname character varying(100) NOT NULL
);


ALTER TABLE public.risklevel OWNER TO jupiter;

--
-- Name: risklevel_id_seq; Type: SEQUENCE; Schema: public; Owner: jupiter
--

CREATE SEQUENCE public.risklevel_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.risklevel_id_seq OWNER TO jupiter;

--
-- Name: risklevel_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jupiter
--

ALTER SEQUENCE public.risklevel_id_seq OWNED BY public.risklevel.id;


--
-- Name: type; Type: TABLE; Schema: public; Owner: jupiter
--

CREATE TABLE public.type (
    id integer NOT NULL,
    typename character varying(100) NOT NULL
);


ALTER TABLE public.type OWNER TO jupiter;

--
-- Name: type_id_seq; Type: SEQUENCE; Schema: public; Owner: jupiter
--

CREATE SEQUENCE public.type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.type_id_seq OWNER TO jupiter;

--
-- Name: type_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jupiter
--

ALTER SEQUENCE public.type_id_seq OWNED BY public.type.id;


--
-- Name: application id; Type: DEFAULT; Schema: public; Owner: jupiter
--

ALTER TABLE ONLY public.application ALTER COLUMN id SET DEFAULT nextval('public.application_id_seq'::regclass);


--
-- Name: businessunit id; Type: DEFAULT; Schema: public; Owner: jupiter
--

ALTER TABLE ONLY public.businessunit ALTER COLUMN id SET DEFAULT nextval('public.businessunit_id_seq'::regclass);


--
-- Name: dataclassification id; Type: DEFAULT; Schema: public; Owner: jupiter
--

ALTER TABLE ONLY public.dataclassification ALTER COLUMN id SET DEFAULT nextval('public.dataclassification_id_seq'::regclass);


--
-- Name: deploymentenvironment id; Type: DEFAULT; Schema: public; Owner: jupiter
--

ALTER TABLE ONLY public.deploymentenvironment ALTER COLUMN id SET DEFAULT nextval('public.deploymentenvironment_id_seq'::regclass);


--
-- Name: exposure id; Type: DEFAULT; Schema: public; Owner: jupiter
--

ALTER TABLE ONLY public.exposure ALTER COLUMN id SET DEFAULT nextval('public.exposure_id_seq'::regclass);


--
-- Name: language id; Type: DEFAULT; Schema: public; Owner: jupiter
--

ALTER TABLE ONLY public.language ALTER COLUMN id SET DEFAULT nextval('public.language_id_seq'::regclass);


--
-- Name: lifecyclestage id; Type: DEFAULT; Schema: public; Owner: jupiter
--

ALTER TABLE ONLY public.lifecyclestage ALTER COLUMN id SET DEFAULT nextval('public.lifecyclestage_id_seq'::regclass);


--
-- Name: owner id; Type: DEFAULT; Schema: public; Owner: jupiter
--

ALTER TABLE ONLY public.owner ALTER COLUMN id SET DEFAULT nextval('public.owner_id_seq'::regclass);


--
-- Name: risklevel id; Type: DEFAULT; Schema: public; Owner: jupiter
--

ALTER TABLE ONLY public.risklevel ALTER COLUMN id SET DEFAULT nextval('public.risklevel_id_seq'::regclass);


--
-- Name: type id; Type: DEFAULT; Schema: public; Owner: jupiter
--

ALTER TABLE ONLY public.type ALTER COLUMN id SET DEFAULT nextval('public.type_id_seq'::regclass);


--
-- Data for Name: dataclassification; Type: TABLE DATA; Schema: public; Owner: jupiter
--

COPY public.dataclassification (id, dataclassificationname) FROM stdin;
1	Restricted
2	Private
3	Public
\.


--
-- Data for Name: deploymentenvironment; Type: TABLE DATA; Schema: public; Owner: jupiter
--

COPY public.deploymentenvironment (id, deploymentenvironmentname) FROM stdin;
1	Production
2	QA
3	Integrated Test
4	UAT
5	Performance
\.


--
-- Data for Name: exposure; Type: TABLE DATA; Schema: public; Owner: jupiter
--

COPY public.exposure (id, exposurename) FROM stdin;
1	Internal
2	External
7	Customer Facing
\.


--
-- Data for Name: language; Type: TABLE DATA; Schema: public; Owner: jupiter
--

COPY public.language (id, languagename) FROM stdin;
1	ABAP
2	Ada
3	Apex
4	ASP
5	AWK
6	Bash
7	BASIC
8	C
9	C++
10	C#
11	COBOL
12	CoffeeScript
13	ColdFusion
14	Erlang
15	F#
16	Flex
17	Fortran
18	FoxPro
19	Go
20	Groovy
21	Haskell
22	HTML
23	Informix
24	J#
25	Java
26	JavaScript
27	Jscript
28	Jython
29	Kotlin
30	Korn shell
31	Lasso
32	LaTeX
33	Lisp
34	Objective-C
35	Perl
36	PHP
37	PL/SQL
38	PowerBuilder
39	PowerShell
40	Python
41	R
42	REXX
43	Ruby
44	Rust
45	SAS
46	SQL
47	Swift
48	Tcl
49	T-SQL
50	TypeScript
51	Visual Basic
52	Visual Basic .NET
53	Visual FoxPro
54	Visual J++
55	Visual J#
56	WebAssembly
57	XML
58	XPath
59	XSLT
\.


--
-- Data for Name: lifecyclestage; Type: TABLE DATA; Schema: public; Owner: jupiter
--

COPY public.lifecyclestage (id, lifecyclestagename) FROM stdin;
1	New
2	Active
3	Maintenance
4	Retired
\.


--
-- Data for Name: risklevel; Type: TABLE DATA; Schema: public; Owner: jupiter
--

COPY public.risklevel (id, risklevelname) FROM stdin;
1	High
2	Medium
3	Low
\.


--
-- Data for Name: type; Type: TABLE DATA; Schema: public; Owner: jupiter
--

COPY public.type (id, typename) FROM stdin;
1	Library
2	Microservice
3	Monolith
4	Thin Client
5	User Interface
6	Web Site
\.


--
-- Name: application_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jupiter
--

SELECT pg_catalog.setval('public.application_id_seq', 8, true);


--
-- Name: businessunit_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jupiter
--

SELECT pg_catalog.setval('public.businessunit_id_seq', 10, true);


--
-- Name: dataclassification_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jupiter
--

SELECT pg_catalog.setval('public.dataclassification_id_seq', 9, true);


--
-- Name: deploymentenvironment_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jupiter
--

SELECT pg_catalog.setval('public.deploymentenvironment_id_seq', 9, true);


--
-- Name: exposure_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jupiter
--

SELECT pg_catalog.setval('public.exposure_id_seq', 8, true);


--
-- Name: language_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jupiter
--

SELECT pg_catalog.setval('public.language_id_seq', 66, true);


--
-- Name: lifecyclestage_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jupiter
--

SELECT pg_catalog.setval('public.lifecyclestage_id_seq', 8, true);


--
-- Name: owner_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jupiter
--

SELECT pg_catalog.setval('public.owner_id_seq', 10, true);


--
-- Name: risklevel_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jupiter
--

SELECT pg_catalog.setval('public.risklevel_id_seq', 7, true);


--
-- Name: type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jupiter
--

SELECT pg_catalog.setval('public.type_id_seq', 10, true);


--
-- Name: application application_pkey; Type: CONSTRAINT; Schema: public; Owner: jupiter
--

ALTER TABLE ONLY public.application
    ADD CONSTRAINT application_pkey PRIMARY KEY (id);


--
-- Name: businessunit businessunit_pkey; Type: CONSTRAINT; Schema: public; Owner: jupiter
--

ALTER TABLE ONLY public.businessunit
    ADD CONSTRAINT businessunit_pkey PRIMARY KEY (id);


--
-- Name: dataclassification dataclassification_pkey; Type: CONSTRAINT; Schema: public; Owner: jupiter
--

ALTER TABLE ONLY public.dataclassification
    ADD CONSTRAINT dataclassification_pkey PRIMARY KEY (id);


--
-- Name: deploymentenvironment deploymentenvironment_pkey; Type: CONSTRAINT; Schema: public; Owner: jupiter
--

ALTER TABLE ONLY public.deploymentenvironment
    ADD CONSTRAINT deploymentenvironment_pkey PRIMARY KEY (id);


--
-- Name: exposure exposure_pkey; Type: CONSTRAINT; Schema: public; Owner: jupiter
--

ALTER TABLE ONLY public.exposure
    ADD CONSTRAINT exposure_pkey PRIMARY KEY (id);


--
-- Name: language language_pkey; Type: CONSTRAINT; Schema: public; Owner: jupiter
--

ALTER TABLE ONLY public.language
    ADD CONSTRAINT language_pkey PRIMARY KEY (id);


--
-- Name: lifecyclestage lifecyclestage_pkey; Type: CONSTRAINT; Schema: public; Owner: jupiter
--

ALTER TABLE ONLY public.lifecyclestage
    ADD CONSTRAINT lifecyclestage_pkey PRIMARY KEY (id);


--
-- Name: owner owner_pkey; Type: CONSTRAINT; Schema: public; Owner: jupiter
--

ALTER TABLE ONLY public.owner
    ADD CONSTRAINT owner_pkey PRIMARY KEY (id);


--
-- Name: risklevel risklevel_pkey; Type: CONSTRAINT; Schema: public; Owner: jupiter
--

ALTER TABLE ONLY public.risklevel
    ADD CONSTRAINT risklevel_pkey PRIMARY KEY (id);


--
-- Name: type type_pkey; Type: CONSTRAINT; Schema: public; Owner: jupiter
--

ALTER TABLE ONLY public.type
    ADD CONSTRAINT type_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

