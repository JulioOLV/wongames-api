/**
 * game controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::game.game', ({ strapi }) => ({
  populate: async (ctx) => {
    console.log('Starting to populate games...');

    await strapi.service('api::game.game').populate(ctx.query);

    ctx.send('Finished populating games!');
  },
}));
