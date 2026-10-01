const productionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const site = {
  name: "Yanqi Wang",
  description:
    "Writing about philosophy, politics, mathematics, school, and life.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    (productionUrl ? `https://${productionUrl}` : "http://localhost:3000"),
};
