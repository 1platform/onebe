"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DatabaseSeeder;

var _index = require("../index");

/**
 * Function used to seed the Database for a given entity.
 *
 * @param entity The entity to be seeded.
 * @param data The data to be seeded.
 * @param clearData Flag used to enable/disable database clearing.
 */
async function DatabaseSeeder(entity, data, clearData = false) {
  if (!Array.isArray(data)) {
    data = [data];
  }

  const EntityClass = entity;
  const response = {
    deleted: 0,
    created: 0
  };
  await (0, _index.defaultConnection)().transaction(async entityManager => {
    if (clearData) {
      const result = await entityManager.delete(entity, {});
      response.deleted = result.affected || 0;
    }

    const result = await entityManager.insert(entity, data.map(item => {
      const entityItem = new EntityClass();

      for (const key of Object.keys(item)) {
        entityItem[key] = item[key];
      }

      return entityItem;
    }));
    response.created = result.identifiers.length;
  });
  return response;
}