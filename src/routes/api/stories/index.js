import { parseDate, sortByDate } from "$lib/util/helper"
import { getFileNames } from "$lib/util/markdown"

export async function get() {
    const stories = await getFileNames()
    const sortedStories = stories.sort((a, b) => {
        const parsedA = parseDate(a.metadata.date)
        const parsedB = parseDate(b.metadata.date)
        if (parsedA.year === parsedB.year) {
            return parseInt(parsedB.month) - parseInt(parsedA.month)
        }
        return parseInt(parsedB.year) - parseInt(parsedA.year)
    })
    return {
        body: sortedStories
    }
}