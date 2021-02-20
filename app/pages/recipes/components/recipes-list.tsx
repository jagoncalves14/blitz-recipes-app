import { Link, usePaginatedQuery, useRouter } from "blitz"
import getRecipes from "app/recipes/queries/getRecipes"

const ITEMS_PER_PAGE = 100

export const RecipesList = () => {
  const router = useRouter()
  const page = Number(router.query.page) || 0
  const [{ recipes, hasMore }] = usePaginatedQuery(getRecipes, {
    orderBy: { id: "asc" },
    skip: ITEMS_PER_PAGE * page,
    take: ITEMS_PER_PAGE,
  })

  const goToPreviousPage = () => router.push({ query: { page: page - 1 } })
  const goToNextPage = () => router.push({ query: { page: page + 1 } })

  return (
    <div>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link href={`/recipes/${recipe.id}`}>
              <a>
                <img alt={recipe.name} src={recipe.imageUrl} />
                <p>{recipe.name}</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>

      <button disabled={page === 0} onClick={goToPreviousPage}>
        Previous
      </button>
      <button disabled={!hasMore} onClick={goToNextPage}>
        Next
      </button>
    </div>
  )
}
