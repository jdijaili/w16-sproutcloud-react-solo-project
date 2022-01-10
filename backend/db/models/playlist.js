'use strict';
module.exports = (sequelize, DataTypes) => {
  const Playlist = sequelize.define('Playlist', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Title must not be null'
        },
        notEmpty: {
          msg: 'Title must not be empty'
        },
        len: {
          args: [1, 100],
          msg: 'Title must not be more than 100 characters'
        }
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Users" }
    }
  }, {});
  Playlist.associate = function (models) {
    Playlist.belongsTo(models.User, { foreignKey: 'userId' });

    const columnMapping = {
      through: 'PlaylistSongJoin',
      otherKey: 'songId',
      foreignKey: 'playlistId'
    };

    Playlist.belongsToMany(models.Song, columnMapping);
  };
  return Playlist;
};
