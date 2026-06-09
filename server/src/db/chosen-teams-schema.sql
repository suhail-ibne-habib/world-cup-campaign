USE world_cup_campaign;

CREATE TABLE IF NOT EXISTS users_chosen_team (
  id INT AUTO_INCREMENT PRIMARY KEY,
  users_id INT NOT NULL,
  m_worldcup_teams_id INT NOT NULL,
  selection_type ENUM('auto', 'manual') NOT NULL,
  UNIQUE KEY unique_user_team (users_id, m_worldcup_teams_id),
  UNIQUE KEY unique_user_selection_type (users_id, selection_type),
  KEY idx_users_id (users_id),
  KEY idx_team_id (m_worldcup_teams_id),
  CONSTRAINT fk_chosen_user FOREIGN KEY (users_id) REFERENCES users (id),
  CONSTRAINT fk_chosen_team FOREIGN KEY (m_worldcup_teams_id) REFERENCES m_worldcup_teams (id)
);
