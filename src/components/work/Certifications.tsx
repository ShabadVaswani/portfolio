import { Column, Grid, Heading } from "@once-ui-system/core";
import { work } from "@/resources";
import { CertificationCard } from "./CertificationCard";

export function Certifications() {
  const section = work.certifications;

  if (!section?.display || section.items.length === 0) {
    return null;
  }

  return (
    <Column fillWidth gap="24" marginTop="40">
      <Heading as="h2" variant="display-strong-s">
        {section.title}
      </Heading>
      <Grid columns="1" fillWidth gap="16">
        {section.items.map((cert) => (
          <CertificationCard
            key={cert.link}
            href={cert.link}
            title={cert.title}
            issuer={cert.issuer}
            issuedAt={cert.issuedAt}
            description={cert.summary}
            image={cert.image}
            tags={cert.tags}
          />
        ))}
      </Grid>
    </Column>
  );
}
