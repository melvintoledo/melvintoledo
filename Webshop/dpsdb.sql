-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 04, 2022 at 01:32 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dpsdb`
--
CREATE DATABASE IF NOT EXISTS `dpsdb` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `dpsdb`;

-- --------------------------------------------------------

--
-- Table structure for table `dpstable`
--

CREATE TABLE `dpstable` (
  `fullName` text NOT NULL,
  `emailAddress` text NOT NULL,
  `contactNumber` text NOT NULL,
  `usernameInput` text NOT NULL,
  `passwordInput` text NOT NULL,
  `file_name` varchar(255) NOT NULL,
  `colorWheel` text NOT NULL,
  `selectSize` text NOT NULL,
  `quantitySize` text NOT NULL,
  `receiptPaper` varchar(255) NOT NULL,
  `referenceNumber` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `dpstable`
--

INSERT INTO `dpstable` (`fullName`, `emailAddress`, `contactNumber`, `usernameInput`, `passwordInput`, `file_name`, `colorWheel`, `selectSize`, `quantitySize`, `receiptPaper`, `referenceNumber`) VALUES
('Melvin Andrew Toledo', 'thewarriors2612@gmail.com', '09654194853', 'zippy', '09654194853.', '', '', '0', '', '', ''),
('Angelica Maniago', 'angelmaniago@gmail.com', '09757374505', 'thaniaan', 'qwe123', '0001.jpg', 'colorYellow', 'sizeLarge', '3', '0001.jpg', '12345678'),
('Anj', 'angelmaniago47@gmail.com', '09757374505', 'anjmaniago', 'jajaallyn', 'Ate Anj.jpg', 'colorOrange', 'sizeSmall', '3', '2x2.png', '12345678'),
('Melvin', '2020103363@gmail.com', '09123456789', 'melvin', 'toledo', 'Ate Anj.jpg', 'colorGray', 'sizeSmall', '1', '0001.jpg', '12345678');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
