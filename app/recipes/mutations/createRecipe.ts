import { resolver } from "blitz"
import db from "db"
import * as z from "zod"

const CreateRecipe = z
  .object({
    name: z.string(),
    imageUrl: z.string(),
    description: z.string(),
    difficulty: z.number(),
    length: z.number()
  })
  .nonstrict()

export default resolver.pipe(resolver.zod(CreateRecipe), resolver.authorize(), async (input) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const recipe = await db.recipe.create({ data: input })

  return recipe
})
