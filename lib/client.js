import sanityClient from "@sanity/client"
import ImageUrlBuilder from "@sanity/image-url"

export const client = sanityClient({
  projectId: "oajjdenr",
  dataset: "production",
  apiVersion: "2023-02-17",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
})

const builder = ImageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)
