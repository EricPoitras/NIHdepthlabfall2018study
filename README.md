# NIHdepthlabfall2018study
Duplicate version with modifications of NIH Depth for data collection purposes in the laboratory

MySQL Database

Create a database called "mitutor"

Use the following command in SQL:

CREATE TABLE IF NOT EXISTS `logapidata` (
  `timestamp` tinytext NOT NULL,
  `webpage` text NOT NULL,
  `utterrnn` longtext NOT NULL,
  `utterdsf` longtext NOT NULL,
  PRIMARY KEY (`webpage`)
);

CREATE TABLE IF NOT EXISTS `logperformancedata` (
  `timestamp` tinytext NOT NULL,
  `webpage` text NOT NULL,
  `label` longtext NOT NULL,
  PRIMARY KEY (`webpage`)
);

CREATE TABLE IF NOT EXISTS `logtracedata` (
  `timestamp` tinytext NOT NULL,
  `timer` double NOT NULL,
  `counter` int(11) NOT NULL,
  `webpage` text NOT NULL,
  `label` longtext NOT NULL,
  PRIMARY KEY (`webpage`)
);
