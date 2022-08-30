module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: { type: DataTypes.INTEGER, foreignKey: true },
    categoryId: { type: DataTypes.INTEGER, foreignKey: true },
    }, {
      timestamps: false,
      tableName: 'PostCategories',
  });

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, { foreignKey: 'postId', through: PostCategory, as: 'categories' });
    models.Category.belongsToMany(models.BlogPost, { foreignKey: 'categoryId', through: PostCategory });
  };

  return PostCategory;
}
