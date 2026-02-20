import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "8yjhebg4",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});