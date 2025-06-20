import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  ogImage = 'https://foreignlanguagesandhospitality.com/title-logo.png',
  noindex = false,
}) => {
  const location = useLocation();
  const fullTitle = `${title} | International Institute of Foreign Languages & Hospitality Management`;
  const baseUrl = 'https://foreignlanguagesandhospitality.com';
  const canonicalUrl = canonical || `${baseUrl}${location.pathname}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="International Institute of Foreign Languages & Hospitality Management" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Robots */}
      <meta name="robots" content={noindex ? "noindex, follow" : "index, follow"} />
    </Helmet>
  );
};

export default SEO; 