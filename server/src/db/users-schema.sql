USE world_cup_campaign;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  user_type ENUM('agent', 'brokerage') NOT NULL,
  membership_status ENUM('free', 'paid') NOT NULL,
  subscription_package VARCHAR(255) NOT NULL,
  UNIQUE KEY unique_email (email),
  UNIQUE KEY unique_user_id (user_id)
);
