import type { ShelfItem } from "@/components/shelf/ShelfPage";

// Add verified papers here, newest reading activity first. Personal notes must
// come from Shabad; summaries describe the paper rather than his achievements.
export const papers: ShelfItem[] = [
  {
    title: "Neural Machine Translation of Rare Words with Subword Units",
    authors: "Rico Sennrich, Barry Haddow, Alexandra Birch",
    year: "2016",
    status: "First pass",
    topics: ["Neural machine translation", "Subword tokenization", "BPE"],
    description:
      "Represents rare and unseen words as sequences of subword units, adapting byte-pair encoding for open-vocabulary neural machine translation.",
    href: "https://aclanthology.org/P16-1162/",
    actionLabel: "Read the paper",
  },
];
