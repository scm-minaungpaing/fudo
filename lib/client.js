import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
    projectId: "19qdphvu",
    dataset: "production",
    apiVersion: "2023-05-01",
    useCdn: true,
    token: "skTW6d1g9LVN2wjLpVzjEJshI7pTx8rrOBHpTNhHoaEFg9pmiXg9EvVLJGC5nuvrawihlp5CGPA9snDsov9meot9IGNr2Mj5xAHtUuKY9lOtn6o01Nemmiqu5fWDO9YLt6muOSYuaKTO0nUplyLJ92uIhxYMtv5bp6Yet4ygr72DzezSWDYS"
})

const builder = ImageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)