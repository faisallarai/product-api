'use strict';

import { Sequelize } from 'sequelize';

const env = process.env['NODE_ENV'] || 'development';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const config = require('../config/config')[env];

const  sequelize = new Sequelize(config.database, config.username, config.password, config);

export default sequelize;
