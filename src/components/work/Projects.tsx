import { getPosts } from "@/utils/utils";
import { Grid } from "@once-ui-system/core";
import { ProjectCard } from "@/components";

interface ProjectsProps {
  range?: [number, number?];
  exclude?: string[];
}

export function Projects({ range, exclude }: ProjectsProps) {
  let allProjects = getPosts(["src", "app", "work", "projects"]);

  // Exclude by slug (exact match)
  if (exclude && exclude.length > 0) {
    allProjects = allProjects.filter((post) => !exclude.includes(post.slug));
  }

  const sortedProjects = allProjects.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  const pool = [
    "/images/gallery/horizontal-1.jpg",
    "/images/gallery/horizontal-2.jpg",
    "/images/gallery/horizontal-3.jpg",
    "/images/gallery/horizontal-4.jpg",
  ];
  
  // Shuffle array using Fisher-Yates algorithm for unbiased randomness
  const shuffledPool = [...pool];
  for (let i = shuffledPool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledPool[i], shuffledPool[j]] = [shuffledPool[j], shuffledPool[i]];
  }

  return (
    <Grid columns="2" s={{ columns: 1 }} fillWidth marginBottom="40" gap="16">
      {displayedProjects.map((post, index) => {
        const randomImage = shuffledPool[index % shuffledPool.length];
        
        return (
          <ProjectCard
            key={post.slug}
            href={`/work/${post.slug}`}
            images={[randomImage]}
            title={post.metadata.title}
            description={post.metadata.summary}
          />
        );
      })}
    </Grid>
  );
}
