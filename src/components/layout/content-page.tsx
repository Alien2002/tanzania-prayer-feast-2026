import Link from "next/link";
import { pages, type PageSlug } from "@/data/pages";
import { assets } from "@/data/site";
import { PageHeader } from "@/components/ui/page-header";
import { Icon } from "@/components/ui/icon";
export function ContentPage({
  slug,
  children,
}: {
  slug: PageSlug;
  children: React.ReactNode;
}) {
  const page = pages.find((p) => p.k === slug)!;
  return (
    <>
      <PageHeader
        title={page.t}
        description={page.lead}
        icon={page.n}
        image={assets.photos[page.bg]}
      />
      <section className="body">
        <div className="wrap">
          {children}
          <div className="back">
            <Link className="btn o" href="/">
              <Icon name="back" />
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
