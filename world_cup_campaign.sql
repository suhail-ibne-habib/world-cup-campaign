-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Host: mysql-db
-- Generation Time: Jun 09, 2026 at 07:41 PM
-- Server version: 8.0.46
-- PHP Version: 8.3.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `world_cup_campaign`
--

-- --------------------------------------------------------

--
-- Table structure for table `m_worldcup_teams`
--

CREATE TABLE `m_worldcup_teams` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `flag` varchar(255) NOT NULL,
  `fifa_code` varchar(10) NOT NULL,
  `groups` varchar(10) NOT NULL,
  `choose_cound` int NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `m_worldcup_teams`
--

INSERT INTO `m_worldcup_teams` (`id`, `name`, `flag`, `fifa_code`, `groups`, `choose_cound`) VALUES
(1, 'South Africa', 'https://flagcdn.com/w80/za.png', 'RSA', 'A', 0),
(2, 'Brazil', 'https://flagcdn.com/w80/br.png', 'BRA', 'C', 3),
(3, 'Scotland', 'https://flagcdn.com/w80/gb-sct.png', 'SCO', 'C', 0),
(4, 'Turkey', 'https://flagcdn.com/w80/tr.png', 'TUR', 'D', 0),
(5, 'Ivory Coast', 'https://flagcdn.com/w80/ci.png', 'CIV', 'E', 0),
(6, 'Netherlands', 'https://flagcdn.com/w80/nl.png', 'NED', 'F', 0),
(7, 'Cape Verde', 'https://flagcdn.com/w80/cv.png', 'CPV', 'H', 1),
(8, 'France', 'https://flagcdn.com/w80/fr.png', 'FRA', 'I', 0),
(9, 'Tunisia', 'https://flagcdn.com/w80/tn.png', 'TUN', 'F', 0),
(10, 'Egypt', 'https://flagcdn.com/w80/eg.png', 'EGY', 'G', 0),
(11, 'Iraq', 'https://flagcdn.com/w80/iq.png', 'IRQ', 'I', 0),
(12, 'Portugal', 'https://flagcdn.com/w80/pt.png', 'POR', 'K', 0),
(13, 'Uzbekistan', 'https://flagcdn.com/w80/uz.png', 'UZB', 'K', 0),
(14, 'Colombia', 'https://flagcdn.com/w80/co.png', 'COL', 'K', 0),
(15, 'Ecuador', 'https://flagcdn.com/w80/ec.png', 'ECU', 'E', 0),
(16, 'Japan', 'https://flagcdn.com/w80/jp.png', 'JPN', 'F', 0),
(17, 'New Zealand', 'https://flagcdn.com/w80/nz.png', 'NZL', 'G', 0),
(18, 'Saudi Arabia', 'https://flagcdn.com/w80/sa.png', 'KSA', 'H', 0),
(19, 'Austria', 'https://flagcdn.com/w80/at.png', 'AUT', 'J', 0),
(20, 'Ghana', 'https://flagcdn.com/w80/gh.png', 'GHA', 'L', 0),
(21, 'South Korea', 'https://flagcdn.com/w80/kr.png', 'KOR', 'A', 0),
(22, 'Spain', 'https://flagcdn.com/w80/es.png', 'ESP', 'H', 0),
(23, 'Norway', 'https://flagcdn.com/w80/no.png', 'NOR', 'I', 0),
(24, 'Argentina', 'https://flagcdn.com/w80/ar.png', 'ARG', 'J', 0),
(25, 'Democratic Republic of the Congo', 'https://flagcdn.com/w80/cd.png', 'COD', 'K', 0),
(26, 'England', 'https://flagcdn.com/w80/gb-eng.png', 'ENG', 'L', 0),
(27, 'Czech Republic', 'https://flagcdn.com/w80/cz.png', 'CZE', 'A', 0),
(28, 'Canada', 'https://flagcdn.com/w80/ca.png', 'CAN', 'B', 0),
(29, 'Qatar', 'https://flagcdn.com/w80/qa.png', 'QAT', 'B', 0),
(30, 'Switzerland', 'https://flagcdn.com/w80/ch.png', 'SUI', 'B', 0),
(31, 'Morocco', 'https://flagcdn.com/w80/ma.png', 'MAR', 'C', 0),
(32, 'Paraguay', 'https://flagcdn.com/w80/py.png', 'PAR', 'D', 0),
(33, 'Curaçao', 'https://flagcdn.com/w80/cw.png', 'CUW', 'E', 0),
(34, 'Sweden', 'https://flagcdn.com/w80/se.png', 'SWE', 'F', 1),
(35, 'Algeria', 'https://flagcdn.com/w80/dz.png', 'ALG', 'J', 1),
(36, 'Jordan', 'https://flagcdn.com/w80/jo.png', 'JOR', 'J', 0),
(37, 'Haiti', 'https://flagcdn.com/w80/ht.png', 'HAI', 'C', 1),
(38, 'Germany', 'https://flagcdn.com/w80/de.png', 'GER', 'E', 0),
(39, 'Uruguay', 'https://flagcdn.com/w80/uy.png', 'URU', 'H', 0),
(40, 'Senegal', 'https://flagcdn.com/w80/sn.png', 'SEN', 'I', 0),
(41, 'Panama', 'https://flagcdn.com/w80/pa.png', 'PAN', 'L', 0),
(42, 'Mexico', 'https://flagcdn.com/w80/mx.png', 'MEX', 'A', 0),
(43, 'Bosnia and Herzegovina', 'https://flagcdn.com/w80/ba.png', 'BIH', 'B', 0),
(44, 'United States', 'https://flagcdn.com/w80/us.png', 'USA', 'D', 0),
(45, 'Australia', 'https://flagcdn.com/w80/au.png', 'AUS', 'D', 0),
(46, 'Belgium', 'https://flagcdn.com/w80/be.png', 'BEL', 'G', 0),
(47, 'Iran', 'https://flagcdn.com/w80/ir.png', 'IRN', 'G', 0),
(48, 'Croatia', 'https://flagcdn.com/w80/hr.png', 'CRO', 'L', 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `user_type` enum('agent','brokerage') NOT NULL,
  `membership_status` enum('free','paid') NOT NULL,
  `subscription_package` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users_chosen_team`
--

CREATE TABLE `users_chosen_team` (
  `id` int NOT NULL,
  `users_id` int NOT NULL,
  `m_worldcup_teams_id` int NOT NULL,
  `selection_type` enum('auto','manual') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `m_worldcup_teams`
--
ALTER TABLE `m_worldcup_teams`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `uq_users_email` (`email`);

--
-- Indexes for table `users_chosen_team`
--
ALTER TABLE `users_chosen_team`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_users_id_users_chosen_team` (`users_id`),
  ADD KEY `fk_m_worldcup_teams_id_users_chosen_team` (`m_worldcup_teams_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `m_worldcup_teams`
--
ALTER TABLE `m_worldcup_teams`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users_chosen_team`
--
ALTER TABLE `users_chosen_team`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `users_chosen_team`
--
ALTER TABLE `users_chosen_team`
  ADD CONSTRAINT `fk_m_worldcup_teams_id_users_chosen_team` FOREIGN KEY (`m_worldcup_teams_id`) REFERENCES `m_worldcup_teams` (`id`),
  ADD CONSTRAINT `fk_users_id_users_chosen_team` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
