function create_updated_collection(collection_a, object_b) {
  return collection_a.map(element => {
    if (object_b['value'].indexOf(element.key) != -1) return {'key':element.key, 'count':element.count-(Math.floor(element.count/3))};
    else return {'key':element.key, 'count':element.count};
  });
}

module.exports = create_updated_collection;
