-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 06, 2024 at 09:11 PM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `xchat`
--

-- --------------------------------------------------------

--
-- Table structure for table `Conversations`
--

CREATE TABLE `Conversations` (
  `id` int(11) NOT NULL,
  `user1_id` int(11) NOT NULL,
  `user2_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Keys`
--

CREATE TABLE `Keys` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `algorithm` varchar(255) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `key` text COLLATE utf8mb4_vietnamese_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Messages`
--

CREATE TABLE `Messages` (
  `id` int(11) NOT NULL,
  `sender_id` int(11) NOT NULL,
  `receiver_id` int(11) NOT NULL,
  `content` text COLLATE utf8mb4_vietnamese_ci DEFAULT NULL,
  `encrypted_content` text COLLATE utf8mb4_vietnamese_ci DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Dumping data for table `Messages`
--

INSERT INTO `Messages` (`id`, `sender_id`, `receiver_id`, `content`, `encrypted_content`, `created_at`) VALUES
(7, 47, 42, 'U2FsdGVkX188jrPtWFfmnxGO1lnYabvq8voAGVnXXDMPRR5skR2bjMIFYaXvisU9R5GJQaWwnUJv1HVPE6PJGA==', NULL, '2024-05-07 02:00:19'),
(8, 42, 47, 'U2FsdGVkX1+49UQohYldv7FRskfj14tda19L3irkQ5kKbg/3fWJl9OQe8S2lG+Hxg+0wqq8QOGzccJuFj2jcpg==', NULL, '2024-05-07 02:03:10'),
(9, 47, 42, 'U2FsdGVkX1/rFq0SNVb3IB1Am30Nj2H8QKvkOd4uBivsp1q+4OwkiIrRjFTVaXzy1epJJrVWJ1Tl5CwQBArD1A==', NULL, '2024-05-07 02:03:34'),
(10, 42, 44, 'U2FsdGVkX19J1o4h9aXBTbvXFbDU+t4aPh2XrvVKqsUibM6E18x0geNCuj+yPN3TpiCybzLFaTW+tYBGEaE6hw==', NULL, '2024-05-07 02:03:44'),
(11, 44, 42, 'U2FsdGVkX19urJFhiOK4o2cK+Hr/pQd1oiamldxxr3ixP2jFYyNgmoXnio6gk7hGmtPZp5eUNpA=', NULL, '2024-05-07 02:04:00'),
(12, 47, 44, 'U2FsdGVkX19pcvkfzkXlUqgguznqNpA/WCC+HL+8GO2BFqzHJzt/wKztj/Qzv7DEbFJ8gmsvpe8=', NULL, '2024-05-07 02:04:35'),
(13, 44, 47, 'U2FsdGVkX1/8I5z+WcnFZwmMbR0S9Agop+NVqPmhVhVf5Nl7xvKqUC6C4/BTN5b+rWVIp1B1KOM=', NULL, '2024-05-07 02:04:54');

-- --------------------------------------------------------

--
-- Table structure for table `Roles`
--

CREATE TABLE `Roles` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Dumping data for table `Roles`
--

INSERT INTO `Roles` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'admin', '2024-05-07 00:52:46', '2024-05-07 00:52:46'),
(2, 'user', '2024-05-07 00:53:03', '2024-05-07 00:53:03');

-- --------------------------------------------------------

--
-- Table structure for table `SequelizeMeta`
--

CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `SequelizeMeta`
--

INSERT INTO `SequelizeMeta` (`name`) VALUES
('create-conversations.js'),
('create-key.js'),
('create-messages.js'),
('create-roles.js'),
('create-user-roles.js'),
('create-users.js');

-- --------------------------------------------------------

--
-- Table structure for table `UserRoles`
--

CREATE TABLE `UserRoles` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Dumping data for table `UserRoles`
--

INSERT INTO `UserRoles` (`id`, `user_id`, `role_id`, `created_at`, `updated_at`) VALUES
(21, 37, 2, '2024-05-06 17:53:45', '2024-05-06 17:53:45'),
(22, 36, 2, '2024-05-06 17:53:45', '2024-05-06 17:53:45'),
(23, 26, 2, '2024-05-06 17:53:45', '2024-05-06 17:53:45'),
(24, 28, 2, '2024-05-06 17:53:45', '2024-05-06 17:53:45'),
(25, 30, 2, '2024-05-06 17:53:45', '2024-05-06 17:53:45'),
(26, 25, 2, '2024-05-06 17:53:45', '2024-05-06 17:53:45'),
(27, 27, 2, '2024-05-06 17:53:45', '2024-05-06 17:53:45'),
(28, 33, 2, '2024-05-06 17:53:45', '2024-05-06 17:53:45'),
(29, 29, 2, '2024-05-06 17:53:45', '2024-05-06 17:53:45'),
(30, 34, 2, '2024-05-06 17:53:45', '2024-05-06 17:53:45'),
(31, 40, 2, '2024-05-06 17:53:45', '2024-05-06 17:53:45'),
(32, 38, 2, '2024-05-06 17:53:45', '2024-05-06 17:53:45'),
(33, 23, 2, '2024-05-06 17:53:45', '2024-05-06 17:53:45'),
(34, 21, 2, '2024-05-06 17:53:45', '2024-05-06 17:53:45'),
(35, 32, 2, '2024-05-06 17:53:45', '2024-05-06 17:53:45'),
(36, 35, 2, '2024-05-06 17:53:45', '2024-05-06 17:53:45'),
(37, 24, 2, '2024-05-06 17:53:45', '2024-05-06 17:53:45'),
(38, 31, 2, '2024-05-06 17:53:45', '2024-05-06 17:53:45'),
(39, 22, 2, '2024-05-06 17:53:45', '2024-05-06 17:53:45'),
(40, 39, 2, '2024-05-06 17:53:45', '2024-05-06 17:53:45'),
(42, 42, 2, '2024-05-07 01:38:25', '2024-05-07 01:38:25'),
(43, 43, 2, '2024-05-07 01:39:36', '2024-05-07 01:39:36'),
(44, 44, 2, '2024-05-07 01:40:38', '2024-05-07 01:40:38'),
(45, 45, 2, '2024-05-07 01:41:38', '2024-05-07 01:41:38'),
(46, 46, 2, '2024-05-07 01:42:20', '2024-05-07 01:42:20'),
(47, 47, 2, '2024-05-07 01:49:56', '2024-05-07 01:49:56');

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `id` int(11) NOT NULL,
  `fullname` varchar(255) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `avatar` text COLLATE utf8mb4_vietnamese_ci DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `refresh_token` varchar(255) COLLATE utf8mb4_vietnamese_ci DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`id`, `fullname`, `email`, `password`, `avatar`, `status`, `refresh_token`, `created_at`, `updated_at`) VALUES
(21, 'Vladimirovich Putin', 'petop@uzogef.ag', '$2b$10$DagUu9vhRpo42ovV.EOomu/SXD1b2bqFM5cO2zA2/m2CxzDVFsNDm', 'https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/439318855_955440033249199_973152025957597760_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=LpHQgBae8qYQ7kNvgF6Valw&_nc_ht=scontent.fhan14-5.fna&oh=00_AfDvxpZ7qb5hOK4tOraQ4Uhf6tfywaP8miwhJoIMSD7kPw&oe=663F0424', 0, NULL, '2024-05-06 17:53:44', '2024-05-06 17:53:44'),
(22, 'Oleksandrovych Zelensky', 'vusevakih@faaspe.bv', '$2b$10$K24CQGWqqteiuIA8i6fXEumr2b2pD8S0vhq9Ii8KZ.ymJ.10paqdC', 'https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/439244781_955440083249194_5698947090827310505_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=6ZJSAdkSDgIQ7kNvgHRjgEb&_nc_oc=AdhaxzyjNpJq4ylQPFxV_LQnQFGYw6Eig_gANGoXY9ZajHKkblnGS8NIiZZu2pTKNIPHufsvZhvIHRGJCVZdRiqx&_nc_ht=scontent.fhan14-5.fna&oh=00_AfDJM8i1jMau_AeCvHGA93NO7op8-mQ9GnLJTXPpJDQmKA&oe=663EEA8B', 0, NULL, '2024-05-06 17:53:44', '2024-05-06 17:53:44'),
(23, 'Donald Trump', 'panapso@jurdutu.na', '$2b$10$h5wYJthiFzZpIL9JVWt/0.vzlyyWB2iooW2LLJtvvdt5qRLBe62Fm', 'https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/439899973_955439856582550_7649688943408077111_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=_i74GRCq_d8Q7kNvgE0uF1u&_nc_ht=scontent.fhan14-1.fna&oh=00_AfBr3NWQE50dsFrwLDarfje22XAzpwPD9NRowbSlX58cQg&oe=663ED4CE', 0, NULL, '2024-05-06 17:53:44', '2024-05-06 17:53:44'),
(24, 'Joe Biden', 'ubo@ja.my', '$2b$10$gYn69vSxywl/7gBJRy9iV.GZ/lqXuOPBgC25qOOQSy9NWGYcbvBrS', 'https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/439306481_955440046582531_874287388954414254_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=a0wxda0BWTMQ7kNvgFABe2M&_nc_ht=scontent.fhan14-3.fna&oh=00_AfBL6vhzsRjB6XR-eNrDRpjbZ_63BujLiBFLGhQmwc-jQg&oe=663EE4FB', 0, NULL, '2024-05-06 17:53:44', '2024-05-06 17:53:44'),
(25, 'Kevin De Bruyne', 'heg@ip.bm', '$2b$10$enEfZIOUMiyfForl26kVE.GaOuSaItDcKjTyWTP40Bsritj5hhPX2', 'https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/439033035_955597579900111_4411336947982586421_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=AHw_cjMx_CsQ7kNvgH8q5m7&_nc_ht=scontent.fhan14-1.fna&oh=00_AfAIF8HHPTo3WjX3Be7Eq3YGS16KUkORW74MIY29eD_M3Q&oe=663EF878', 0, NULL, '2024-05-06 17:53:44', '2024-05-06 17:53:44'),
(26, 'Jack Grealish', 'dav@tatramaz.tf', '$2b$10$xgR1nMs7pHaK4k9xq9tZTOYPEKIofgFZc3YcD7KQa8t3yJuN/F4Oi', 'https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/439064217_955597653233437_3785896424928597150_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=U_HMhyNSZKsQ7kNvgFw_Xgv&_nc_ht=scontent.fhan14-2.fna&oh=00_AfCRDz_kritGFl4y97OSnlliWS2ovYWut4a_8WqDiraqfQ&oe=663EDC40', 0, NULL, '2024-05-06 17:53:44', '2024-05-06 17:53:44'),
(27, 'Harry Maguire', 'ipujnal@rewje.dk', '$2b$10$Hgqb6OlJkkR6xqZGOK.KnuGCnHnXxTHfHhOxSZHrTr2SDn9MAF4bK', 'https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/439336680_955597899900079_3373078296930929528_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=3tK9bn2r9JoQ7kNvgFwxBmZ&_nc_ht=scontent.fhan14-3.fna&oh=00_AfDhlmgI0VLcfS6_NH-stA6VtV22hUzZ_pYxX72p7d2RKA&oe=663ED357', 0, NULL, '2024-05-06 17:53:44', '2024-05-06 17:53:44'),
(28, 'Marcus Rashford', 'dojusaj@wugjuplov.ac', '$2b$10$EejLIbQ/QPZ8.pSbWSXfwe3JcoiTxEzRi5PPNh8kojqoEtY670ljW', 'https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/439482090_955597789900090_3757540287209476500_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=hbk7Jc7UdyEQ7kNvgGt7ouD&_nc_ht=scontent.fhan14-5.fna&oh=00_AfDYOgAb157Z8GtQvOh3OzKuU5lrdXy1sdf86hMjPm40AQ&oe=663EEC60', 0, NULL, '2024-05-06 17:53:44', '2024-05-06 17:53:44'),
(29, 'jude bellingham', 'ku@ruevubat.br', '$2b$10$AN4WEKYJXAqLnPhi8xfqXOkDeO0IhoT/onW/OqRvBOsqnBT4HhAH.', 'https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-6/439022805_955597956566740_8983211271098418381_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=FH6wrdMXVe8Q7kNvgHzKnky&_nc_ht=scontent.fhan14-4.fna&oh=00_AfDSR3ea1edi4UJWLqoVpUGfDGHZTexXap9CYyqQD1P78g&oe=663EE39B', 0, NULL, '2024-05-06 17:53:45', '2024-05-06 17:53:45'),
(30, 'Erling Haaland', 'gisuruh@osa.cy', '$2b$10$8oLvGXyneM4LFfpifpMTyuFdcqwgN42ldjJYsmtft5EfsYznjqWQe', 'https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/439064231_955597786566757_32872410429971688_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=LSWrXgvwOT0Q7kNvgGOg5Qp&_nc_ht=scontent.fhan14-1.fna&oh=00_AfBArasdszeRlicOGBo5UGytWHFtr4e1UibMST66jc3RSA&oe=663EF208', 0, NULL, '2024-05-06 17:53:45', '2024-05-06 17:53:45'),
(31, 'Lionel Messi', 'vavafa@ijuhu.kn', '$2b$10$LnLvRgAFP3tqGdgvmxp.fe5dbRgnBuRqx2OxZ0WDXLfSAukHI5cNK', 'https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/439035929_955597693233433_7281828181291637552_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BDNn6rCXaj8Q7kNvgHRAE38&_nc_ht=scontent.fhan14-3.fna&oh=00_AfDkV8V9DhIK2NyNG5k6HIIfmA_H9HOdVKoou9KAxE_Rtg&oe=663EFD0C', 0, NULL, '2024-05-06 17:53:45', '2024-05-06 17:53:45'),
(32, 'Cristiano Ronaldo', 'rowzi@jepaz.gs', '$2b$10$G0b5IvRzqfQSp9AY7BJmfOeyoI/Hrt/a0c5nlQHvfWGX25.7x39Y2', 'https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/439004645_955597846566751_1007959270420464860_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=o1SZl7Ha9_sQ7kNvgHIR8Tx&_nc_ht=scontent.fhan14-1.fna&oh=00_AfCj0PeHpKzvYqOzrGugy-9kYPUN9tfmcrDWEezFLmst4A&oe=663EDEB8', 0, NULL, '2024-05-06 17:53:45', '2024-05-06 17:53:45'),
(33, 'Tập Cận Bình', 'ka@jevanna.gy', '$2b$10$OWhhVJN9M8393dUTdcQpb.MhBaRsi5rAu41A9ZO3CvLQXv1KtZYwu', 'https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/438969530_955597663233436_1544520288961452098_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=nrC8dwKKSAIQ7kNvgFuFz6J&_nc_ht=scontent.fhan14-1.fna&oh=00_AfC4ITBdizvDCZ9bwFSijsafyeXMMj2fFrnxmNjCvn8yeA&oe=663EEE74', 0, NULL, '2024-05-06 17:53:45', '2024-05-06 17:53:45'),
(34, 'Kim Jong-un', 'me@gibjeb.do', '$2b$10$TOwf65bUC0MtHy.3WNFHIOSehTSONUBrUx4O3iWAdXKhyt8WSEBwm', 'https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/439486967_955597716566764_6310189825791067390_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=FbG83T2i0goQ7kNvgFJ5Hle&_nc_ht=scontent.fhan14-1.fna&oh=00_AfCAE2UR4MojtHep5oC188vt_njl7rZ0ng_GiR2dLgVdZg&oe=663EF24E', 0, NULL, '2024-05-06 17:53:45', '2024-05-06 17:53:45'),
(35, 'Barack Obama', 'tu@lawujucom.lb', '$2b$10$EQdFggksbkdB608F9Mah4egcKwbiolNEnjbcG70HqhpOwmfCRnA1G', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRlJ4ZwNR5h_VyPNDygNN7JhWkqdoiL3I-QJ6c6k-xo7PiAKo5u', 0, NULL, '2024-05-06 17:53:45', '2024-05-06 17:53:45'),
(36, 'Erik ten Hag', 'ce@ul.mc', '$2b$10$oLZmEG42aQ.HdhltjsfTgOCfeTpxCMjs0XoHHsPqdvOrZbz7B.Lk.', 'https://images2.thanhnien.vn/528068263637045248/2023/12/10/hlv-erik-ten-hag--1702167858165231970413.jpeg', 0, NULL, '2024-05-06 17:53:45', '2024-05-06 17:53:45'),
(37, 'Pep Guardiola', 'bihko@rutagu.tm', '$2b$10$xUqSUL6JYACDwLyNx3m/6u/kBDB5EtCos/CN9eCKlrBlR6ZqTaqca', 'https://media.bongda.com.vn/files/news/2024/05/05/thang-wolves-pep-guardiola-noi-ve-co-hoi-vo-dich-cua-arsenal-071503.jpg', 0, NULL, '2024-05-06 17:53:45', '2024-05-06 17:53:45'),
(38, 'Vinícius Júnior', 'odekerfa@vub.is', '$2b$10$mncQxSgqI42FZOTf.MjaMOHJ93nTSDnF9AO8baLWUimgc8zHAWf/K', 'https://assets.goal.com/images/v3/blt60809b0541612600/Vinicius(7).jpg?auto=webp&format=pjpg&width=3840&quality=60', 0, NULL, '2024-05-06 17:53:45', '2024-05-06 17:53:45'),
(39, 'Diogo Dalot', 'za@keishe.fr', '$2b$10$etxIjzVdpZSpcL0nwrwFvOEqNtuAcS5m1/sEEWnHZV392DI75gnhu', 'https://assets.goal.com/images/v3/blt2a699ef3c5c3b41d/GettyImages-2147774974.jpg?auto=webp&format=pjpg&width=3840&quality=60', 0, NULL, '2024-05-06 17:53:45', '2024-05-06 17:53:45'),
(40, 'Rasmus Højlund', 'mu@po.ms', '$2b$10$WX3WaN7qZzD/IUtfVcZ83OmC0XjC0EhYGHTbxhQA2UYuiCBWW6FiG', 'https://static.independent.co.uk/2023/12/26/22/b56cd771dfe6a78c65913ee815d292adY29udGVudHNlYXJjaGFwaSwxNzAzNzE2MTQ2-2.74954416.jpg', 0, NULL, '2024-05-06 17:53:45', '2024-05-06 17:53:45'),
(42, 'Bùi Quang Trung', 'trung2003@gmail.com', '$2b$10$6Z/rLMor4BMB5mBlVIpTj.gF/L42EMWpLUV..hCRjvjpzIBX5LSNy', 'https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/440101315_955444463248756_5158599800142021819_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=IsI1bX7lJfIQ7kNvgFvglWP&_nc_ht=scontent.fhan14-1.fna&oh=00_AfB_yvz9Tt8n-4DOlP-v8ggppiMerJhx7KyKwyzio-2HLg&oe=663F0BB3', 1, NULL, '2024-05-07 01:38:25', '2024-05-07 01:38:25'),
(43, 'Lương Thị Lan Anh', 'anh2003@gmail.com', '$2b$10$W0UGFU4sw7DSpSWXQVVCNeN.pXbvbgoY8Hz9U93wnEVU1zo9xSEIy', 'https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/439866630_955443329915536_5133392566597229577_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=a3I1bwadaw0Q7kNvgHMBgES&_nc_ht=scontent.fhan14-5.fna&oh=00_AfAdinkF5QzWORMFg6ul5vP7-Gm_lBiTfrYT82-dCx_g4w&oe=663F04E4', 0, NULL, '2024-05-07 01:39:36', '2024-05-07 01:39:36'),
(44, 'Hồ Anh Nam', 'nam2003@gmail.com', '$2b$10$N8z60.F/sL5/W/64C9UVm.9tYvaxOC6IIIMvIr9Jhgr9YAWKVxRgm', 'https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/439893722_955445176582018_1130611634631852061_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=m6owCQh2ho8Q7kNvgEYJTbo&_nc_ht=scontent.fhan14-3.fna&oh=00_AfC-BY2AgynnxKte4SM1Wn-KEftoL-Jx8wighTxB-BknfQ&oe=663EE2A3', 1, NULL, '2024-05-07 01:40:38', '2024-05-07 01:40:38'),
(45, 'Vũ Hữu Quý', 'quy2003@gmail.com', '$2b$10$w3wUxufcN1a0NhnGTtR3SuIS6qa6q5Y1yCP0nbco3G1A.avsC4/m2', 'https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/439893708_955458716580664_6060542418459083779_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Fyw5plcrPwUQ7kNvgHB_1Er&_nc_ht=scontent.fhan14-1.fna&oh=00_AfCv4Xj3iV249ykOI04TcmzEyzr0b_6LZdsm38T92Mslsw&oe=663EF947', 0, NULL, '2024-05-07 01:41:38', '2024-05-07 01:41:38'),
(46, 'Trần Đức Việt', 'viet2003@gmail.com', '$2b$10$9dKtb8XAc1YPa7kLK6rAYOgblml1Y/RsbOvaiE3sgOk./U1P4kAni', 'https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/439915217_955455973247605_4015613861053333696_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=c0Xhyx74wRoQ7kNvgGD7SdL&_nc_ht=scontent.fhan14-1.fna&oh=00_AfC37BvCWfFdpHuFJdvYprB2GiT3U3dTM1n60O1NZlJBPQ&oe=663EFD64', 0, NULL, '2024-05-07 01:42:20', '2024-05-07 01:42:20'),
(47, 'Nguyễn Thế Mạnh', 'manh@gmail.com', '$2b$10$WK2jW75C85yHc49xi259fuFlIO6/91GFPaXVwBTwT0SDAu3Txe.I2', 'https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/292487529_1696913964006674_6053628341048598992_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=J1hEMspjqUAQ7kNvgG76S54&_nc_ht=scontent.fhan14-2.fna&oh=00_AfCcVyKqz4LcEhXIoC4zWlGEYXSUeJoHW-QjgS8fpD8UgA&oe=663F0293', 1, NULL, '2024-05-07 01:49:56', '2024-05-07 01:49:56');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Conversations`
--
ALTER TABLE `Conversations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user1_id` (`user1_id`),
  ADD KEY `user2_id` (`user2_id`);

--
-- Indexes for table `Keys`
--
ALTER TABLE `Keys`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `Messages`
--
ALTER TABLE `Messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sender_id` (`sender_id`),
  ADD KEY `receiver_id` (`receiver_id`);

--
-- Indexes for table `Roles`
--
ALTER TABLE `Roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `SequelizeMeta`
--
ALTER TABLE `SequelizeMeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `UserRoles`
--
ALTER TABLE `UserRoles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `role_id` (`role_id`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Conversations`
--
ALTER TABLE `Conversations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Keys`
--
ALTER TABLE `Keys`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Messages`
--
ALTER TABLE `Messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `Roles`
--
ALTER TABLE `Roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `UserRoles`
--
ALTER TABLE `UserRoles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Conversations`
--
ALTER TABLE `Conversations`
  ADD CONSTRAINT `conversations_ibfk_1` FOREIGN KEY (`user1_id`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `conversations_ibfk_2` FOREIGN KEY (`user2_id`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Keys`
--
ALTER TABLE `Keys`
  ADD CONSTRAINT `keys_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Messages`
--
ALTER TABLE `Messages`
  ADD CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`sender_id`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `messages_ibfk_2` FOREIGN KEY (`receiver_id`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `UserRoles`
--
ALTER TABLE `UserRoles`
  ADD CONSTRAINT `userroles_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `userroles_ibfk_2` FOREIGN KEY (`role_id`) REFERENCES `Roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
