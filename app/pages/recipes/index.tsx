import { Suspense } from "react"
import { Head, Link, BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"
import { RecipesList } from "./components/recipes-list"

const RecipesPage: BlitzPage = () => {
  return (
    <>
      <Head>
        <title>Recipes</title>
      </Head>

      <div>
        <p>
          <Link href="/recipes/new">
            <a>Create Recipe</a>
          </Link>
        </p>

        <Suspense fallback={<div>Loading...</div>}>
          <RecipesList />
        </Suspense>
      </div>
    </>
  )
}

RecipesPage.authenticate = true
RecipesPage.getLayout = (page) => <Layout>{page}</Layout>

export default RecipesPage
