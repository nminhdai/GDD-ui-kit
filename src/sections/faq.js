import React from "react";
import { Box, Container, Flex, Text, Heading } from "theme-ui";
import { Link } from "components/link";
import BlockTitle from "components/block-title";
import Accordion from "components/accordion/accordion";

const accordionData = [
  {
    isExpanded: false,
    title: "What are your salon hours?",
    contents: (
      <div>
        Our salon is open Monday through Friday from 9am to 8pm, and on weekends
        from 10am to 6pm. However, please note that we may have extended hours
        during busy periods or holiday seasons. We recommend checking our
        website or social media pages for up-to-date information on our hours.
      </div>
    ),
  },
  {
    isExpanded: true,
    title: "How much does a haircut cost?",
    contents: (
      <div>
        Haircut prices vary depending on the stylist's level of experience and
        the complexity of the service. Our prices start at $XX for a basic
        haircut. However, please note that additional charges may apply for long
        or thick hair, or for additional styling services such as blowouts or
        updos. Our stylists are happy to provide a consultation and pricing
        information prior to starting the service.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "Do you accept walk-ins or do I need to make an appointment?",
    contents: (
      <div>
        We accept both walk-ins and appointments. However, we highly recommend
        making an appointment to ensure availability and minimize wait times.
        Walk-in clients are welcome, but please note that we may not be able to
        accommodate your preferred time or stylist if they are already booked.
        Making an appointment is easy and can be done through our website, by
        phone, or in person at the salon.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "How long does a hair coloring appointment typically take?",
    contents: (
      <div>
        The duration of a hair coloring appointment can vary depending on the
        service, but on average it takes about 2-3 hours. Factors such as the
        desired color, current hair color, and hair length and texture can all
        affect the time required. Our stylists will provide an estimate of the
        time needed for the service during the consultation. Please note that
        some color services may require multiple appointments to achieve the
        desired result.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "What type of hair products do you use?",
    contents: (
      <div>
        We use high-quality professional hair products that are suitable for a
        variety of hair types and textures. Our salon stocks a range of
        professional hair care brands such as Redken, Matrix, and Paul Mitchell,
        as well as a selection of natural and organic hair care products. Our
        stylists can also recommend products for at-home hair care based on your
        hair type, concerns, and styling needs.
      </div>
    ),
  },
];

const FAQ = () => {
  return (
    <Box as="section">
      <Container>
        <BlockTitle
          title="Frequently Ask Question"
          text="Ask your question and meet"
        />
        <Flex sx={styles.flex}>
          <Box sx={styles.faqWrapper}>
            <Accordion items={accordionData} />
          </Box>
          <Box sx={styles.content}>
            <Heading as="h3">
              Do you have any quesiton? Please ask here we ready to support
            </Heading>
            <Text as="p">
              If your question is not list here, please feel free to make a
              manual support.
            </Text>
            <Link sx={styles.askButton} path="#">
              Ask your Question
            </Link>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default FAQ;

const styles = {
  flex: {
    flexWrap: "wrap",
    flexDirection: ["column", null, null, null, null, "row-reverse"],
    pb: ["70px", null, null, null, "90px", null, "130px"],
  },
  content: {
    flex: ["0 0 100%", null, null, null, "0 0 33.333%"],
    maxWidth: ["100%", null, null, "450px", "100%"],
    mx: ["auto", null, null, null, "0"],
    mb: ["0px", null, null, null, "0"],
    textAlign: ["center", null, null, null, null, "left"],
    mt: ["40px", null, null, null, null, "0"],
    h3: {
      fontSize: ["23px", null, null, null, "24px"],
      lineHeight: [1.5, null, null, null, 1.67],
      color: "black",
      fontWeight: 700,
      letterSpacing: "-1.5px",
      mt: "-5px",
      pr: ["0", null, null, null, null, "30px"],
    },
    p: {
      fontSize: "16px",
      lineHeight: 1.87,
      color: "#343D48",
      opacity: 0.7,
      mt: "10px",
      pr: ["0", null, null, null, null, "80px"],
    },
  },
  askButton: {
    display: "inline-block",
    verticalAlign: "middle",
    backgroundColor: "#02073E",
    color: "#fff",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: 700,
    p: "6.5px 19px",
    letterSpacing: "-0.16px",
    mt: "25px",
    transition: "all 500ms ease",
    "&:hover": {
      opacity: 0.8,
    },
  },
  faqWrapper: {
    flex: ["0 0 100%", null, null, null, "0 0 66.666%"],
  },
};
