CREATE TABLE public.application
(
    id integer NOT NULL DEFAULT nextval('application_id_seq'::regclass),
    commonname character varying(255) COLLATE pg_catalog."default" NOT NULL,
    createddate date NOT NULL,
    primaryownerid integer,
    businessunitid integer,
    primarylanguageid integer,
    aliases text COLLATE pg_catalog."default",
    description text COLLATE pg_catalog."default",
    coderepourl text COLLATE pg_catalog."default",
    binaryrepourl text COLLATE pg_catalog."default",
    secondarylanguages text COLLATE pg_catalog."default",
    typeid integer,
    secondaryowners text COLLATE pg_catalog."default",
    exposureid integer,
    numusers integer,
    dataclassificationid integer,
    deploymentenvironmentid integer,
    deploymentenvironmenturl text COLLATE pg_catalog."default",
    risklevelid integer,
    regulations text COLLATE pg_catalog."default",
    chatchannel character varying(100) COLLATE pg_catalog."default",
    agilescrumboardurl text COLLATE pg_catalog."default",
    buildserverurl text COLLATE pg_catalog."default",
    age numeric,
    lifecyclestageid integer,
    CONSTRAINT application_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.application
    OWNER to jupiter;

CREATE TABLE public.businessunit
(
    id integer NOT NULL DEFAULT nextval('businessunit_id_seq'::regclass),
    businessunitname character varying(200) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT businessunit_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.businessunit
    OWNER to jupiter;

CREATE TABLE public.dataclassification
(
    id integer NOT NULL DEFAULT nextval('dataclassification_id_seq'::regclass),
    dataclassificationname character varying(55) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT dataclassification_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.dataclassification
    OWNER to jupiter;

CREATE TABLE public.deploymentenvironment
(
    id integer NOT NULL DEFAULT nextval('deploymentenvironment_id_seq'::regclass),
    deploymentenvironmentname character varying(55) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT deploymentenvironment_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.deploymentenvironment
    OWNER to jupiter;

CREATE TABLE public.exposure
(
    id integer NOT NULL DEFAULT nextval('exposure_id_seq'::regclass),
    exposurename character varying(100) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT exposure_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.exposure
    OWNER to jupiter;


CREATE TABLE public.language
(
    id integer NOT NULL DEFAULT nextval('language_id_seq'::regclass),
    languagename character varying(100) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT language_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.language
    OWNER to jupiter;

CREATE TABLE public.lifecyclestage
(
    id integer NOT NULL DEFAULT nextval('lifecyclestage_id_seq'::regclass),
    lifecyclestagename character varying(100) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT lifecyclestage_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.lifecyclestage
    OWNER to jupiter;

CREATE TABLE public.owner
(
    id integer NOT NULL DEFAULT nextval('owner_id_seq'::regclass),
    ownername text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT owner_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.owner
    OWNER to jupiter;

CREATE TABLE public.risklevel
(
    id integer NOT NULL DEFAULT nextval('risklevel_id_seq'::regclass),
    risklevelname character varying(100) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT risklevel_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.risklevel
    OWNER to jupiter;

CREATE TABLE public.type
(
    id integer NOT NULL DEFAULT nextval('type_id_seq'::regclass),
    typename character varying(100) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT type_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.type
    OWNER to jupiter;