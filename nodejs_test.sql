-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 09 fév. 2024 à 19:02
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";



--
-- Base de données : `nodejs_test`
--

-- --------------------------------------------------------

--
-- Structure de la table `node`
--

CREATE TABLE `node` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `tagline` varchar(50) NOT NULL,
  `description` varchar(255) NOT NULL,
  `image` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `node`
--

INSERT INTO `node` (`id`, `name`, `tagline`, `description`, `image`) VALUES
(1, 'Raibi', 'Best moroccan juice', 'pomegranate and milk juice the best juice', 'image1'),
(5, 'Abtal', 'Abtal the true orange juice', 'Orange juice one of the best juices in morocco', 'image2'),
(10, 'aaassiri', '3assiri the true milk and manguo juice', 'milk and manguo juice one of the best juices in morocco', 'image3');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `node`
--
ALTER TABLE `node`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `node`
--
ALTER TABLE `node`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

