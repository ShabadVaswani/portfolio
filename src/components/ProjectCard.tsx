"use client";

import { Card, Column, Media, Row, Avatar, Text } from "@once-ui-system/core";
import { person } from "@/resources";

interface ProjectCardProps {
  href: string;
  images: string[];
  title: string;
  description: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  description,
}) => {
  return (
    <Card
      fillWidth
      href={href}
      transition="micro-medium"
      direction="column"
      border="transparent"
      background="transparent"
      padding="4"
      radius="l-4"
      gap="24"
      s={{ direction: "column" }}
    >
      {images.length > 0 && (
        <Media
          priority
          sizes="(max-width: 768px) 100vw, 640px"
          border="neutral-alpha-weak"
          cursor="interactive"
          radius="l"
          src={images[0]}
          alt={"Thumbnail of " + title}
          aspectRatio="16 / 9"
        />
      )}
      <Row fillWidth>
        <Column maxWidth={28} paddingY="24" paddingX="l" gap="20" vertical="center">
          <Row gap="24" vertical="center">
            <Row vertical="center" gap="16">
              <Avatar src={person.avatar} size="s" />
              <Text variant="label-default-s">{person.name}</Text>
            </Row>
          </Row>
          <Text variant="heading-strong-l" wrap="balance">
            {title}
          </Text>
          {description && (
             <Text variant="body-default-m" onBackground="neutral-weak">
               {description}
             </Text>
          )}
        </Column>
      </Row>
    </Card>
  );
};
