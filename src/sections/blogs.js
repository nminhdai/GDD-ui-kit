import React from "react";
import { Container, Box, Grid } from "theme-ui";
import Masonry from "react-masonry-component";
import BlockTitle from "components/block-title";
import BlogCard from "components/cards/blog-card";

import blogImage1 from "assets/blog-1-1.png";
import blogImage2 from "assets/blog-1-2.png";
import blogImage3 from "assets/blog-1-3.png";
import blogImage4 from "assets/blog-1-4.png";

const BLOG_DATA = [
  {
    image: blogImage1,
    title: "Behind the Scenes",
    description:
      "A Day in the Life of a Hairstylist - Give readers an inside look at what it's like to work in a salon, including the different types of services offered and the daily routines of hairstylists.",
    path: "/",
    linkLabel: "Learn More",
  },
  {
    image: null,
    title:
      "Antibias receives honorable gift mention at Fast Company’s most Innovation by Design Awards",
    description: null,
    path: "/",
    linkLabel: null,
  },
  {
    image: blogImage3,
    title:
      "The Top Hair Trends of the Season: the latest hair trends and styles that are popular among customers",
    description: null,
    path: "/",
    linkLabel: null,
  },
  {
    image: blogImage2,
    title: "The benefits of self-care",
    description:
      "How our services can contribute to a customer's overall wellness",
    path: "/",
    linkLabel: "Learn More",
  },
  {
    image: blogImage4,
    title: "How to Keep Your Hair Healthy During the Summer Months",
    description: null,
    path: "/",
    linkLabel: null,
  },
];

const masonryOptions = {
  transitionDuration: 0,
};

const Blogs = () => {
  return (
    <Box as="section" id="news" sx={styles.blogs}>
      <Container>
        <BlockTitle
          title="Popular blog post we updated"
          text="Updete newsfeed blog"
        />
        <Box as={Masonry} options={masonryOptions} sx={styles.blogWrapper}>
          {BLOG_DATA.map(
            ({ image, title, description, path, linkLabel }, index) => (
              <BlogCard
                key={index}
                image={image}
                title={title}
                description={description}
                path={path}
                linkLabel={linkLabel}
              />
            )
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Blogs;

const styles = {
  blogs: {
    pt: ["80px", null, null, null, "80px", null, "100px"],
    pb: ["40px", null, null, null, "140px", null, "100px"],
  },
  blogWrapper: {
    mx: "-15px",
  },
};
