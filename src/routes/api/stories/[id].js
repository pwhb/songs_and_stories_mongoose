import { readFile } from "$lib/util/markdown"

export async function get({ params, }) {
    const fileContent = await readFile(params.id,)
    return {
        body: fileContent
    }
}