import type { PageServerLoad } from "./$types.js";
import { superValidate } from "sveltekit-superforms";
import { bidSchema } from "../bidSchema.js";
import { zod4 } from "sveltekit-superforms/adapters";
 
export const load: PageServerLoad = async () => {
 return {
  form: await superValidate(zod4(bidSchema)),
 };
};