-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 11, 2024 at 01:51 PM
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
(13, 44, 47, 'U2FsdGVkX1/8I5z+WcnFZwmMbR0S9Agop+NVqPmhVhVf5Nl7xvKqUC6C4/BTN5b+rWVIp1B1KOM=', NULL, '2024-05-07 02:04:54'),
(14, 47, 44, 'U2FsdGVkX1/zpNAwx/CLVoofSFIw9DKhixdCtmUAfIxQ8Zirt98yMEJe46jc0CdRDrFiB3N7hAqh1HZlO4IBWQ==', NULL, '2024-05-11 18:24:55'),
(15, 47, 44, 'U2FsdGVkX1/t/vmRtgEbzUum3qmpm2PwpirEvOgD9bh/oH3+1ccrK6ER13G9SHnjWQtQp1Hj2VPsAr81mLrVc16T5fYzzpDd+Hnl0ui8VnM=', NULL, '2024-05-11 18:25:01'),
(16, 44, 47, 'U2FsdGVkX19IufROBZiCp7OirtcrUx32lIJn1F6WZWuquzeFPqUjTgs9lKzDNk/hp2W6l0c+5N1Fet8sQAWcdA==', NULL, '2024-05-11 18:25:48'),
(17, 44, 47, 'U2FsdGVkX1/zykejdt1j0RCWK5g6tMAQlfNVoySR5HtNZnZlAQh9fljuCwBENJwh5xQLQJI7w6Rptq69XQukHw==', NULL, '2024-05-11 18:26:09'),
(18, 47, 44, 'U2FsdGVkX19iHKXjs+Ru5TOB5m9bnwqndjGEiEkLUaY8hQZC7LqFgsFl+QwvfrIXldrJ96Bk4q0=', NULL, '2024-05-11 18:26:21'),
(19, 44, 47, 'U2FsdGVkX1+GVx3keelCjoY3aCZB6hiCVlSTZuBoA3vZIx/vRFXppdI/+uQueOmHMw8evQOYU1I=', NULL, '2024-05-11 18:26:27'),
(20, 47, 44, 'U2FsdGVkX1/L/48RynkzWTZj08gS97RYxAHbtqpliS9mJizxFxcbKOPCcTMSD/bcz8wXzlL+q2GJaQ36fPcl3A==', NULL, '2024-05-11 18:26:37'),
(21, 44, 47, 'U2FsdGVkX1/DFk5JIYI8y3rydftAKCJUV54zmhE2ANH3/ABa+FptCuFQXAb8w6KTc4ZkZfj8i1Y=', NULL, '2024-05-11 18:26:40'),
(22, 47, 44, 'U2FsdGVkX19FkQ2c49H21cSxyoqxNLWj2+kekLu7+OsWXLD1hmRcdUfb9ipyPXzFcXkFTbEj27RK0lf5N1EqOg==', NULL, '2024-05-11 18:26:44'),
(23, 44, 47, 'U2FsdGVkX1+o33iCkA3UtcYUV0gQxp3h7ePc1OESo5K5Fe2kyfJfm4l1yKv6UTXl9zvUGeSyyYw=', NULL, '2024-05-11 18:26:48'),
(24, 44, 47, 'U2FsdGVkX19dN0G3NXIz42saVAgGVHNSlLpHHwjX9fSpgTcerRa7MrrNwdQ7NJs2fU/6+bGDjZxabdyKs/eBcsd380BDOa4kYJOtnNETkOc9n5lTnlup6dBaSiVKoy24', NULL, '2024-05-11 18:27:47'),
(25, 47, 44, 'U2FsdGVkX1/1BOoe4PTzx+AN4nm9qkjHc2MnpicjKSHaN11HK+O1iwo2G/EQZtC3UISsTbb0ps0=', NULL, '2024-05-11 18:27:51'),
(26, 44, 42, 'U2FsdGVkX1+jqCFVwOrUqppLJNHi64dv32NKi/u+ETkxihwKAtkg2YYNjszDJbcKeXbD3bV3TFU=', NULL, '2024-05-11 18:30:58'),
(27, 42, 44, 'U2FsdGVkX19JjbfKqqRQE/hWCX0cywjfoNpf6m1zHBjCzWQWYmu+TpHByPsFEmEpUeyaI6yeKblDShabLLsY8PZ3O7UuXHUvqGizd8SqvK/ZaCcHX8WRkA==', NULL, '2024-05-11 18:31:12'),
(28, 44, 42, 'U2FsdGVkX1/noEi7mT7xGZfXYYs/ncd7FpZutTWdY35ri3KFCHDiic2qn1HVf4YCvFN6s5OmLo+9pAztEA97hB0DWNH1UsYZe6oyttVpJk8+Evzx1iH/dw==', NULL, '2024-05-11 18:31:31'),
(29, 44, 42, 'U2FsdGVkX1+ZSP0p/63FPlAKtnem3xQgCYtRDD8XdnbjTED0w5ZWtui+UZQ7wABCD1IC4vleP6Qp6UCBzz806N6bnCZNECZQ/rRLMfewBtCPNCNSIjhDpZ/nmtulnTfU', NULL, '2024-05-11 18:31:42'),
(30, 42, 44, 'U2FsdGVkX1+vSEeghmFKdZLqN0pzn4wfxmw/nSCA/9gPBB+LwDGj4XkMIm2WeLwXu4iwe4/dLU4=', NULL, '2024-05-11 18:31:46'),
(31, 42, 47, 'U2FsdGVkX189YfcmDQMgpbIutlyPLZHDvZS5NLjgGvUPA0+BwOPJA6nhlmYeHab0Hl2Qqj+RfxA=', NULL, '2024-05-11 18:31:51'),
(32, 47, 42, 'U2FsdGVkX1868ksO+l6iac6WUSuavvGAVYZiKJBaiw+sTYpRxElUVue5P2QyXihEJPTPwQVaHCk=', NULL, '2024-05-11 18:32:14'),
(33, 47, 44, 'U2FsdGVkX1/VSwQDeRkUOIqU0LsGu/VVm1XPOltmjRQ+ewvxfkotIgQlBu7Q27XKIBj0TXt/NmZDI/WxEclO55BwncM0vLd13+1EB25aTlqt98aWSQJFFn8zSalLUGc/OjMSc0rOeEARUH8IDEtKlw==', NULL, '2024-05-11 18:35:44'),
(34, 44, 47, 'U2FsdGVkX1//mkg3+EUgNI9U0CufD6+00RHXxohilWqpEyhvgEjyTp3YuS9qPOncc85yiPIfXo6XUHnuzouKBsw0Ft/OcwRRL4Gp5g7TdQY=', NULL, '2024-05-11 18:35:56'),
(35, 47, 44, 'U2FsdGVkX19MP5cP/qISGAflWf5tQCm8m2KukMdGq7HFp1kfZeVUxW2XmFeaFP29XfuBRNLNSfYzkC8ocA0KjU6juow8tr1Oa50fyPDCvpg=', NULL, '2024-05-11 18:36:01'),
(36, 47, 44, 'U2FsdGVkX1/jG7CaNSIMlQ3bZGgjmBBDexW0/2xY7Db9kiNODQYRujmai1KR4Yama7yCbZhE4A3wLaPVdMUFEOKsSf/yG2OYwXoTwnlOByxj2sQqZheOMPc1EmjI61+w', NULL, '2024-05-11 18:36:25'),
(37, 44, 47, 'U2FsdGVkX1+OvJsT0o3axGj7HJC0Vy3beAQN7l9XeqMC67bmh2eo3IsTe7VmGm+06o7oidkiBfU=', NULL, '2024-05-11 18:36:28'),
(38, 44, 47, 'U2FsdGVkX1+piwUlEaO9XjWyqoIUOYRjlGxNZNk8+UO/S37Zt+Ir+oz/0aG0WUBAu8TVfZPLO2CHN/3jAESIvgmO43CDhgzuDZ6Gk4i4BuU=', NULL, '2024-05-11 18:37:39'),
(39, 47, 44, 'U2FsdGVkX1/xIO0Revf0IlxCczahIP+3VqGmKfpMBUPsGBgRqXpbvW7ZL0CkHPMH34KP77bQBHN2/wkpyBe1YA==', NULL, '2024-05-11 18:37:56'),
(40, 47, 42, 'U2FsdGVkX1+68n0g2Zik5lwTMbZ3EuIQrCCpxD6Jam8r+iY/JHmFMaNPiBlRnEQhlecEABO63+7IU16bpVW2vNszjcD+HKdSJ01Air9JJZgSRm9so3f0Zn9RdF+qtF4P', NULL, '2024-05-11 18:38:23'),
(41, 42, 47, 'U2FsdGVkX1/49Z8AmEM9aZ3FurjXy67ltjPGyAN25bjUqrTgu42evRnmzIrh1DRHnWXsQtk6HSw=', NULL, '2024-05-11 18:38:32'),
(42, 42, 47, 'U2FsdGVkX1/GHBNOGMtjVtD877C1UA0EecQu1SHhhPFIQDYCO+ZIsjQiosLv7aQXDugjqJYyHe9fqwzcJSy56w==', NULL, '2024-05-11 18:39:00'),
(43, 47, 42, 'U2FsdGVkX18WdqNospK/dAFx+hgCoVknalLgm3RtNYQ481eslbGv36THn7bFwT9Htt88wpce82k=', NULL, '2024-05-11 18:39:07');

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
(47, 47, 2, '2024-05-07 01:49:56', '2024-05-07 01:49:56'),
(48, 48, 2, '2024-05-11 18:11:58', '2024-05-11 18:11:58');

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
(21, 'Vladimirovich Putin', 'petop@uzogef.ag', '$2b$10$DagUu9vhRpo42ovV.EOomu/SXD1b2bqFM5cO2zA2/m2CxzDVFsNDm', 'https://cdnmedia.baotintuc.vn/Upload/G5r0l6AdtRt8AnPUeQGMA/files/2023/11/0711/0711-putin.jpeg', 0, NULL, '2024-05-06 17:53:44', '2024-05-06 17:53:44'),
(22, 'Oleksandrovych Zelensky', 'vusevakih@faaspe.bv', '$2b$10$K24CQGWqqteiuIA8i6fXEumr2b2pD8S0vhq9Ii8KZ.ymJ.10paqdC', 'https://image.plo.vn/w1000/Uploaded/2024/zngube/2024_05_05/nga-dua-ong-zelensky-vao-danh-sach-truy-na-2853.jpg.webp', 0, NULL, '2024-05-06 17:53:44', '2024-05-06 17:53:44'),
(23, 'Donald Trump', 'panapso@jurdutu.na', '$2b$10$h5wYJthiFzZpIL9JVWt/0.vzlyyWB2iooW2LLJtvvdt5qRLBe62Fm', 'https://cdnphoto.dantri.com.vn/hbc4xTTCIk9-zacD7m7Gs359rj8=/thumb_w/1020/2024/05/03/trumpgetty-1714719773888.jpg', 0, NULL, '2024-05-06 17:53:44', '2024-05-06 17:53:44'),
(24, 'Joe Biden', 'ubo@ja.my', '$2b$10$gYn69vSxywl/7gBJRy9iV.GZ/lqXuOPBgC25qOOQSy9NWGYcbvBrS', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ3Kpw2-VTvpgvnekgy3PhudjpQ01pzwZYxTzU1YN4NgO1CcW46', 0, NULL, '2024-05-06 17:53:44', '2024-05-06 17:53:44'),
(25, 'Kevin De Bruyne', 'heg@ip.bm', '$2b$10$enEfZIOUMiyfForl26kVE.GaOuSaItDcKjTyWTP40Bsritj5hhPX2', 'https://assets.goal.com/images/v3/bltd6ca767e2465eb1f/Kevin_De_Bruyne_Manchester_City_Southampton_2022-23.png?auto=webp&format=pjpg&width=3840&quality=60', 0, NULL, '2024-05-06 17:53:44', '2024-05-06 17:53:44'),
(26, 'Jack Grealish', 'dav@tatramaz.tf', '$2b$10$xgR1nMs7pHaK4k9xq9tZTOYPEKIofgFZc3YcD7KQa8t3yJuN/F4Oi', 'https://images.ps-aws.com/c?url=https%3A%2F%2Fimages.teamtalk.com%2Fcontent%2Fuploads%2F2024%2F04%2F24180019%2Fman-city-winger-jack-grealish-has-been-tipped-to-leave-1320x742.jpg', 0, NULL, '2024-05-06 17:53:44', '2024-05-06 17:53:44'),
(27, 'Harry Maguire', 'ipujnal@rewje.dk', '$2b$10$Hgqb6OlJkkR6xqZGOK.KnuGCnHnXxTHfHhOxSZHrTr2SDn9MAF4bK', 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQO_i56l-MByvN4XvPSnd9qf9uNFCwe1tY0vWDZkX-_zw6KcfldXNKsk5qbm8BRjP8_U2y4VEvlvJ_UDVA', 0, NULL, '2024-05-06 17:53:44', '2024-05-06 17:53:44'),
(28, 'Marcus Rashford', 'dojusaj@wugjuplov.ac', '$2b$10$EejLIbQ/QPZ8.pSbWSXfwe3JcoiTxEzRi5PPNh8kojqoEtY670ljW', 'https://images.ps-aws.com/c?url=https%3A%2F%2Fd2x51gyc4ptf2q.cloudfront.net%2Fcontent%2Fuploads%2F2024%2F03%2F04120820%2FMarcus-Rashford-is-as-confused-as-us.jpg', 0, NULL, '2024-05-06 17:53:44', '2024-05-06 17:53:44'),
(29, 'jude bellingham', 'ku@ruevubat.br', '$2b$10$AN4WEKYJXAqLnPhi8xfqXOkDeO0IhoT/onW/OqRvBOsqnBT4HhAH.', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/25th_Laureus_World_Sports_Awards_-_240422_205212_%28cropped%29.jpg/220px-25th_Laureus_World_Sports_Awards_-_240422_205212_%28cropped%29.jpg', 0, NULL, '2024-05-06 17:53:45', '2024-05-06 17:53:45'),
(30, 'Erling Haaland', 'gisuruh@osa.cy', '$2b$10$8oLvGXyneM4LFfpifpMTyuFdcqwgN42ldjJYsmtft5EfsYznjqWQe', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPn6ketHSgSWB-i2eq3VWbcySMdmHe6cXhggPmjTWFS8jq-tgHuRoRLSEu10-nFK5vXec&usqp=CAU', 0, NULL, '2024-05-06 17:53:45', '2024-05-06 17:53:45'),
(31, 'Lionel Messi', 'vavafa@ijuhu.kn', '$2b$10$LnLvRgAFP3tqGdgvmxp.fe5dbRgnBuRqx2OxZ0WDXLfSAukHI5cNK', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQHnhWFBFpqpDEQE_DyEaYEXHwa8QY4mAsBTeZaif0XvmL1sXI2', 0, NULL, '2024-05-06 17:53:45', '2024-05-06 17:53:45'),
(32, 'Cristiano Ronaldo', 'rowzi@jepaz.gs', '$2b$10$G0b5IvRzqfQSp9AY7BJmfOeyoI/Hrt/a0c5nlQHvfWGX25.7x39Y2', 'https://assets.goal.com/images/v3/bltcb938010210e6cd4/Cristiano_Ronaldo_Portugal_2023.jpg?auto=webp&format=pjpg&width=3840&quality=60', 0, NULL, '2024-05-06 17:53:45', '2024-05-06 17:53:45'),
(33, 'Tập Cận Bình', 'ka@jevanna.gy', '$2b$10$OWhhVJN9M8393dUTdcQpb.MhBaRsi5rAu41A9ZO3CvLQXv1KtZYwu', 'https://vtv1.mediacdn.vn/thumb_w/640/562122370168008704/2023/12/11/vnapotaltongbithuchutichtrungquoctapcanbinhsethamcapnhanuocdenvietnam7118465-1702336312428327312784.jpg', 0, NULL, '2024-05-06 17:53:45', '2024-05-06 17:53:45'),
(34, 'Kim Jong-un', 'me@gibjeb.do', '$2b$10$TOwf65bUC0MtHy.3WNFHIOSehTSONUBrUx4O3iWAdXKhyt8WSEBwm', 'https://cdn.tuoitre.vn/thumb_w/480/2021/2/18/kim-jong-un-president-16136163341331889429222.jpg', 0, NULL, '2024-05-06 17:53:45', '2024-05-06 17:53:45'),
(35, 'Barack Obama', 'tu@lawujucom.lb', '$2b$10$EQdFggksbkdB608F9Mah4egcKwbiolNEnjbcG70HqhpOwmfCRnA1G', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRlJ4ZwNR5h_VyPNDygNN7JhWkqdoiL3I-QJ6c6k-xo7PiAKo5u', 0, NULL, '2024-05-06 17:53:45', '2024-05-06 17:53:45'),
(36, 'Erik ten Hag', 'ce@ul.mc', '$2b$10$oLZmEG42aQ.HdhltjsfTgOCfeTpxCMjs0XoHHsPqdvOrZbz7B.Lk.', 'https://images2.thanhnien.vn/528068263637045248/2023/12/10/hlv-erik-ten-hag--1702167858165231970413.jpeg', 0, NULL, '2024-05-06 17:53:45', '2024-05-06 17:53:45'),
(37, 'Pep Guardiola', 'bihko@rutagu.tm', '$2b$10$xUqSUL6JYACDwLyNx3m/6u/kBDB5EtCos/CN9eCKlrBlR6ZqTaqca', 'https://media.bongda.com.vn/files/news/2024/05/05/thang-wolves-pep-guardiola-noi-ve-co-hoi-vo-dich-cua-arsenal-071503.jpg', 0, NULL, '2024-05-06 17:53:45', '2024-05-06 17:53:45'),
(38, 'Vinícius Júnior', 'odekerfa@vub.is', '$2b$10$mncQxSgqI42FZOTf.MjaMOHJ93nTSDnF9AO8baLWUimgc8zHAWf/K', 'https://assets.goal.com/images/v3/blt60809b0541612600/Vinicius(7).jpg?auto=webp&format=pjpg&width=3840&quality=60', 0, NULL, '2024-05-06 17:53:45', '2024-05-06 17:53:45'),
(39, 'Diogo Dalot', 'za@keishe.fr', '$2b$10$etxIjzVdpZSpcL0nwrwFvOEqNtuAcS5m1/sEEWnHZV392DI75gnhu', 'https://assets.goal.com/images/v3/blt2a699ef3c5c3b41d/GettyImages-2147774974.jpg?auto=webp&format=pjpg&width=3840&quality=60', 0, NULL, '2024-05-06 17:53:45', '2024-05-06 17:53:45'),
(40, 'Rasmus Højlund', 'mu@po.ms', '$2b$10$WX3WaN7qZzD/IUtfVcZ83OmC0XjC0EhYGHTbxhQA2UYuiCBWW6FiG', 'https://static.independent.co.uk/2023/12/26/22/b56cd771dfe6a78c65913ee815d292adY29udGVudHNlYXJjaGFwaSwxNzAzNzE2MTQ2-2.74954416.jpg', 0, NULL, '2024-05-06 17:53:45', '2024-05-06 17:53:45'),
(42, 'Bùi Quang Trung', 'trung2003@gmail.com', '$2b$10$6Z/rLMor4BMB5mBlVIpTj.gF/L42EMWpLUV..hCRjvjpzIBX5LSNy', 'https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/440101315_955444463248756_5158599800142021819_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=hBat0OY50psQ7kNvgFxgRfT&_nc_ht=scontent.fhan14-1.fna&oh=00_AYDPn9_PUymXEx5i2ehMTbAKgQ8q-3LmBaDiNNJYQqHFvw&oe=664532B3', 1, NULL, '2024-05-07 01:38:25', '2024-05-07 01:38:25'),
(43, 'Lương Thị Lan Anh', 'anh2003@gmail.com', '$2b$10$W0UGFU4sw7DSpSWXQVVCNeN.pXbvbgoY8Hz9U93wnEVU1zo9xSEIy', 'https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/441046894_1120145742556663_9134806543699341890_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeECGlP3t0ekMAZd5I3jMN27V7eYCINL0_9Xt5gIg0vT_8U3AKK3mWNuTAh3Y8ueXgRe2TNr8CwPdeNZ_NM3dtT6&_nc_ohc=78cXxjAyTkIQ7kNvgHsIuzs&_nc_ht=scontent.fhan14-1.fna&oh=00_AYDgEf4FkXRwYQhKEFxhBC9fezhm6YwuTlhblI_6IoPi6A&oe=664537ED', 0, NULL, '2024-05-07 01:39:36', '2024-05-07 01:39:36'),
(44, 'Hồ Anh Nam', 'nam2003@gmail.com', '$2b$10$N8z60.F/sL5/W/64C9UVm.9tYvaxOC6IIIMvIr9Jhgr9YAWKVxRgm', 'https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/439893722_955445176582018_1130611634631852061_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=KdiIanZC0q8Q7kNvgGcqAqa&_nc_ht=scontent.fhan14-3.fna&oh=00_AYA-fgID96ObDExpXl32gyXMCrDTsr-qhK0rc0dsc6IIPw&oe=664541E3', 1, NULL, '2024-05-07 01:40:38', '2024-05-07 01:40:38'),
(45, 'Vũ Hữu Quý', 'quy2003@gmail.com', '$2b$10$w3wUxufcN1a0NhnGTtR3SuIS6qa6q5Y1yCP0nbco3G1A.avsC4/m2', 'https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/412427509_1089646885564530_3991854811964134887_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF-TKHzWczISUpOFw0FTW8fupb3eBGcFP-6lvd4EZwU_zjV_aSYdPm3kVAoeu3784d7I0uZ9EDm5kPc7zlgv8kI&_nc_ohc=eQAvleVBwZAQ7kNvgGS3sor&_nc_ht=scontent.fhan14-3.fna&oh=00_AYAJtcxtt149EOK8_4uKDY27A-Hd4nb8JoUHeVi1Eh4WTg&oe=66451F74', 0, NULL, '2024-05-07 01:41:38', '2024-05-07 01:41:38'),
(46, 'Trần Đức Việt', 'viet2003@gmail.com', '$2b$10$9dKtb8XAc1YPa7kLK6rAYOgblml1Y/RsbOvaiE3sgOk./U1P4kAni', 'https://scontent.fhan14-4.fna.fbcdn.net/v/t1.6435-9/195622292_486701072402298_6082097208972739477_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE4BtuB6Q9t49bcTTfdDSgNASY3FYT7xjQBJjcVhPvGNHKsTjg4v_A6Nh5V-UPb1JIaQOJX2AgZaHAM0j0NCHda&_nc_ohc=CmG3hqHzdZ0Q7kNvgFefW54&_nc_ht=scontent.fhan14-4.fna&oh=00_AYD6Oo4iTETyfwfoBAXpXKXnN53poYjhcj5Ia2U7Rx4XDQ&oe=6666E446', 0, NULL, '2024-05-07 01:42:20', '2024-05-07 01:42:20'),
(47, 'Nguyễn Thế Mạnh', 'manh@gmail.com', '$2b$10$WK2jW75C85yHc49xi259fuFlIO6/91GFPaXVwBTwT0SDAu3Txe.I2', 'https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/292487529_1696913964006674_6053628341048598992_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHMsy4ExzddAx7vjd8zsBNXVyRW6X6ffdlXJFbpfp992Y3l6maW74gAzhmS6WGsapptk5_RJZtparfBfioDM4vq&_nc_ohc=7rNPqYXtUWwQ7kNvgE_LH0S&_nc_ht=scontent.fhan14-2.fna&oh=00_AYB_BzrcQkDlC6smQM9mGElYOEIoPIunArW_VL6n6hklZA&oe=66452993', 0, NULL, '2024-05-07 01:49:56', '2024-05-07 01:49:56'),
(48, 'Nguyễn Minh Hải', 'hai@gmail.com', '$2b$10$8z6khxo.1xFChwiMrnoLQuEae1z2SEqls/d5rl1HZpadQXWZW2QvK', 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcR6m4JKReDqmK2WsxdLkFVU-YdZijaJZSb7dTXmetV5ocRzkeMVY-RJ5WRAequsrAjOn36hxoY-9t2lrTo', 0, NULL, '2024-05-11 18:11:58', '2024-05-11 18:11:58');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `Roles`
--
ALTER TABLE `Roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `UserRoles`
--
ALTER TABLE `UserRoles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

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
