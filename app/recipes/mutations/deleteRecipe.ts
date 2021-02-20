import { resolver } from "blitz"
import db from "db"
import * as z from "zod"

const DeleteRecipe = z
  .object({
    id: z.number(),
  })
  .nonstrict()

export default resolver.pipe(resolver.zod(DeleteRecipe), resolver.authorize(), async ({ id }) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const recipe = await db.recipe.deleteMany({ where: { id } })

  return recipe
})
