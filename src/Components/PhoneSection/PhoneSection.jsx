import React from "react";
import { Container, Heading, Row, Text, Section } from "../../globalStyles";
import { PhoneColumn } from "./PhoneSectionStyle";
import { Player } from "@lottiefiles/react-lottie-player";

const PhoneSection = () => {
  const data = [
    {
      img: "./images/animation_1.json",
      title: "Cheaper an easier",
      description: "Send money at real exchange rates with no hidden fees",
    },
    {
      img: "./images/animation_2.json",
      title: "Send money overseas",
      description:
        "Send money to more than 200 countries and withdraw anywhere",
    },
    {
      img: "./images/animation_3.json",
      title: "Convert and hold 54 currencies",
      description:
        "Holding multiple currencies is completely free, and we use the real exchange rate to convert",
    },
  ];

  return (
    <Section $white id="phone" padding="60px 0">
      <Container>
        <Row align="center" justify="center" wrap="wrap">
          <Heading mb="1rem" $inverse>
            Available on your phone too
          </Heading>
          <Row justify="center" wrap="wrap">
            {data.map((el, index) => (
              <PhoneColumn key={index}>
                <Player src={el.img} autoplay loop />
                <Text as="h5" align="center" $inverse $bold fontSize="1.3rem">
                  {el.title}
                </Text>
                <Text align="center" $inverse mb="auto" fontSize="0.9rem">
                  {el.description}
                </Text>
              </PhoneColumn>
            ))}
          </Row>
        </Row>
      </Container>
    </Section>
  );
};

export default PhoneSection;
