import path from "path"
import fs from "fs"
import { marked } from "marked"

const STORIES_DIR = path.join(process.cwd(), "static/stories") 
// const STORIES_DIR = "./static/stories"



export async function getFileNames() {
    const fileNames = fs.readdirSync(STORIES_DIR)
    return fileNames.map(fileName => {
        const url = fileName.replace(/\.md$/, "")
        const { metadata, body } = extract_frontmatter(url)
        const content = body.slice(0, 255) + " ..."
        const preview = marked(content)
        return {
            url,
            title: url.replace(/_/g, " "),
            metadata,
            preview,
            rawBody: body
        }
    })
}


export async function readFile(fileName) {
    const { metadata, body } = extract_frontmatter(fileName)
    const rawHtml = marked(body)
    const html = rawHtml.replace(/\n/g, "<br>")
    return {
        html,
        metadata
    }
}

export function extract_frontmatter(fileName) {
    const markdown = fs.readFileSync(`${STORIES_DIR}/${fileName}.md`, 'utf-8')
    const match = /---\r?\n([\s\S]+?)\r?\n---/.exec(markdown);
    const frontmatter = match[1];
    const body = markdown.slice(match[0].length);

    const metadata = {};
    frontmatter.split('\n').forEach((pair) => {
        const i = pair.indexOf(':');
        metadata[pair.slice(0, i).trim()] = pair.slice(i + 1).trim().replace(/\"/g, "");
    });

    return { metadata, body };
}