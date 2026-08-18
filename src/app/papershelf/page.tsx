import { Column, Meta, Schema } from "@once-ui-system/core";

import { ShelfPage } from "@/components/shelf";
import { about, baseURL, papershelf, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: papershelf.title,
    description: papershelf.description,
    baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(papershelf.title)}`,
    path: papershelf.path,
  });
}

export default function Papershelf() {
  return (
    <Column fillWidth>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={papershelf.path}
        title={papershelf.title}
        description={papershelf.description}
        image={`/api/og/generate?title=${encodeURIComponent(papershelf.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <ShelfPage
        title={papershelf.title}
        description={papershelf.description}
        itemType="research paper"
      />
    </Column>
  );
}
