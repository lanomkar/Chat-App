-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 14, 2020 at 01:46 PM
-- Server version: 10.4.10-MariaDB
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `chatapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `msg`
--

DROP TABLE IF EXISTS `msg`;
CREATE TABLE IF NOT EXISTS `msg` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `msg`
--

INSERT INTO `msg` (`id`, `username`, `message`, `createdAt`) VALUES
(1, 'omkar', 'Hello world', '2020-12-14 11:13:39'),
(3, 'gourav', 'hello omkar', '2020-12-14 11:24:28'),
(4, 'Om', 'Qw', '2020-12-14 13:13:02'),
(5, 'Omkar', 'Hi', '2020-12-14 13:17:13'),
(6, 'Omkar', 'Hi', '2020-12-14 13:17:32'),
(7, 'Pavan', 'Ok', '2020-12-14 13:18:55'),
(8, 'Om', 'Hi p', '2020-12-14 13:19:28'),
(9, 'Om', 'Ok', '2020-12-14 13:19:50'),
(10, 'Omk', 'Ok', '2020-12-14 13:19:56'),
(11, 'Omka', 'Ok', '2020-12-14 13:20:00'),
(12, 'Omkal', 'Ok', '2020-12-14 13:20:05'),
(13, 'Omk', 'Ok', '2020-12-14 13:20:09'),
(14, 'Om', 'Hi p', '2020-12-14 13:44:22');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
