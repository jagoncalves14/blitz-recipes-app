import { resolver } from "blitz"
import db from "db"
import * as z from "zod"

const UpdateRecipe = z
  .object({
    id: z.number(),
    name: z.string(),
    imageUrl: z.string(),
    description: z.string(),
    difficulty: z.number(),
    length: z.number(),
  })
  .nonstrict()

export default resolver.pipe(
  resolver.zod(UpdateRecipe),
  resolver.authorize(),
  async ({ id, ...data }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const recipe = await db.recipe.update({ where: { id }, data })

    return recipe
  }
)
