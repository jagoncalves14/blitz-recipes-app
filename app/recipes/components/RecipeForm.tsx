import { Form, FormProps } from "app/core/components/Form"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import * as z from "zod"
export { FORM_ERROR } from "app/core/components/Form"

export function RecipeForm<S extends z.ZodType<any, any>>(props: FormProps<S>) {
  return (
    <Form<S> {...props}>
      <LabeledTextField name="name" label="Name" placeholder="Name" />
      <LabeledTextField name="imageUrl" label="Image URL" placeholder="imageUrl" />
      <LabeledTextField name="description" label="description" placeholder="Write a description" />
      <LabeledTextField type="number" name="difficulty" label="difficulty" placeholder="Difficulty 1-5" />
      <LabeledTextField type="number" name="length" label="length" placeholder="How many minutes to cook?" />
    </Form>
  )
}
