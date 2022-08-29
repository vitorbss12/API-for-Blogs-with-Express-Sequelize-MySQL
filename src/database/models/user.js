module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
    }, {
      timestamps: false,
      tableName: 'Users',
  }, {
    indexes: [
      {
        unique: true,
        fields: ['email'],
      },
    ],
  });

  User.associate = (models) => {
    User.hasMany(models.BlogPost, { foreignKey: 'userId' });
  };

  return User;
}

/*
id INT,
displayName VARCHAR(255),
email VARCHAR(255),
password VARCHAR(255),
image VARCHAR(255),
Has Many Posts
*/