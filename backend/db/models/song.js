'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
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
          args: [1, 50],
          msg: 'Title must not be more than 50 characters'
        }
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Description must not be null'
        },
        notEmpty: {
          msg: 'Description must not be empty'
        }
      }
    },
    songUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Song url must not be null'
        },
        notEmpty: {
          msg: 'Song url must not be empty'
        },
        len: {
          args: [1, 255],
          msg: 'Song url must not be more than 255 characters'
        },
        isAnMp3(value) {
          if (!value.endsWith('.mp3')) {
            throw new Error('Song url must be a valid link')
          }
        }
      }
    },
    imgUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Image url must not be null'
        },
        notEmpty: {
          msg: 'Image url must not be empty'
        },
        len: {
          args: [1, 255],
          msg: 'Image url must not be more than 255 characters'
        },
        isAnImg(value) {
          if (!value.endsWith('.jpg')) {
            throw new Error('Image url must be a valid link')
          }
        }
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Users" }
    }
  }, {});
  Song.associate = function (models) {
    Song.belongsTo(models.User, { foreignKey: 'userId' });

    const columnMapping = {
      through: 'PlaylistSongJoin',
      otherKey: 'playlistId',
      foreignKey: 'songId'
    };

    Song.belongsToMany(models.User, columnMapping);
  };
  return Song;
};
