import { sleep } from "$lib/helpers";
import { json } from "@sveltejs/kit";

let count = 0;

export async function GET() {
  await sleep(200 + Math.random() * 800);
	return json(++count);
}
