# NIHdepthlabfall2018study (Treatment Condition)
Duplicate version with modifications of NIH Depth for data collection purposes in the laboratory

MySQL Database

Create a database called "mitutor"

Use the following command in SQL:

CREATE TABLE `logapidata` (
  `timestamp` tinytext NOT NULL,
  `webpage` text NOT NULL,
  `session` mediumtext NOT NULL,
  `username` mediumtext NOT NULL,
  `utterrnn` longtext NOT NULL,
  `utterdsf` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `logperformancedata` (
  `timestamp` tinytext NOT NULL,
  `webpage` text NOT NULL,
  `label` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `logtracedata` (
  `timestamp` tinytext NOT NULL,
  `timer` double NOT NULL,
  `counter` int(11) NOT NULL,
  `webpage` text NOT NULL,
  `label` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
