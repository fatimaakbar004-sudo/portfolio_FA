import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

const KEYWORDS = [
  "React",
  "Frontend Developer",
  "JavaScript",
  "Tailwind CSS",
  "Portfolio",
  "Vite",
  "Web Developer",
].join(", ");

function SEO({ title, description, image, url }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={KEYWORDS} />
      <meta name="author" content="Fatima Akbar" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
};

SEO.defaultProps = {
  title: "Fatima Akbar | Frontend Developer",
  description:
    "Professional React frontend developer portfolio built using React, Tailwind CSS and Vite.",
  image: "/preview.png",
  url: "https://your-vercel-domain.vercel.app",
};

export default SEO;