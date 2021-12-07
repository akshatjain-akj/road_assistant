-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 07, 2021 at 07:56 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `road_assistant`
--

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `CustName` varchar(30) NOT NULL,
  `CustomerId` int(11) NOT NULL,
  `LocId` int(11) NOT NULL,
  `PhoneNo` bigint(14) NOT NULL,
  `VechicleNo` varchar(10) NOT NULL,
  `password` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`CustName`, `CustomerId`, `LocId`, `PhoneNo`, `VechicleNo`, `password`) VALUES
('Gulshan', 21211, 6, 99991271, 'DL 8921', '12345678'),
('Abhishek', 131137, 3, 62809112, 'BH 9182', '12345678'),
('Visesh', 199129, 4, 802234412, 'KR 7721', '12345678'),
('Ram', 229123, 2, 8119911921, 'UP 5822', '12345678'),
('Pankaj', 229142, 9, 9047223182, 'UP 5062', '12345678'),
('Amitabh', 437332, 7, 6783252571, 'MH 5623', '12345678'),
('Umesh', 612142, 8, 8712923312, 'UK 2291', '12345678'),
('Uday', 617542, 1, 8712994412, 'PB 9052', '12345678'),
('Adil', 913113, 6, 894881199, 'JK 2933', '12345678'),
('Amit', 946663, 5, 730002123, 'MP 7892', '12345678');

-- --------------------------------------------------------

--
-- Table structure for table `location`
--

CREATE TABLE `location` (
  `ID` int(11) NOT NULL,
  `State` varchar(16) NOT NULL,
  `City` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `location`
--

INSERT INTO `location` (`ID`, `State`, `City`) VALUES
(1, 'Uttar Pradesh', 'Kanpur'),
(2, 'Punjab', 'Ludhiana'),
(3, 'Karnatka', 'Banglore'),
(4, 'Bihar', 'Patna'),
(5, 'Maharashtra', 'Mumbai'),
(6, 'Jammu Kashmir', 'Sri Nagar'),
(7, 'Delhi', 'Badarpur'),
(8, 'Madhya Pradesh', 'Bhopal');

-- --------------------------------------------------------

--
-- Table structure for table `mechanic`
--

CREATE TABLE `mechanic` (
  `MechName` varchar(14) NOT NULL,
  `MechId` int(10) NOT NULL,
  `LocId` int(11) NOT NULL,
  `VehicleType` int(11) NOT NULL,
  `PhoneNo` bigint(12) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `mechanic`
--

INSERT INTO `mechanic` (`MechName`, `MechId`, `LocId`, `VehicleType`, `PhoneNo`, `password`) VALUES
('Ash', 57533, 7, 3, 8712556612, '12345678'),
('Daljeet', 237814, 5, 3, 9046723118, '12345678'),
('Mahesh', 646433, 9, 2, 9353252571, '12345678'),
('Manuj', 686221, 1, 7, 703299991, '12345678'),
('Sanju', 876661, 9, 4, 831333854, '12345678'),
('Kundan', 2311641, 6, 8, 782137211, '12345678'),
('Kapoor', 2321355, 4, 5, 724249913, '12345678'),
('Babloo', 2378432, 2, 8, 9467245628, '12345678'),
('Yuvi', 2999123, 3, 7, 981234412, '12345678'),
('Sanjay', 3452421, 1, 1, 801212133, '12345678'),
('Shyam', 13144422, 8, 9, 9047276182, '12345678'),
('Binay', 533244165, 8, 6, 95035033, '12345678');

-- --------------------------------------------------------

--
-- Table structure for table `parts`
--

CREATE TABLE `parts` (
  `ID` int(11) NOT NULL,
  `Type` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `parts`
--

INSERT INTO `parts` (`ID`, `Type`) VALUES
(1, 'Car'),
(2, 'Bus'),
(3, 'Truck'),
(4, 'Trolley'),
(5, 'Scootey'),
(6, 'Cycle'),
(7, 'Bike'),
(8, 'Auto Rickshaw'),
(9, 'Others');

-- --------------------------------------------------------

--
-- Table structure for table `seller`
--

CREATE TABLE `seller` (
  `Name` varchar(30) NOT NULL,
  `LocId` int(11) NOT NULL,
  `SellerId` varchar(11) NOT NULL,
  `Parts` int(11) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `seller`
--

INSERT INTO `seller` (`Name`, `LocId`, `SellerId`, `Parts`, `password`) VALUES
('Biswas', 5, '11GT42', 6, '12345678'),
('Kishore', 8, '2N671', 1, '12345678'),
('Ash', 4, '2SE892', 7, '12345678'),
('Mukesh', 1, '4NA981', 3, '12345678'),
('Parminder', 5, '8TQ621', 9, '12345678'),
('Shaurya', 7, '90NV27', 5, '12345678'),
('Mohan', 6, '9128AVA', 4, '12345678'),
('Sahoo', 2, '914A', 2, '12345678'),
('Bunty', 2, 'BA21', 1, '12345678'),
('Virat', 3, 'BG4821', 8, '12345678'),
('Neeraj', 4, 'GI7292', 1, '12345678'),
('Jatin', 9, 'MS7821', 6, '12345678');

-- --------------------------------------------------------

--
-- Table structure for table `vehicle`
--

CREATE TABLE `vehicle` (
  `ID` int(11) NOT NULL,
  `Type` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `vehicle`
--

INSERT INTO `vehicle` (`ID`, `Type`) VALUES
(1, 'Car'),
(2, 'Bus'),
(3, 'Truck'),
(4, 'Trolley'),
(5, 'Scootey'),
(6, 'Cycle'),
(7, 'Bike'),
(8, 'Auto Rickshaw'),
(9, 'Others');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`CustomerId`),
  ADD UNIQUE KEY `PhoneNo` (`PhoneNo`),
  ADD UNIQUE KEY `VechicleNo` (`VechicleNo`);

--
-- Indexes for table `location`
--
ALTER TABLE `location`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `mechanic`
--
ALTER TABLE `mechanic`
  ADD PRIMARY KEY (`MechId`),
  ADD UNIQUE KEY `PhoneNo` (`PhoneNo`);

--
-- Indexes for table `parts`
--
ALTER TABLE `parts`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `seller`
--
ALTER TABLE `seller`
  ADD PRIMARY KEY (`SellerId`);

--
-- Indexes for table `vehicle`
--
ALTER TABLE `vehicle`
  ADD PRIMARY KEY (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
