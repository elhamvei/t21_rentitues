-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 31, 2023 at 04:01 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rentirue`
--

-- --------------------------------------------------------

--
-- Table structure for table `appliances`
--

CREATE TABLE `appliances` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` longtext DEFAULT NULL,
  `locations_id` int(11) NOT NULL,
  `types_id` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `create_at` timestamp(1) NULL DEFAULT current_timestamp(1) ON UPDATE current_timestamp(1),
  `update_at` timestamp(1) NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `appliances`
--

INSERT INTO `appliances` (`id`, `name`, `description`, `locations_id`, `types_id`, `stock`, `price`, `user_id`, `create_at`, `update_at`) VALUES
(369, 'shoe', 'nice shoe', 37, 3, 1, 20, 71, '2023-03-30 02:03:53.5', NULL),
(370, 'garden chair', 'fancy and comfortable chair for you family gathering', 38, 3, 1, 100, 71, '2023-03-30 16:59:43.8', NULL),
(371, 'book', 'daf', 37, 2, 0, 20, 71, '2023-03-30 15:47:05.5', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `appliances_img`
--

CREATE TABLE `appliances_img` (
  `id` int(11) NOT NULL,
  `images` varchar(255) NOT NULL,
  `appliance_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `create_at` timestamp(1) NULL DEFAULT current_timestamp(1) ON UPDATE current_timestamp(1)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `appliances_img`
--

INSERT INTO `appliances_img` (`id`, `images`, `appliance_id`, `user_id`, `create_at`) VALUES
(359, 'images-1680134348346.jpeg', 365, NULL, '2023-03-29 23:59:08.3'),
(360, 'images-1680134931513.jpeg', 369, 71, '2023-03-30 00:08:51.5'),
(361, 'images-1680142683606.jpg', 370, 71, '2023-03-30 02:18:03.6'),
(362, 'images-1680191153156.jpg', 371, 71, '2023-03-30 15:45:53.1');

-- --------------------------------------------------------

--
-- Table structure for table `blacklist_token`
--

CREATE TABLE `blacklist_token` (
  `id` int(11) NOT NULL,
  `token` varchar(476) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `blacklist_token`
--

INSERT INTO `blacklist_token` (`id`, `token`) VALUES
(1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzQsIm5hbWUiOiJMYWxlIiwiZW1haWwiOiJMYWxlQGdtYWlsLmNvbSIsImltYWdlIjoiaW1hZ2UtMTY4MDEzNTIzNTkyMy5wbmciLCJyb2xlc19pZCI6MSwiaWF0IjoxNjgwMTM4Mzg3LCJleHAiOjE2ODAyMjQ3ODcsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMCJ9.mAQ_rPC0cwo_Y_99SIteev2S5yab51plzEszbynWiOE'),
(2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzEsIm5hbWUiOiJFbGhhbSIsImVtYWlsIjoiZWxoYW04NUBnbWFpbC5jb20iLCJpbWFnZSI6bnVsbCwicm9sZXNfaWQiOjEsImlhdCI6MTY4MDE0MDQwNCwiZXhwIjoxNjgwMjI2ODA0LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAifQ.fygBa5w_cTpQGy9dF62-6dLBpjjonWnCxZOZHWx9e3Y'),
(3, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzEsIm5hbWUiOiJFbGhhbSIsImVtYWlsIjoiZWxoYW04NUBnbWFpbC5jb20iLCJpbWFnZSI6bnVsbCwicm9sZXNfaWQiOjEsImlhdCI6MTY4MDE0MDUxMCwiZXhwIjoxNjgwMjI2OTEwLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAifQ.pNtj9mxyAHZBDHjUHil6Z_d7854-AnDV62imu8Pr-Mo'),
(4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzIsIm5hbWUiOiJFbGhhbSIsImVtYWlsIjoiZWxoYW1AZ21haWwuY29tIiwiaW1hZ2UiOm51bGwsInJvbGVzX2lkIjoxLCJpYXQiOjE2ODAxNDA2MTEsImV4cCI6MTY4MDIyNzAxMSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDAwIn0.I7y66Byjqt393Sui_KWiGu0D9phwQDNr_gFmvHbPyYY'),
(5, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjgsIm5hbWUiOiJFbGhhbSIsImVtYWlsIjoidmVpc291ZWlAZ21haWwuY29tIiwiaW1hZ2UiOiJpbWFnZS0xNjgwMTI3NDY5OTAxLmpwZWciLCJyb2xlc19pZCI6MywiaWF0IjoxNjgwMTQwNjgwLCJleHAiOjE2ODAyMjcwODAsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMCJ9.jH4vkdLRk8UVh1ifvFOMn3vJrObO_u0pyKeRgwaaV_s'),
(6, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzEsIm5hbWUiOiJFbGhhbSIsImVtYWlsIjoiZWxoYW04NUBnbWFpbC5jb20iLCJpbWFnZSI6bnVsbCwicm9sZXNfaWQiOjEsImlhdCI6MTY4MDE0MTQ0OCwiZXhwIjoxNjgwMjI3ODQ4LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAifQ.VnlW6djZHdCSIQK_r8idLLEoPYHXPQggTQgvsO84b5A'),
(7, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzEsIm5hbWUiOiJFbGhhbSIsImVtYWlsIjoiZWxoYW04NUBnbWFpbC5jb20iLCJpbWFnZSI6bnVsbCwicm9sZXNfaWQiOjEsImlhdCI6MTY4MDE0MjE2NywiZXhwIjoxNjgwMjI4NTY3LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAifQ.Iw8m2VG2PvstXSquBqVA6u2AbCw3tUpUqwKRAUa7520'),
(8, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzEsIm5hbWUiOiJFbGhhbSIsImVtYWlsIjoiZWxoYW04NUBnbWFpbC5jb20iLCJpbWFnZSI6bnVsbCwicm9sZXNfaWQiOjIsImlhdCI6MTY4MDE0MjM0OSwiZXhwIjoxNjgwMjI4NzQ5LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAifQ.bPHJNoi_Rj1TCIar2LEUG9EtllfmpdoFC3JIdpmajy0'),
(9, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzQsIm5hbWUiOiJMYWxlIiwiZW1haWwiOiJMYWxlQGdtYWlsLmNvbSIsImltYWdlIjoiaW1hZ2UtMTY4MDEzNTIzNTkyMy5wbmciLCJyb2xlc19pZCI6MiwiaWF0IjoxNjgwMTQyNDE5LCJleHAiOjE2ODAyMjg4MTksImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMCJ9.-7Hb9nXcT4hH9jCtLEXTg_zm3o__9ERHkLooJK2WhvI'),
(10, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzEsIm5hbWUiOiJFbGhhbSIsImVtYWlsIjoiZWxoYW04NUBnbWFpbC5jb20iLCJpbWFnZSI6ImltYWdlLTE2ODAxNDIzNzE1MDYucG5nIiwicm9sZXNfaWQiOjIsImlhdCI6MTY4MDE0MjQ0MSwiZXhwIjoxNjgwMjI4ODQxLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAifQ.dC7_6Z7soY7Fsz8YNmK7TBfp8DsMD0gdJGR53pZ_99c'),
(11, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzQsIm5hbWUiOiJMYWxlIiwiZW1haWwiOiJMYWxlQGdtYWlsLmNvbSIsImltYWdlIjoiaW1hZ2UtMTY4MDEzNTIzNTkyMy5wbmciLCJyb2xlc19pZCI6MSwiaWF0IjoxNjgwMTQyMDkyLCJleHAiOjE2ODAyMjg0OTIsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMCJ9.GK8TKiBlvvzOlkjjFINY62JNxN-SaAL6mN0fq1G46w4'),
(12, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjgsIm5hbWUiOiJFbGhhbSIsImVtYWlsIjoidmVpc291ZWlAZ21haWwuY29tIiwiaW1hZ2UiOiJpbWFnZS0xNjgwMTI3NDY5OTAxLmpwZWciLCJyb2xlc19pZCI6MywiaWF0IjoxNjgwMTQyNTcyLCJleHAiOjE2ODAyMjg5NzIsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMCJ9.hjz6pYQbSKTVKpfvQ3l9qrmbh5mLap_ob7X3nA79imw'),
(13, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzEsIm5hbWUiOiJFbGhhbSIsImVtYWlsIjoiZWxoYW04NUBnbWFpbC5jb20iLCJpbWFnZSI6ImltYWdlLTE2ODAxNDIzNzE1MDYucG5nIiwicm9sZXNfaWQiOjMsImlhdCI6MTY4MDE0MjU4NCwiZXhwIjoxNjgwMjI4OTg0LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAifQ.DgJCdyB344Oc0y5e6IQEc_ZW6Ff_tsqtS274KGXySZM'),
(14, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzQsIm5hbWUiOiJMYWxlIiwiZW1haWwiOiJMYWxlQGdtYWlsLmNvbSIsImltYWdlIjoiaW1hZ2UtMTY4MDEzNTIzNTkyMy5wbmciLCJyb2xlc19pZCI6MywiaWF0IjoxNjgwMTQyOTUwLCJleHAiOjE2ODAyMjkzNTAsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMCJ9.ZyVrDOu26EpGXBGcZpfjJR-gjspzVZCzN-9ePDqDyIU'),
(15, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjgsIm5hbWUiOiJFbGhhbSIsImVtYWlsIjoidmVpc291ZWlAZ21haWwuY29tIiwiaW1hZ2UiOiJpbWFnZS0xNjgwMTI3NDY5OTAxLmpwZWciLCJyb2xlc19pZCI6MywiaWF0IjoxNjgwMTQyNDU0LCJleHAiOjE2ODAyMjg4NTQsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMCJ9.5p8M1PMonRyAFeL0w8fuRhfbYQHp92_zm2wqtkridBM'),
(16, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzEsIm5hbWUiOiJFbGhhbSIsImVtYWlsIjoiZWxoYW04NUBnbWFpbC5jb20iLCJpbWFnZSI6ImltYWdlLTE2ODAxNDIzNzE1MDYucG5nIiwicm9sZXNfaWQiOjMsImlhdCI6MTY4MDE0NDA5NCwiZXhwIjoxNjgwMjMwNDk0LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAifQ.odvyvBfvCvfj2lHMHHRokAv0aOgnDr8C3Wyl6Kra6Xo'),
(17, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzQsIm5hbWUiOiJMYWxlIiwiZW1haWwiOiJMYWxlQGdtYWlsLmNvbSIsImltYWdlIjoiaW1hZ2UtMTY4MDEzNTIzNTkyMy5wbmciLCJyb2xlc19pZCI6MywiaWF0IjoxNjgwMTQ0MTE2LCJleHAiOjE2ODAyMzA1MTYsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMCJ9.oesoyMIz5HA9SuUshDf1kobx3kiUl6nEuHT8DwqOxM0'),
(18, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzEsIm5hbWUiOiJFbGhhbSIsImVtYWlsIjoiZWxoYW04NUBnbWFpbC5jb20iLCJpbWFnZSI6ImltYWdlLTE2ODAxNDIzNzE1MDYucG5nIiwicm9sZXNfaWQiOjMsImlhdCI6MTY4MDE0NDE0MSwiZXhwIjoxNjgwMjMwNTQxLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAifQ.ASxAl8RbiTx8CeOWQHwFNgSzdFPV6P3NRD6GeZAgkjE'),
(19, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzEsIm5hbWUiOiJFbGhhbSIsImVtYWlsIjoiZWxoYW04NUBnbWFpbC5jb20iLCJpbWFnZSI6ImltYWdlLTE2ODAxNDIzNzE1MDYucG5nIiwicm9sZXNfaWQiOjMsImlhdCI6MTY4MDE4OTQyMSwiZXhwIjoxNjgwMjc1ODIxLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAifQ.OZm6uFx9RzFbkwxvywSgeiOruI5Ve3uqXjbGvYAOAs8'),
(20, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzEsIm5hbWUiOiJFbGhhbSIsImVtYWlsIjoiZWxoYW04NUBnbWFpbC5jb20iLCJpbWFnZSI6ImltYWdlLTE2ODAxNDIzNzE1MDYucG5nIiwicm9sZXNfaWQiOjMsImlhdCI6MTY4MDE5MTEyMiwiZXhwIjoxNjgwMjc3NTIyLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAifQ.oQcCsnZ20To7KqwPvYgjIxcRzm0s12OWbzSAqgOvDGY'),
(21, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzQsIm5hbWUiOiJMYWxlIiwiZW1haWwiOiJMYWxlQGdtYWlsLmNvbSIsImltYWdlIjoiaW1hZ2UtMTY4MDEzNTIzNTkyMy5wbmciLCJyb2xlc19pZCI6MywiaWF0IjoxNjgwMTkxMjAyLCJleHAiOjE2ODAyNzc2MDIsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMCJ9.8QapUPJY709uCNVKYD9kI8VqiWlSjLIQspgV7z_wV_0'),
(22, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzEsIm5hbWUiOiJFbGhhbSIsImVtYWlsIjoiZWxoYW04NUBnbWFpbC5jb20iLCJpbWFnZSI6ImltYWdlLTE2ODAxNDIzNzE1MDYucG5nIiwicm9sZXNfaWQiOjMsImlhdCI6MTY4MDE5MTUxMiwiZXhwIjoxNjgwMjc3OTEyLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAifQ.z8JZ4WsVoYDWmlM8h9OU9behea1utTQUDHopjMB9dJc'),
(23, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzQsIm5hbWUiOiJMYWxlIiwiZW1haWwiOiJMYWxlQGdtYWlsLmNvbSIsImltYWdlIjoiaW1hZ2UtMTY4MDEzNTIzNTkyMy5wbmciLCJyb2xlc19pZCI6MywiaWF0IjoxNjgwMTkxNTQ5LCJleHAiOjE2ODAyNzc5NDksImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMCJ9.DiPeIQ_iGt66485XXcA4AphnvpDjPAsnELhlw0doEOo'),
(24, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzEsIm5hbWUiOiJFbGhhbSIsImVtYWlsIjoiZWxoYW04NUBnbWFpbC5jb20iLCJpbWFnZSI6ImltYWdlLTE2ODAxNDIzNzE1MDYucG5nIiwicm9sZXNfaWQiOjMsImlhdCI6MTY4MDE5NDEwMywiZXhwIjoxNjgwMjgwNTAzLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAifQ.3Bze2OF_r1hLya67TxZo9I-tvHWCv80pxZgb8zw_cvQ'),
(25, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzEsIm5hbWUiOiJFbGhhbSIsImVtYWlsIjoiZWxoYW04NUBnbWFpbC5jb20iLCJpbWFnZSI6ImltYWdlLTE2ODAxNDIzNzE1MDYucG5nIiwicm9sZXNfaWQiOjMsImlhdCI6MTY4MDE5NDUzNiwiZXhwIjoxNjgwMjgwOTM2LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAifQ.lSdkdzw-flwfMzl_9S9501Q7Ad1OhzOtxF3qQfyyKyo'),
(26, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjgsIm5hbWUiOiJFbGhhbSIsImVtYWlsIjoidmVpc291ZWlAZ21haWwuY29tIiwiaW1hZ2UiOiJpbWFnZS0xNjgwMTI3NDY5OTAxLmpwZWciLCJyb2xlc19pZCI6MywiaWF0IjoxNjgwMTk0NjkxLCJleHAiOjE2ODAyODEwOTEsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMCJ9.kaiDdovMWBFhSpnThuL2N6YeOCdcHsaZP26V7do1qQo'),
(27, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjgsIm5hbWUiOiJFbGhhbSIsImVtYWlsIjoidmVpc291ZWlAZ21haWwuY29tIiwiaW1hZ2UiOiJpbWFnZS0xNjgwMTI3NDY5OTAxLmpwZWciLCJyb2xlc19pZCI6MywiaWF0IjoxNjgwMTk1MzAyLCJleHAiOjE2ODAyODE3MDIsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMCJ9.AtZGCDqFgyZUGAhOhKFbQIOnUJZvxMccOJqrA_to0YE'),
(28, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzQsIm5hbWUiOiJMYWxlIiwiZW1haWwiOiJMYWxlQGdtYWlsLmNvbSIsImltYWdlIjoiaW1hZ2UtMTY4MDEzNTIzNTkyMy5wbmciLCJyb2xlc19pZCI6MywiaWF0IjoxNjgwMTk1NTAzLCJleHAiOjE2ODAyODE5MDMsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMCJ9.mdMNGoILxdCAUfzPxUvkja0vKLLDp3xG-Y6UWJ8NRyk'),
(29, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzEsIm5hbWUiOiJFbGhhbSIsImVtYWlsIjoiZWxoYW04NUBnbWFpbC5jb20iLCJpbWFnZSI6ImltYWdlLTE2ODAxNDIzNzE1MDYucG5nIiwicm9sZXNfaWQiOjMsImlhdCI6MTY4MDE5NTU1OCwiZXhwIjoxNjgwMjgxOTU4LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAifQ.N9rdptz9QVxVxj9UmFGt6GwEdAir3X-R2Aby35VgLj0'),
(30, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzQsIm5hbWUiOiJMYWxlIiwiZW1haWwiOiJMYWxlQGdtYWlsLmNvbSIsImltYWdlIjoiaW1hZ2UtMTY4MDEzNTIzNTkyMy5wbmciLCJyb2xlc19pZCI6MywiaWF0IjoxNjgwMTk1NjA1LCJleHAiOjE2ODAyODIwMDUsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMCJ9.ADjSshDm5eojJtXWpkd_z9ImeB4D8MFtWtWHz34Wtwo'),
(31, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzEsIm5hbWUiOiJFbGhhbSIsImVtYWlsIjoiZWxoYW04NUBnbWFpbC5jb20iLCJpbWFnZSI6ImltYWdlLTE2ODAxNDIzNzE1MDYucG5nIiwicm9sZXNfaWQiOjMsImlhdCI6MTY4MDE5NTgzNiwiZXhwIjoxNjgwMjgyMjM2LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAifQ.PIfZAYD4dxIHFCW_ttapBt0-DYHjoXLme1qM-mCp-H0');

-- --------------------------------------------------------

--
-- Table structure for table `genders`
--

CREATE TABLE `genders` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `genders`
--

INSERT INTO `genders` (`id`, `name`) VALUES
(1, 'male'),
(2, 'female'),
(3, 'confidential');

-- --------------------------------------------------------

--
-- Table structure for table `historys`
--

CREATE TABLE `historys` (
  `id` int(11) NOT NULL,
  `users_id` int(11) NOT NULL,
  `appliances_id` int(11) NOT NULL,
  `owner_id` int(11) DEFAULT NULL,
  `status_id` int(11) NOT NULL,
  `date` varchar(45) DEFAULT NULL,
  `payment` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `testimony` mediumtext DEFAULT NULL,
  `rating` int(11) DEFAULT NULL,
  `create_at` timestamp(1) NULL DEFAULT current_timestamp(1) ON UPDATE current_timestamp(1),
  `update_at` timestamp(1) NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `historys`
--

INSERT INTO `historys` (`id`, `users_id`, `appliances_id`, `owner_id`, `status_id`, `date`, `payment`, `quantity`, `testimony`, `rating`, `create_at`, `update_at`) VALUES
(122, 74, 370, 71, 1, '2', 400, 2, NULL, NULL, '2023-03-30 02:24:31.4', '2023-03-30 02:24:31.4'),
(123, 74, 370, 71, 2, '1', 200, 2, NULL, NULL, '2023-03-30 02:42:08.5', NULL),
(124, 74, 371, 71, 2, '3', 60, 1, NULL, NULL, '2023-03-30 15:47:05.5', NULL),
(125, 74, 370, 71, 1, '5', 500, 1, 'aaa', 3, '2023-03-30 16:11:41.0', '2023-03-30 16:11:41.0'),
(126, 74, 370, 71, 1, '5', 500, 1, 'it was good', 4, '2023-03-30 17:00:30.6', '2023-03-30 17:00:30.6');

-- --------------------------------------------------------

--
-- Table structure for table `locations`
--

CREATE TABLE `locations` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `locations`
--

INSERT INTO `locations` (`id`, `name`, `user_id`) VALUES
(33, 'Toronto', 68),
(34, 'Richmond Hill', 68),
(35, 'North York', 68),
(36, 'tehran', 71),
(37, '225 Merton Street', 71),
(38, '123 Young Street', 71),
(39, '125 Spadaina', 74);

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`) VALUES
(1, 'admin'),
(2, 'user'),
(3, 'owner');

-- --------------------------------------------------------

--
-- Table structure for table `status`
--

CREATE TABLE `status` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `status`
--

INSERT INTO `status` (`id`, `name`) VALUES
(1, 'Has been returned'),
(2, 'Not been returned');

-- --------------------------------------------------------

--
-- Table structure for table `types`
--

CREATE TABLE `types` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `types`
--

INSERT INTO `types` (`id`, `name`) VALUES
(1, 'kitchen'),
(2, 'electronic'),
(3, 'yard');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `image` varchar(150) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `active_year` year(4) DEFAULT NULL,
  `gender_id` int(11) NOT NULL,
  `address` varchar(150) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `roles_id` int(11) NOT NULL,
  `pin_verify` int(11) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `pin_reset_pass` int(11) DEFAULT NULL,
  `create_at` timestamp(1) NULL DEFAULT current_timestamp(1) ON UPDATE current_timestamp(1),
  `update_at` timestamp(1) NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `image`, `phone`, `active_year`, `gender_id`, `address`, `dob`, `roles_id`, `pin_verify`, `status`, `pin_reset_pass`, `create_at`, `update_at`) VALUES
