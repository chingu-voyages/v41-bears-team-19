import { objectType } from "nexus";

export const Shelter = objectType({
  name: 'Shelter',
  definition(t) {
    t.int('id')
    t.nonNull.string('name')
    t.list.field('pets', {
      type:'Pet'
    })
  },
})