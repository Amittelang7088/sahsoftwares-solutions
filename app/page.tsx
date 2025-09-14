import Header from "@/components/agency/header";
import Hero from "@/components/agency/hero";
import AboutFeature from "@/components/agency/about-feature";
import Services from "@/components/agency/services";
import ExperienceStats from "@/components/agency/experience-stats";
import Team from "@/components/agency/team";
import Pricing from "@/components/agency/engagementmodels";
import Testimonials from "@/components/agency/testimonials";
import BlogTeasers from "@/components/agency/blog-teasers";
import SiteFooter from "@/components/agency/site-footer";
import EngagementModels from "@/components/agency/engagementmodels";

export default function Page() {
  return (
    <main className="min-h-dvh bg-white text-neutral-900">
      <Header />
      <Hero />
      <AboutFeature />
      <Services />
      <ExperienceStats />
      <Team />
      <EngagementModels />
      {/* <Testimonials /> */}
      {/* <BlogTeasers /> */}
      <SiteFooter />
    </main>
  );
}
