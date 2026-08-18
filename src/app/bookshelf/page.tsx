import { Column, Meta, Schema } from "@once-ui-system/core";

import { ShelfPage } from "@/components/shelf";
import { about, baseURL, bookshelf, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: bookshelf.title,
    description: bookshelf.description,
    baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(bookshelf.title)}`,
    path: bookshelf.path,
  });
}

export default function Bookshelf() {
  return (
    <Column fillWidth>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={bookshelf.path}
        title={bookshelf.title}
        description={bookshelf.description}
        image={`/api/og/generate?title=${encodeURIComponent(bookshelf.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <ShelfPage
        title={bookshelf.title}
        description={bookshelf.description}
        itemType="book"
      />
    </Column>
  );
}
