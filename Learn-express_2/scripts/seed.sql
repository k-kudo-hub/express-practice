DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`(
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` NVARCHAR(20) NOT NULL,
  `email` NVARCHAR(20) NOT NULL,
  `sex` ENUM('MALE', 'FEMALE', 'OTHER') NOT NULL DEFAULT 'OTHER',
  `paid` BOOLEAN NOT NULL DEFAULT FALSE,
  INDEX(id)
);
INSERT INTO `users` (`id`,`name`,`email`) VALUES (1, "aa", "aa@example.com");
INSERT INTO `users` (`id`,`name`,`email`) VALUES (2, "bb", "bb@example.com");
INSERT INTO `users` (`id`,`name`,`email`) VALUES (3, "cc", "cc@example.com");
INSERT INTO `users` (`id`,`name`,`email`) VALUES (4, "dd", "dd@example.com");
INSERT INTO `users` (`id`,`name`,`email`) VALUES (5, "ee", "ee@example.com");
INSERT INTO `users` (`id`,`name`,`email`) VALUES (6, "ff", "ff@example.com");
INSERT INTO `users` (`id`,`name`,`email`) VALUES (7, "gg", "gg@example.com");
INSERT INTO `users` (`id`,`name`,`email`) VALUES (8, "hh", "hh@example.com");
INSERT INTO `users` (`id`,`name`,`email`) VALUES (9, "ii", "ii@example.com");
INSERT INTO `users` (`id`,`name`,`email`) VALUES (10, "jj", "jj@example.com");
