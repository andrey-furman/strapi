'use strict';

const find = async (...args) => strapi.query('locale', 'i18n').find(...args);

const findById = async id => strapi.query('locale', 'i18n').findOne({ id });

const findByCode = async code => strapi.query('locale', 'i18n').findOne({ code });

const create = async locale => strapi.query('locale', 'i18n').create(locale);

const update = async (params, updates) => strapi.query('locale', 'i18n').update(params, updates);

module.exports = {
  find,
  findById,
  findByCode,
  create,
  update,
};
