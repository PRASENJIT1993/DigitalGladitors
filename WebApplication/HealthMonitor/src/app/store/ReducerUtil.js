
export const getModuleReducers = (modules, node) =>

  modules.reduce((map, module) => {
    map[module.name] = module[node];

    return map;
  }, {});
