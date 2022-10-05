// 'use strict';

// module.exports = {
//   async up (queryInterface, Sequelize) {
//     await queryInterface.createTable('matches', { 
//       id: {
//         type: Sequelize.INTEGER,
//         allowNull: false,
//         primaryKey: true,
//         autoIncrement: true
//       },
//       username: {
//         type: Sequelize.STRING,
//         allowNull: false
//       },
//       role: {
//         type: Sequelize.STRING,
//         allowNull: false
//       },
//       email: {
//         type: Sequelize.STRING,
//         allowNull: false,
//         unique: true
//       },
//       password: {
//         type: Sequelize.STRING,
//         allowNull: false
//       }
//     });
//   },

//   async down (queryInterface) {
//     await queryInterface.dropTable('matches');
//   }
// };