DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`(
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` NVARCHAR(20) NOT NULL,
  `email` NVARCHAR(20) NOT NULL,
  `sex` ENUM('MALE', 'FEMALE', 'OTHER') NOT NULL DEFAULT 'OTHER',
  `paid` BOOLEAN NOT NULL DEFAULT FALSE,
  INDEX(id)
);
INSERT INTO `users` VALUES (1, "aa", "aa@example.com", "MALE", 0);
INSERT INTO `users` VALUES (2, "bb", "bb@example.com", "FEMALE", 0);
INSERT INTO `users` VALUES (3, "cc", "cc@example.com", "MALE", 0);
INSERT INTO `users` VALUES (4, "dd", "dd@example.com", "MALE", 0);
INSERT INTO `users` VALUES (5, "ee", "ee@example.com", "FEMALE", 1);
INSERT INTO `users` VALUES (6, "ff", "ff@example.com", "MALE", 0);
INSERT INTO `users` VALUES (7, "gg", "gg@example.com", "MALE", 0);
INSERT INTO `users` VALUES (8, "hh", "hh@example.com", "MALE", 0);
INSERT INTO `users` VALUES (9, "ii", "ii@example.com", "FEMALE", 1);
INSERT INTO `users` VALUES (10, "jj", "jj@example.com", "OTHER", 0);
