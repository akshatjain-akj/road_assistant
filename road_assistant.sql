-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 15, 2021 at 06:10 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.0.13

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
  `cid` int(11) NOT NULL,
  `CustName` varchar(30) NOT NULL,
  `LocId` int(11) NOT NULL,
  `PhoneNo` bigint(14) NOT NULL,
  `VehicleNo` varchar(10) NOT NULL,
  `vehicletype` varchar(100) NOT NULL,
  `password` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`cid`, `CustName`, `LocId`, `PhoneNo`, `VehicleNo`, `vehicletype`, `password`) VALUES
(1, 'Abhishek', 3, 62809112, 'BH 9182', '6', '12345678'),
(2, 'Gulshan', 6, 99991271, 'DL 8921', '7', '12345678'),
(3, 'Amit', 5, 730002123, 'MP 7892', '8', '12345678'),
(4, 'Visesh', 4, 802234412, 'KR 7721', '5', '12345678'),
(5, 'Adil', 6, 894881199, 'JK 2933', '4', '12345678'),
(6, 'Amitabh', 7, 6783252571, 'MH 5623', '3', '12345678'),
(7, 'Ram', 2, 8119911921, 'UP 5822', '2', '12345678'),
(8, 'Umesh', 8, 8712923312, 'UK 2291', '1', '12345678'),
(9, 'Uday', 1, 8712994412, 'PB 9052', '6', '12345678'),
(10, 'Pankaj', 9, 9047223182, 'UP 5062', '1', '12345678'),
(11, 'akshat', 21, 11111111, 'wsdrtghx', '1', '123'),
(12, 'cyrus', 21, 34567890, 'DL 7656768', '1', '111'),
(16, 'abhyadeep', 21, 111111111, 'DL 765676', '1', '1234');

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
(8, 'Madhya Pradesh', 'Bhopal'),
(21, 'delhi', 'delhi');

-- --------------------------------------------------------

--
-- Table structure for table `mechanic`
--

CREATE TABLE `mechanic` (
  `Mechid` int(11) NOT NULL,
  `MechName` varchar(14) NOT NULL,
  `LocId` int(11) NOT NULL,
  `VehicleType` int(11) NOT NULL,
  `PhoneNo` bigint(12) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `mechanic`
--

INSERT INTO `mechanic` (`Mechid`, `MechName`, `LocId`, `VehicleType`, `PhoneNo`, `password`) VALUES
(1, 'Binay', 8, 6, 95035033, '12345678'),
(2, 'Manuj', 1, 7, 703299991, '12345678'),
(3, 'Kapoor', 4, 5, 724249913, '12345678'),
(4, 'Kundan', 6, 8, 782137211, '12345678'),
(5, 'Sanjay', 1, 1, 801212133, '12345678'),
(6, 'Sanju', 9, 4, 831333854, '12345678'),
(7, 'Yuvi', 3, 7, 981234412, '12345678'),
(8, 'Ash', 7, 3, 8712556612, '12345678'),
(9, 'Daljeet', 5, 3, 9046723118, '12345678'),
(10, 'Shyam', 8, 9, 9047276182, '12345678'),
(11, 'Mahesh', 9, 2, 9353252571, '12345678'),
(12, 'Babloo', 2, 8, 9467245628, '12345678'),
(15, 'akj', 21, 1, 11111111, '123');

-- --------------------------------------------------------

--
-- Table structure for table `mechanic_alloc`
--

CREATE TABLE `mechanic_alloc` (
  `mid` int(11) NOT NULL,
  `cid` int(11) NOT NULL,
  `id` int(11) NOT NULL,
  `vid` int(11) NOT NULL,
  `lid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `mechanic_alloc`
--

INSERT INTO `mechanic_alloc` (`mid`, `cid`, `id`, `vid`, `lid`) VALUES
(15, 1, 1, 1, 1);

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
  `Parts` int(11) NOT NULL,
  `password` varchar(100) NOT NULL,
  `Sellerid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `seller`
--

INSERT INTO `seller` (`Name`, `LocId`, `Parts`, `password`, `Sellerid`) VALUES
('Biswas', 5, 6, '12345678', 2),
('Kishore', 8, 1, '12345678', 3),
('Ash', 4, 7, '12345678', 4),
('Mukesh', 1, 3, '12345678', 5),
('Parminder', 5, 9, '12345678', 6),
('Shaurya', 7, 5, '12345678', 7),
('Mohan', 6, 4, '12345678', 8),
('Sahoo', 2, 2, '12345678', 9),
('Bunty', 2, 1, '12345678', 10),
('Virat', 3, 8, '12345678', 11),
('Neeraj', 4, 1, '12345678', 12),
('Jatin', 9, 6, '12345678', 13),
('akshat', 21, 1, '1234', 15);

-- --------------------------------------------------------

--
-- Table structure for table `seller_alloc`
--

CREATE TABLE `seller_alloc` (
  `cid` int(100) NOT NULL,
  `sid` int(11) NOT NULL,
  `pid` int(11) NOT NULL,
  `id` int(11) NOT NULL,
  `lid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `seller_alloc`
--

INSERT INTO `seller_alloc` (`cid`, `sid`, `pid`, `id`, `lid`) VALUES
(1, 15, 1, 1, 1);

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
  ADD PRIMARY KEY (`cid`),
  ADD UNIQUE KEY `PhoneNo` (`PhoneNo`),
  ADD UNIQUE KEY `VechicleNo` (`VehicleNo`);

--
-- Indexes for table `location`
--
ALTER TABLE `location`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `mechanic`
--
ALTER TABLE `mechanic`
  ADD PRIMARY KEY (`Mechid`),
  ADD UNIQUE KEY `PhoneNo` (`PhoneNo`);

--
-- Indexes for table `mechanic_alloc`
--
ALTER TABLE `mechanic_alloc`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `parts`
--
ALTER TABLE `parts`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `seller`
--
ALTER TABLE `seller`
  ADD PRIMARY KEY (`Sellerid`);

--
-- Indexes for table `seller_alloc`
--
ALTER TABLE `seller_alloc`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vehicle`
--
ALTER TABLE `vehicle`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `cid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `location`
--
ALTER TABLE `location`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `mechanic`
--
ALTER TABLE `mechanic`
  MODIFY `Mechid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `mechanic_alloc`
--
ALTER TABLE `mechanic_alloc`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `seller`
--
ALTER TABLE `seller`
  MODIFY `Sellerid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `seller_alloc`
--
ALTER TABLE `seller_alloc`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
