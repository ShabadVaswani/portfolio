"use client";

import { Card, Column, Icon, Media, Row, SmartLink, Tag, Text } from "@once-ui-system/core";

interface CertificationCardProps {
  href: string;
  title: string;
  issuer: string;
  issuedAt: string;
  description: string;
  image?: string;
  tags?: string[];
}

export const CertificationCard: React.FC<CertificationCardProps> = ({
  href,
  title,
  issuer,
  issuedAt,
  description,
  image,
  tags = [],
}) => {
  return (
    <SmartLink href={href} target="_blank" rel="noopener noreferrer" unstyled fillWidth>
      <Card
        fillWidth
        transition="micro-medium"
        direction="column"
        border="neutral-alpha-weak"
        background="surface"
        padding="l"
        radius="l"
        gap="20"
      >
      <Row fillWidth horizontal="between" vertical="center" gap="16">
        {image ? (
          <Media
            src={image}
            alt={`${title} badge`}
            width={72}
            height={72}
            radius="m"
            border="neutral-alpha-weak"
          />
        ) : (
          <Row
            background="brand-alpha-weak"
            border="brand-alpha-medium"
            radius="m"
            padding="12"
            vertical="center"
            horizontal="center"
          >
            <Icon name="document" size="l" onBackground="brand-strong" />
          </Row>
        )}
        <Column fillWidth gap="4">
          <Text variant="heading-strong-m" wrap="balance">
            {title}
          </Text>
          <Text variant="body-default-s" onBackground="brand-weak">
            {issuer}
          </Text>
        </Column>
        <Text variant="label-default-xs" onBackground="neutral-weak">
          {issuedAt}
        </Text>
      </Row>
      <Text variant="body-default-m" onBackground="neutral-medium">
        {description}
      </Text>
      {tags.length > 0 && (
        <Row gap="8" wrap>
          {tags.map((tag) => (
            <Tag key={tag} size="s" variant="neutral">
              {tag}
            </Tag>
          ))}
        </Row>
      )}
      <Row gap="8" vertical="center">
        <Text variant="label-strong-s" onBackground="brand-medium">
          View credential
        </Text>
        <Icon name="openLink" size="s" onBackground="brand-medium" />
      </Row>
      </Card>
    </SmartLink>
  );
};