(68, 'Elham', 'veisouei@gmail.com', '$2b$10$AaXYT1Pj5olaCH0x1ZtSNeePzIAaCwLYDcZ5waUxcmjSdcEPKEBqS', 'image-1680127469901.jpeg', '6472362131', 2022, 3, '', NULL, 3, NULL, 'active', NULL, '2023-03-29 22:04:29.9', '2023-03-29 22:04:29.9'),
(71, 'Elham', 'elham85@gmail.com', '$2b$10$AaXYT1Pj5olaCH0x1ZtSNeePzIAaCwLYDcZ5waUxcmjSdcEPKEBqS', 'image-1680198342806.jpeg', '', 2023, 3, '', NULL, 3, NULL, 'active', NULL, '2023-03-30 17:45:42.8', '2023-03-30 17:45:42.8'),
(72, 'Elham', 'elham@gmail.com', '$2b$10$2no3LZQsw4EkEl6JDDi80eTx9VybF1m.2TwoxxYCiyAKDmgFId6Ue', NULL, '', 2023, 3, NULL, NULL, 3, NULL, 'active', NULL, '2023-03-30 18:26:00.8', '2023-03-30 00:13:55.9'),
(73, 'Elham', 'elham11@gmail.com', '$2b$10$Ycv/0dnQJqHGqX4JMF6G/OGe.aPAZBFsq1UN/vsZTUwo.AKJgMtx6', NULL, '', 2023, 3, NULL, NULL, 3, NULL, 'active', NULL, '2023-03-30 18:25:57.7', '2023-03-30 00:13:55.9'),
(74, 'Lale', 'Lale@gmail.com', '$2b$10$HZ5oPlzOUqWjXcSBZU4wFeGK6cZvV8BMUL5xJTsaqiM1F5qSpuDb.', 'image-1680135235923.png', '', 2023, 3, '', NULL, 3, NULL, 'active', NULL, '2023-03-30 02:15:53.9', '2023-03-30 00:13:55.9');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appliances`
--
ALTER TABLE `appliances`
  ADD PRIMARY KEY (`id`),
  ADD KEY `types_fk` (`types_id`);

--
-- Indexes for table `appliances_img`
--
ALTER TABLE `appliances_img`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `blacklist_token`
--
ALTER TABLE `blacklist_token`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `genders`
--
ALTER TABLE `genders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `historys`
--
ALTER TABLE `historys`
  ADD PRIMARY KEY (`id`),
  ADD KEY `vehicle_key_idx` (`appliances_id`),
  ADD KEY `status_key_idx` (`status_id`),
  ADD KEY `user_key_idx` (`users_id`);

