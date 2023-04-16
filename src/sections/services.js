import React from "react";
import { Box, Container, Grid } from "theme-ui";
import BlockTitle from "components/block-title";
import ServiceCard from "components/cards/service-card";
import serviceImage1 from "assets/service-1.png";
import serviceImage2 from "assets/service-2.png";
import serviceImage3 from "assets/service-3.png";
import serviceImage4 from "assets/service-4.png";
import serviceImage5 from "assets/service-5.png";
import serviceImage6 from "assets/service-6.png";

const SERVICES_DATA = [
  {
    image: serviceImage1,
    text: "The ability of a product to deliver high-quality results that exceed customer expectations, such as vibrant color, healthy-looking hair, or improved texture.",
    heading: "Performance",
    path: "#",
  },
  {
    image: serviceImage2,
    text: "The use of high-quality and natural ingredients that nourish and hydrate the hair while being gentle on the scalp.",
    heading: "Ingredients",
    path: "#",
  },
  {
    image: serviceImage3,
    text: "The use of eco-friendly and sustainable production practices, packaging, and ingredients.",
    heading: "Sustainability",
    path: "#",
  },
  {
    image: serviceImage4,
    text: "The ability of a product to be used in a variety of ways to achieve different looks and styles.",
    heading: "Versatility",
    path: "#",
  },
  {
    image: serviceImage5,
    text: "The use of pleasant and aromatherapeutic scents that enhance the overall salon experience.",
    heading: "Fragrance",
    path: "#",
  },
  {
    image: serviceImage6,
    text: "The recognition and trust that a brand has established by delivering high-quality products and excellent customer service.",
    heading: "Brand reputation",
    path: "#",
  },
];
const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.services}>
      <Container>
        <BlockTitle
          title="What the features of product"
          text="Features are highlighted here"
        />
        <Grid sx={styles.grid}>
          {SERVICES_DATA.map(({ image, text, heading, path }, index) => (
            <ServiceCard
              image={image}
              text={text}
              heading={heading}
              path={path}
              key={index}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  services: {
    pt: ["80px", null, null, null, "80px", null, "100px"],
  },
  grid: {
    gridGap: "30px",
    gridTemplateColumns: ["1fr", null, null, "1fr 1fr", null, "1fr 1fr 1fr"],
  },
};
