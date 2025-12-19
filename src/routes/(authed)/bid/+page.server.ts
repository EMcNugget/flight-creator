import type { Actions, PageServerLoad } from "./$types.js";
import { superValidate } from "sveltekit-superforms";
import { bidSchema } from "../bidSchema.js";
import { zod4 } from "sveltekit-superforms/adapters";
 
export const load: PageServerLoad = async () => {
 return {
  form: await superValidate(zod4(bidSchema)),
 };
};

export const actions: Actions = {
	default: async (event) => {
    const form = await superValidate(event.request, zod4(bidSchema));

    console.log("Form submission:", form);
  }
}