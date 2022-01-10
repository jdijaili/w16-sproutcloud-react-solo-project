'use strict';
module.exports = (sequelize, DataTypes) => {
  const PlaylistSongJoin = sequelize.define('PlaylistSongJoin', {
    playlistId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Playlists' }
    },
    songId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Songs' }
    }
  }, {});
  PlaylistSongJoin.associate = function (models) {
    PlaylistSongJoin.belongsTo(models.Playlist, { foreignKey: 'playlistId' });
    PlaylistSongJoin.belongsTo(models.Song, { foreignKey: 'songId' });
  };
  return PlaylistSongJoin;
};
