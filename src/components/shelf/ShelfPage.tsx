import { Column, Heading, Text } from "@once-ui-system/core";

interface ShelfPageProps {
  title: string;
  description: string;
  itemType: string;
}

export function ShelfPage({ title, description, itemType }: ShelfPageProps) {
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
    </Column>
  );
}
