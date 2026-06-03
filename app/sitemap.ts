import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.onlinereputationbuilder.in";
  
  const routes = [
    "",
    "/business",
    "/business/crisis-management",
    "/business/remove-google-business-review",
    "/business/remove-negative-results",
    "/business/reputation-audit",
    "/business/reputation-monitoring",
    "/business/review-management",
    "/contact-us",
    "/individual",
    "/individual/change-google-autocomplete",
    "/individual/personal-brand-monitoring",
    "/individual/personal-branding-services",
    "/individual/remove-individual-negative-results",
    "/individual/remove-private-info",
    "/public-relation",
    "/review-management",
    "/review-management/ambitionbox-reputation-management",
    "/review-management/amplify-reviews",
    "/review-management/cam-model-content-removal-service",
    "/review-management/complaint-removal-and-management-services",
    "/review-management/facebook-content-removal",
    "/review-management/fake-news-removal",
    "/review-management/fake-review-removal",
    "/review-management/how-to-remove-glassdoor-reviews",
    "/review-management/image-removal",
    "/review-management/indeed-reputation-management",
    "/review-management/instagram-videos-and-posts-removal",
    "/review-management/news-article-removal-from-the-internet",
    "/review-management/product-review-management",
    "/review-management/quora-content-removal",
    "/review-management/reddit-post-removal",
    "/review-management/remove-glassdoor-review",
    "/review-management/reputation-monitoring",
    "/review-management/tiktok-video-and-post-removal",
    "/review-management/trustpilot-reputation-management",
    "/review-management/twitter-content-removal",
    "/review-management/video-removal",
    "/review-management/wikipedia-writing-services",
    "/review-management/yelp-review-management",
    "/review-management/youtube-video-removal",
    "/solution",
    "/solution/case-studies-for-celebrity-reputation-management-company",
    "/solution/case-studies-for-education-reputation-management-company",
    "/solution/education-industry-reputation-management",
    "/solution/restaurant-industry-reputation-management",
    "/blog",
    "/blog/suppress-negative-search-results",
    "/blog/remove-defamatory-online-reviews",
    "/blog/personal-branding-search-proof-image",
  ];

  return routes.map((route) => {
    let priority = 0.7;
    let changefreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never" = "weekly";
    
    if (route === "") {
      priority = 1.0;
      changefreq = "daily";
    } else if (route.startsWith("/business") || route.startsWith("/individual") || route.startsWith("/review-management")) {
      priority = 0.8;
      changefreq = "weekly";
    } else if (route.startsWith("/blog")) {
      priority = 0.6;
      changefreq = "weekly";
    } else if (route === "/contact-us") {
      priority = 0.5;
      changefreq = "monthly";
    }
    
    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: changefreq,
      priority: priority,
    };
  });
}
