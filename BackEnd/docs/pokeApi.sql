-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-10-2022 a las 18:05:22
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pokeapi`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pokefavorites`
--

CREATE TABLE `pokefavorites` (
  `id` int(11) NOT NULL,
  `pokemon` varchar(100) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` date DEFAULT NULL,
  `deletedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `pokefavorites`
--

INSERT INTO `pokefavorites` (`id`, `pokemon`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(13, '20', '2022-09-28 21:58:44', '2022-09-28', '2022-10-06'),
(14, '11', '2022-10-04 19:20:48', '2022-10-04', NULL),
(15, '2', '2022-10-04 19:22:47', '2022-10-04', '2022-10-06'),
(16, '23', '2022-10-04 19:23:03', '2022-10-04', NULL),
(17, '16', '2022-10-04 19:40:00', '2022-10-04', NULL),
(18, '2', '2022-10-04 20:03:10', '2022-10-04', NULL),
(19, '18', '2022-10-04 20:10:19', '2022-10-04', NULL),
(20, '19', '2022-10-04 20:30:21', '2022-10-04', '2022-10-06'),
(21, '3', '2022-10-04 20:31:03', '2022-10-04', '2022-10-06'),
(22, '1', '2022-10-04 20:31:33', '2022-10-04', '2022-10-06'),
(23, '1', '2022-10-13 19:38:33', '2022-10-13', NULL),
(24, '1', '2022-10-17 15:57:26', '2022-10-17', NULL),
(25, '4', '2022-10-17 15:57:57', '2022-10-17', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pokefavorites_users`
--

CREATE TABLE `pokefavorites_users` (
  `id` int(11) NOT NULL,
  `pokemonId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` date DEFAULT NULL,
  `deletedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `pokefavorites_users`
--

INSERT INTO `pokefavorites_users` (`id`, `pokemonId`, `userId`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 13, 9, '2022-09-28 21:58:44', '2022-09-28', NULL),
(2, 14, 9, '2022-10-04 19:20:48', '2022-10-04', NULL),
(3, 15, 9, '2022-10-04 19:22:47', '2022-10-04', NULL),
(4, 16, 9, '2022-10-04 19:23:03', '2022-10-04', NULL),
(5, 17, 9, '2022-10-04 19:40:00', '2022-10-04', NULL),
(6, 18, 10, '2022-10-04 20:03:10', '2022-10-04', NULL),
(7, 19, 10, '2022-10-04 20:10:19', '2022-10-04', NULL),
(8, 20, 9, '2022-10-04 20:30:21', '2022-10-04', NULL),
(9, 21, 9, '2022-10-04 20:31:03', '2022-10-04', NULL),
(10, 22, 9, '2022-10-04 20:31:33', '2022-10-04', NULL),
(11, 23, 11, '2022-10-13 19:38:33', '2022-10-13', NULL),
(12, 24, 9, '2022-10-17 15:57:26', '2022-10-17', NULL),
(13, 25, 9, '2022-10-17 15:57:57', '2022-10-17', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `poketrivia`
--

CREATE TABLE `poketrivia` (
  `id` int(11) NOT NULL,
  `question` varchar(200) NOT NULL,
  `answer1` varchar(200) NOT NULL,
  `answer2` varchar(200) NOT NULL,
  `answer3` varchar(200) NOT NULL,
  `answer4` varchar(200) NOT NULL,
  `correctAnswer` varchar(200) NOT NULL,
  `image` varchar(200) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` date DEFAULT NULL,
  `deletedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `poketrivia`
--

INSERT INTO `poketrivia` (`id`, `question`, `answer1`, `answer2`, `answer3`, `answer4`, `correctAnswer`, `image`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, '¿Qué combinación de tipos tiene Gyarados?', 'Agua y Dragón', 'Agua', 'Agua y volador', 'Dragón y Hielo', 'Agua y volador', NULL, '2022-09-23 18:08:53', '2022-10-17', NULL),
(2, '¿Quién es el creador de Pokémon?', 'Keiji Inafune', 'Gunpei Yokio', 'Satoshi Tajiri', 'Shingeru Miyamoto', 'Satoshi Tajiri', NULL, '2022-09-23 18:08:53', '2022-09-23', NULL),
(3, '¿Cuál es el pokémon no legendario más fuerte de la primera generación según sus estadísticas?', 'Aerodactyl', 'Gyarados', 'Dragonite', 'Articuno', 'Dragonite', NULL, '2022-09-23 18:08:53', '2022-09-23', NULL),
(4, '¿Cuántas medallas son necesarias para ir a la Liga Pokémon?', '6', '8', '7', '10', '8', NULL, '2022-09-23 18:08:53', '2022-09-23', NULL),
(5, 'El Equipo Rocket era…', 'Una organización científica que buscaba crear un nuevo mundo usando a los pokemón', 'Una organización criminal que usaba a los pokemón para toda clase de fines ilícitos', 'Una organización que pretendia ampliar el mar usando un pokemón legendario', 'Una organización extremista que buscaba liberar a los pokemón de los humanos', 'Una organización criminal que usaba a los pokemón para toda clase de fines ilícitos', NULL, '2022-09-23 18:08:53', '2022-09-23', NULL),
(6, 'Gary, el rival de Ash en la serie animada es…', 'El hijo del profesor Oak', 'El nieto del profesor Oak', 'El primo de Ash', 'Un chico de otro pueblo', 'El nieto del profesor Oak', NULL, '2022-09-23 18:08:53', '2022-09-23', NULL),
(7, '¿Qué número de Pokémon es Pikachu?', '50', '100', '25', '1', '25', NULL, '2022-09-23 18:08:53', '2022-09-23', NULL),
(8, '¿Quién es el autor de la música original de Pokémon?', 'Satoru Iwata', 'Kojhi Kondo', 'Satoshi Tajiri', 'Junichi Masuda', 'Junichi Masuda', NULL, '2022-09-23 18:08:53', '2022-09-23', NULL),
(9, '¿Qué líder de gimnasio tenía un Raichu?', 'Blaine', 'Teniente Surge', 'Erika', 'Sabrina', 'Teniente Surge', NULL, '2022-09-23 18:08:53', '2022-09-23', NULL),
(10, 'El último líder de gimnasio en la primera temporada del anime y los tres primeros juegos era…', 'El líder del equipo Rocket', 'El profesor Oak', 'Blaine', 'El padre de Ash', 'El líder del equipo Rocket', NULL, '2022-09-23 18:08:53', '2022-09-23', NULL),
(11, 'En la primera generación de juegos, los pokémon evolucionaban de tres formas distintas, las que eran…', 'Subiendo de nivel, con piedras evolutivas y entrenando en la  Zona Safari', 'Subiendo de nivel, con piedras evolutivas y por amistad', 'Subiendo de nivel, llevando algunos con el profesor Oak y con piedras evolutivas', 'Subiendo de nivel, con piedras evolutivas y por intercambio', 'Subiendo de nivel, con piedras evolutivas y por intercambio', NULL, '2022-09-23 18:08:53', '2022-09-23', NULL),
(12, 'Si quiero derrotar a un Dragonite, ¿qué ataque es la mejor elección?', 'Rayo Hielo', 'Trueno', 'Lanzallamas', 'Rayo Solar', 'Rayo Hielo', NULL, '2022-09-23 18:08:53', '2022-09-23', NULL),
(13, 'Sin contar a Pikachu, ¿cuántos iniciales hay en todas las regiones de Pokémon?', '5', '3', '2', '4', '3', NULL, '2022-09-23 18:08:53', '2022-09-23', NULL),
(14, 'Venusaur es un pokémon de dos tipos, uno es planta. ¿Cuál es el otro tipo?', 'Normal', 'Tierra', 'Veneno', 'Agua', 'Veneno', NULL, '2022-09-23 18:08:53', '2022-09-23', NULL),
(15, '¿Cuál fue el primer Pokemon de Ash?', 'Charmander', 'Pikachu', 'Squirtle', 'Meowth', 'Pikachu', NULL, '2022-09-23 18:08:53', '2022-09-23', NULL),
(16, '¿Quién le dio a Ash su primer Pokemon?', 'El equipo Rocket', 'Su mamá', 'Profesor Oak', 'Gary', 'Profesor Oak', NULL, '2022-09-23 18:08:53', '2022-09-23', NULL),
(17, '¿Cuál fue el primer Pokemon que Ash atrapo?', 'Onix', 'Bulbasur', 'Gyarados', 'Caterpie', 'Caterpie', NULL, '2022-09-23 18:08:53', '2022-09-23', NULL),
(18, '¿Cuál es la diferencia entre un Pikachu femenino y uno masculino?', 'La forma de la cola', 'El color', 'La forma de las orejas', 'La forma de los ojos', 'La forma de la cola', NULL, '2022-09-23 18:08:53', '2022-09-23', NULL),
(19, '¿Quién es el número 1 en la Pokedex?', 'Charmander', 'Bulbasur', 'Muk', 'Staryu', 'Bulbasur', NULL, '2022-09-23 18:08:53', '2022-09-23', NULL),
(20, '¿En qué evoluciona Squirtle?', 'Nidorina y Nidoqueen', 'Charmeleon y Charizard', 'Ivysaur y Venasur', 'Wartortle y Blastoise', 'Wartortle y Blastoise', NULL, '2022-09-23 18:08:53', '2022-09-23', NULL),
(21, 'Who\'s that Pokemon?', 'Dragonite', 'Charizard', 'Gyarados', 'Aerodactyl', 'Charizard', '1665758202971_img.jpg', '2022-10-14 14:36:42', '2022-10-14', NULL),
(22, 'Who\'s that Pokemon?', 'Mew', 'Pikachu', 'Mewtwo', 'Scyther', 'Mewtwo', '1665758255491_img.jpg', '2022-10-14 14:37:35', '2022-10-14', NULL),
(23, 'Who\'s that Pokemon?', 'Squirtle', 'Raichu', 'Raticate', 'Pikachu', 'Pikachu', '1665758313151_img.jpg', '2022-10-14 14:38:33', '2022-10-14', NULL),
(24, 'Who\'s that Pokemon?', 'Voltorb', 'Wigglytuff', 'Jigglypuff', 'Clefairy', 'Jigglypuff', '1666014898054_img.jpg', '2022-10-14 14:40:17', '2022-10-17', NULL),
(25, 'Who\'s that Pokemon?', 'Ivysaur', 'Bulbasaur', 'Nidorino', 'Vulpix', 'Bulbasaur', '1666019181651_img.jpg', '2022-10-17 15:06:21', '2022-10-17', '2022-10-17'),
(26, 'Who\'s that Pokemon?', 'Ivysaur', 'Bulbasaur', 'Nidorino', 'Vulpix', 'Bulbasaur', '1666021745267_img.jpg', '2022-10-17 15:49:05', '2022-10-17', NULL),
(27, 'Who\'s that Pokemon?', 'Ekans', 'Ninetales', 'Poliwrath', 'Arbok', 'Arbok', '1666021965892_img.jpg', '2022-10-17 15:51:18', '2022-10-17', NULL),
(28, 'Who\'s that Pokemon?', 'Poliwhirl', 'Poliwrath', 'Graveler', 'Grimer', 'Poliwhirl', '1666022094655_img.jpg', '2022-10-17 15:54:54', '2022-10-17', NULL),
(29, 'Who\'s that Pokemon?', 'Ponyta', 'Growlithe', 'Tauros', 'Flareon', 'Growlithe', '1666022221851_img.jpg', '2022-10-17 15:57:01', '2022-10-17', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `role` varchar(50) DEFAULT 'USER',
  `userName` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `file` varchar(255) NOT NULL DEFAULT 'default-img.jpg',
  `deletedAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `role`, `userName`, `email`, `password`, `file`, `deletedAt`, `updatedAt`, `createdAt`) VALUES
(5, 'USER', 'ivysaur', 'ivysaur@pokeapi.com', '$2a$10$oX6WuETmDRqAOTyf.3viGun4TWQXvxhqGQ.360vF6tuCsdTFY46sK', 'default_image.jpeg', NULL, '2022-09-08', '2022-09-08 23:44:20'),
(6, 'USER', 'Chikorita', 'chikorita@pokeapi.com', '$2a$10$fULkkGa2/K75l.YLSIrHrOIkTvtXCumRdGgRosExvAQUTtgGUnwSu', 'default_image.jpeg', NULL, '2022-09-09', '2022-09-09 17:56:42'),
(7, 'USER', 'Squirtle', 'squirtle@poke.com', '$2a$10$uO9VJ7Dw8wnQ2JMRhb1amuI5wcHT.8L3i4/HgJv6xbwIaPMjfBpgS', 'default_image.jpeg', NULL, '2022-09-16', '2022-09-16 15:18:27'),
(8, 'USER', 'Totito', 'totodile@poke.com', '$2a$10$MTZzQ7cEBXBe1ElSA/GL5uZO0F0M7CFv28LCZr6R25m1DgIvCUlZ.', '1663355819883_img.jpeg', NULL, '2022-09-20', '2022-09-16 19:17:00'),
(9, 'ADMIN', 'charmander', 'charmander@gmail.com', '$2a$10$ot3OMFCm48I.vcUYaOT8Q.zP86ZYjC16yAcKxTBtEDz31wfNVMQ6O', '1664298523962_img.jpg', NULL, '2022-09-27', '2022-09-27 17:08:44'),
(10, 'USER', 'Shellder', 'shellder@poke.com', '$2a$10$wqG0UsLdDkBNNeZ.pWRYpOyrT/5Vd2DM4DjijYYv4DanFimeoSmVm', 'default_image.jpeg', NULL, '2022-10-04', '2022-10-04 19:57:56'),
(11, 'ADMIN', 'Magneton', 'magneton@poke.com', '$2a$10$AR1Xpu2tlJ5XryGeokNlVusGrGLRtv0fA8F6sIEg8ruBwGlDXFq1e', 'default_image.jpeg', NULL, '2022-10-13', '2022-10-13 19:37:46');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `pokefavorites`
--
ALTER TABLE `pokefavorites`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pokefavorites_users`
--
ALTER TABLE `pokefavorites_users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pokemonId` (`pokemonId`),
  ADD KEY `userId` (`userId`);

--
-- Indices de la tabla `poketrivia`
--
ALTER TABLE `poketrivia`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `pokefavorites`
--
ALTER TABLE `pokefavorites`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `pokefavorites_users`
--
ALTER TABLE `pokefavorites_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `poketrivia`
--
ALTER TABLE `poketrivia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `pokefavorites_users`
--
ALTER TABLE `pokefavorites_users`
  ADD CONSTRAINT `pokefavorites_users_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `pokefavorites_users_ibfk_3` FOREIGN KEY (`pokemonId`) REFERENCES `pokefavorites` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
