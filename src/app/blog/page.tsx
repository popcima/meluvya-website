import { BlogIndex } from "@/components/BlogIndex";
import { blogPageMetadata } from "@/lib/blog";

export const metadata = blogPageMetadata(1);

export default function BlogPage() {
  return <BlogIndex />;
}
