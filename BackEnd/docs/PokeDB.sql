-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 18-07-2022 a las 22:19:22
-- Versión del servidor: 5.7.34
-- Versión de PHP: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pokeApi`
--
DROP DATABASE IF EXISTS `pokeApi`;
CREATE DATABASE `pokeApi`;
USE `pokeApi`;

CREATE DATABASE IF NOT EXISTS `pokeApi` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `pokeApi`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pokeFavorites`
--

CREATE TABLE `pokeFavorites` (
  `id` int(11) NOT NULL,
  `pokemon` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pokeFavorites_users`
--

CREATE TABLE `pokeFavorites_users` (
  `id` int(11) NOT NULL,
  `pokemonId` int(11) NOT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `userName` varchar(100) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `deletedAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `pokeFavorites`
--
ALTER TABLE `pokeFavorites`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pokeFavorites_users`
--
ALTER TABLE `pokeFavorites_users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pokemonId` (`pokemonId`),
  ADD KEY `userId` (`userId`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `pokeFavorites_users`
--
ALTER TABLE `pokeFavorites_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `pokeFavorites_users`
--
ALTER TABLE `pokeFavorites_users`
  ADD CONSTRAINT `pokefavorites_users_ibfk_1` FOREIGN KEY (`pokemonId`) REFERENCES `pokeFavorites` (`id`),
  ADD CONSTRAINT `pokefavorites_users_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