--
-- Indexes for table `locations`
--
ALTER TABLE `locations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_fk_idx` (`user_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `types`
--
ALTER TABLE `types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `gender_id_idx` (`gender_id`),
  ADD KEY `roles_id_idx` (`roles_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `appliances`
--
ALTER TABLE `appliances`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=372;

--
-- AUTO_INCREMENT for table `appliances_img`
--
ALTER TABLE `appliances_img`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=363;

--
-- AUTO_INCREMENT for table `blacklist_token`
--
ALTER TABLE `blacklist_token`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `genders`
--
ALTER TABLE `genders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `historys`
--
ALTER TABLE `historys`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=127;

--
-- AUTO_INCREMENT for table `locations`
--
ALTER TABLE `locations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `status`
--
ALTER TABLE `status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `types`
--
ALTER TABLE `types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=76;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `appliances`
--
ALTER TABLE `appliances`
  ADD CONSTRAINT `types_id` FOREIGN KEY (`types_id`) REFERENCES `types` (`id`);

--
-- Constraints for table `historys`
--
ALTER TABLE `historys`
  ADD CONSTRAINT `status_id` FOREIGN KEY (`status_id`) REFERENCES `status` (`id`),
  ADD CONSTRAINT `user_id` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `vehicle_id` FOREIGN KEY (`appliances_id`) REFERENCES `appliances` (`id`);

--
-- Constraints for table `locations`
--
ALTER TABLE `locations`
  ADD CONSTRAINT `user_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `gender_id` FOREIGN KEY (`gender_id`) REFERENCES `genders` (`id`),
  ADD CONSTRAINT `roles_id` FOREIGN KEY (`roles_id`) REFERENCES `roles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
