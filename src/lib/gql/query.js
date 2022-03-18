import { gql } from 'graphql-request';

const STORY_FRAGMENT = gql`
  fragment storyDetails on Story {
    title
    slug
    content
    date
    tags
    audio
    imageSrc
  }
`

export const authorsQuery = gql`
query getAuthors {
    authors {
        id
        name
        intro
        picture {url}
    }
}
`

export const storyQuery = gql`
${STORY_FRAGMENT}
query getStory($slug: String!) {
  story(where: {slug: $slug}) {
    ...storyDetails
  }
}
`

export const storiesQuery = gql`
${STORY_FRAGMENT}
query getStories {
    stories {
      ...storyDetails
    }
  }
`

// export const projectsQuery = gql`
//   ${PROJECT_FRAGMENT}
//   query GetProjects {
//     projects {
//       ...ProjectDetails
//     }
//   }
// `

// export const projectQuery = gql`
//   ${PROJECT_FRAGMENT}
//   query GetProject($slug: String!) {
//     project(where: { slug: $slug }) {
// 		...ProjectDetails
// 	}
//   }
// `
