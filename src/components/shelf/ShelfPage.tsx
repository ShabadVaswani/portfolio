import { Button, Column, Heading, Text } from "@once-ui-system/core";

export interface ShelfItem {
  title: string;
  authors: string;
  year: string;
  status: string;
  description: string;
  href: string;
  actionLabel: string;
  readingDate?: string;
  topics?: string[];
  takeaway?: string;
}

interface ShelfPageProps {
  title: string;
  description: string;
  itemType: string;
  items?: ShelfItem[];
}

export function ShelfPage({
  title,
  description,
  itemType,
  items = [],
}: ShelfPageProps) {
  return (
    <Column maxWidth="m" paddingTop="24" paddingX="l" gap="32">
      <Column gap="12">
        <Text variant="label-default-s" onBackground="brand-medium">
          Personal library
        </Text>
        <Heading variant="display-strong-s">{title}</Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
          {description}
        </Text>
      </Column>

      {items.length > 0 ? (
        items.map((item) => (
          <Column
            key={item.href}
            fillWidth
            padding="32"
            gap="12"
            background="surface"
            border="neutral-alpha-weak"
            radius="l"
          >
            <Text variant="label-default-s" onBackground="brand-medium">
              {item.status}
              {item.readingDate && (
                <>
                  {" · "}
                  <time dateTime={item.readingDate}>
                    {new Date(`${item.readingDate}T12:00:00Z`).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                      timeZone: "UTC",
                    })}
                  </time>
                </>
              )}
            </Text>
            <Heading as="h2" variant="heading-strong-l">{item.title}</Heading>
            <Text variant="body-default-s" onBackground="neutral-weak">
              {item.authors} · {item.year}
            </Text>
            <Text variant="body-default-m" onBackground="neutral-weak">
              {item.description}
            </Text>
            {item.topics && item.topics.length > 0 && (
              <Text variant="label-default-s" onBackground="brand-medium">
                {item.topics.join(" · ")}
              </Text>
            )}
            {item.takeaway && (
              <Column gap="4">
                <Heading as="h3" variant="heading-strong-s">My takeaway</Heading>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  {item.takeaway}
                </Text>
              </Column>
            )}
            <Button
              href={item.href}
              label={item.actionLabel}
              aria-label={`${item.actionLabel}: ${item.title}`}
              variant="secondary"
              size="s"
              arrowIcon
            />
          </Column>
        ))
      ) : (
        <Column
          fillWidth
          padding="32"
          gap="8"
          background="surface"
          border="neutral-alpha-weak"
          radius="l"
        >
          <Heading variant="heading-strong-m">Collection coming soon</Heading>
          <Text variant="body-default-m" onBackground="neutral-weak">
            I&apos;m curating this {itemType} list. Recommendations and notes will appear here soon.
          </Text>
        </Column>
      )}
    </Column>
  );
}
