-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 28, 2023 at 12:01 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sks_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `criteriapage`
--

CREATE TABLE `criteriapage` (
  `uid` varchar(20) NOT NULL,
  `menu_name` varchar(20) NOT NULL,
  `menu_description` varchar(50) NOT NULL,
  `field_type` varchar(20) NOT NULL,
  `field_name` varchar(20) NOT NULL,
  `rcre_userid` varchar(20) NOT NULL,
  `rcre_time` time NOT NULL DEFAULT current_timestamp(),
  `lchg_userid` varchar(20) NOT NULL,
  `lchg_time` time NOT NULL DEFAULT current_timestamp(),
  `bankid` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `criteriapage`
--

INSERT INTO `criteriapage` (`uid`, `menu_name`, `menu_description`, `field_type`, `field_name`, `rcre_userid`, `rcre_time`, `lchg_userid`, `lchg_time`, `bankid`) VALUES
('1', 'Rosalyn Turner', 'Iusto dolores volupt', 'label', 'vsvs', 'saurahb', '12:48:37', 'saurahb', '12:48:37', '1022321'),
('1', 'Rosalyn Turner', 'Iusto dolores volupt', 'textbox', 'grege', 'saurahb', '12:49:55', 'saurahb', '12:49:55', '1022321'),
('1', 'Rosalyn Turner', 'Iusto dolores volupt', 'textbox', 'csc', 'saurahb', '12:53:52', 'saurahb', '12:53:52', '1022321'),
('1', 'Rosalyn Turner', 'Iusto dolores volupt', 'textbox', 'ecwe', 'saurahb', '12:55:00', 'saurahb', '12:55:00', '1022321');

-- --------------------------------------------------------

--
-- Table structure for table `detailspage`
--

CREATE TABLE `detailspage` (
  `uid` varchar(255) NOT NULL,
  `ref_num` int(100) NOT NULL,
  `menu_name` varchar(50) NOT NULL,
  `field_label` varchar(20) NOT NULL,
  `field_type` varchar(20) NOT NULL,
  `field_name` varchar(50) NOT NULL,
  `rcre_userid` varchar(20) NOT NULL,
  `rcre_time` time NOT NULL DEFAULT current_timestamp(),
  `lchg_userid` varchar(20) NOT NULL,
  `lchg_time` time NOT NULL DEFAULT current_timestamp(),
  `bankid` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `detailspage`
--

INSERT INTO `detailspage` (`uid`, `ref_num`, `menu_name`, `field_label`, `field_type`, `field_name`, `rcre_userid`, `rcre_time`, `lchg_userid`, `lchg_time`, `bankid`) VALUES
('1', 1, 'Rosalyn Turner', '', 'textbox', 'vdvdv', 'saurahb', '15:11:41', 'saurahb', '15:11:41', 1022321),
('1', 2, 'Rosalyn Turner', '', 'checkbox', 'fbdfb', 'saurahb', '15:11:41', 'saurahb', '15:11:41', 1022321);

-- --------------------------------------------------------

--
-- Table structure for table `menudetails`
--

CREATE TABLE `menudetails` (
  `id` int(10) NOT NULL,
  `menu_name` varchar(20) NOT NULL,
  `menu_description` varchar(50) NOT NULL,
  `is_criteriapage` varchar(10) NOT NULL,
  `is_detailpage` varchar(10) NOT NULL,
  `is_resultpage` varchar(10) NOT NULL,
  `rcre_userid` int(20) NOT NULL,
  `rcre_time` time NOT NULL,
  `lchg_userid` int(20) NOT NULL,
  `lchg_time` time NOT NULL,
  `bankid` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `menudetails`
--

INSERT INTO `menudetails` (`id`, `menu_name`, `menu_description`, `is_criteriapage`, `is_detailpage`, `is_resultpage`, `rcre_userid`, `rcre_time`, `lchg_userid`, `lchg_time`, `bankid`) VALUES
(1, 'Walter Lawson', 'Iusto reiciendis nat', 'N', 'Y', 'N', 1, '00:00:00', 0, '00:00:00', 1),
(2, 'Kylan Mcfarland', 'Consequatur ut quo c', 'N', 'Y', 'N', 1, '00:00:00', 0, '00:00:00', 1),
(3, 'Kato Estrada', 'Ea ab reiciendis sae', 'Y', 'Y', 'N', 1, '00:00:00', 0, '00:00:00', 1),
(4, 'Reagan Wilder', 'Animi consequatur ', 'N', 'Y', 'Y', 1, '00:00:00', 0, '00:00:00', 1),
(5, 'Callie Bailey', 'Nostrud soluta dolor', 'N', 'N', 'Y', 1, '00:00:00', 0, '00:00:00', 1),
(6, 'Murphy Acosta', 'Eligendi ut deserunt', 'N', 'Y', 'Y', 1, '00:00:00', 0, '00:00:00', 1),
(7, 'Venus Woods', 'Ipsa id aut aut qui', 'Y', 'N', 'Y', 1, '00:00:00', 0, '00:00:00', 1),
(8, 'Walter Lawson', '', 'N', 'N', 'N', 1, '00:00:00', 0, '00:00:00', 1),
(9, 'Rosalyn Turner', 'Iusto dolores volupt', 'Y', 'N', 'Y', 1, '00:00:00', 0, '00:00:00', 1);

-- --------------------------------------------------------

--
-- Table structure for table `previoiusnext`
--

CREATE TABLE `previoiusnext` (
  `content` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `uid` int(20) NOT NULL,
  `name` varchar(100) NOT NULL,
  `password` varchar(10) NOT NULL,
  `bankid` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`uid`, `name`, `password`, `bankid`) VALUES
(1, 'saurahb', 'saurahb', '1022321'),
(2, 'saurahb', '12345', '1022321');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `detailspage`
--
ALTER TABLE `detailspage`
  ADD PRIMARY KEY (`ref_num`);

--
-- Indexes for table `menudetails`
--
ALTER TABLE `menudetails`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`uid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `detailspage`
--
ALTER TABLE `detailspage`
  MODIFY `ref_num` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `menudetails`
--
ALTER TABLE `menudetails`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `uid` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
