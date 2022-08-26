module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,
    },
    name: DataTypes.STRING,
    }, {
      timestamps: false,
      tableName: 'Categories',
  }, {
    indexes: [
      {
        unique: true,
        fields: ['name'],
      },
    ],
  });

  // User.associate = (models) => {
  //   User.hasMany(models.PostCategories, { foreignKey: 'categoryId' });
  // };

  return Category;
}

/*
id INT,
name VARCHAR(255),
*/