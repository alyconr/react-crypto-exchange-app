import { useState, useEffect } from "react";
import { FcCurrencyExchange } from "react-icons/fc";
import {
  RightColumn,
  ConversionList,
  Features,
  GetStarted,
  Title,
  Video,
  LeftColumn,
  HeroSection,
} from "./HeroStyles";
import { Button, Container, Text, Row } from "../../globalStyles";
import { AiOutlineRise } from "react-icons/ai";
import { IconContext } from "react-icons";
import rates from "../../Data/rates.json";
import { motion } from "framer-motion";
import CurrencyInput from "./CurrencyInput";

const Hero = () => {
  const [sellCur, setSellCur] = useState("NZD");
  const [buyCur, setBuyCur] = useState("USD");
  const [rate, setRate] = useState(1);

  const [sellAmount, setSellAmount] = useState(1000);
  const [buyAmount, setBuyAmount] = useState(1000);

  const roundNumber = (number, decimal) => {
    if (decimal) {
      return (
        Math.round((number + Number.EPSILON) * Math.pow(10, decimal)) /
        Math.pow(10, decimal)
      );
    }
    return Math.round((number + Number.EPSILON) * 100) / 100;
  };

  useEffect(() => {
    const curRate =
      rates.conversion_rates[buyCur] / rates.conversion_rates[sellCur];
    setBuyAmount(roundNumber((sellAmount - sellAmount * 0.0066) * curRate));

    setRate(roundNumber(curRate, 5));
  }, [buyCur, sellCur, sellAmount, rate]);

  return (
    <HeroSection id="Home">
      <Container>
        <Title $bold $textcolor>
          Get your money converted to your local currency
        </Title>
        <Row $justify="center">
          <RightColumn mt="-20px">
            <div>
              <Row>
                {/* Todo Add Input */}
                <CurrencyInput
                  sell={true}
                  setValue={setSellAmount}
                  value={sellAmount}
                  currency={sellCur}
                  setCurrency={setSellCur}
                />
              </Row>
              <ConversionList>
                <li>
                  <span>
                    {roundNumber(sellAmount * 0.0016)} {sellCur}
                  </span>
                  <span>Bank Debit</span>
                </li>
                <li>
                  <span>{/*Todo*/}1.09</span>
                  <span>Our Fee</span>
                </li>
                <li>
                  <span>{roundNumber(sellAmount * 0.005)}</span>
                  <span>Total</span>
                  <div>-</div>
                </li>
                <li>
                  <span>{roundNumber(sellAmount * 0.0066)}</span>
                  <span>Amount we convert</span>
                  <div>=</div>
                </li>
                <li>
                  <span>
                    {rate}
                    <motion.span
                      initial={{ opacity: 0 }}
                      transition={{ yoyo: Infinity, duration: 1 }}
                      animate={{ opacity: 1 }}
                    >
                      <IconContext.Provider
                        value={{ size: "1.7rem", color: "#23ca8f" }}
                      >
                        <AiOutlineRise />
                      </IconContext.Provider>
                    </motion.span>
                  </span>
                  <span>Guaranteed rate (24 hrs)</span>
                  <div>x</div>
                </li>
              </ConversionList>
              <Row>
                {/*Todo*/}
                <CurrencyInput
                  currency={buyCur}
                  setValue={setBuyAmount}
                  value={buyAmount}
                  setCurrency={setBuyCur}
                />
              </Row>
              <GetStarted>
                <div>
                  <Text fontSize="0.9rem">
                    You would save vs banks
                    <br />
                    <Text fontSize="1.1rem">6.32 USD</Text>
                  </Text>
                  <Text fontSize="0.9rem">
                    Should arrive by
                    <br />
                    <Text fontSize="1.1rem">August 23</Text>
                  </Text>
                </div>
                <Button color="white">
                  Get Started <FcCurrencyExchange />
                </Button>
              </GetStarted>
            </div>
          </RightColumn>
          <LeftColumn width="50%">
            <Text $margin="0 0 0 10rem" $align="left" fontSize="0.9">
              Transfer your money to your local currency in seconds <br />
              and get your money converted to your local currency in seconds.
            </Text>
            <Video
              width="70%"
              src="/videos/stockexchange.mp4"
              autoPlay
              muted
              loop
              type="video/mp4"
            ></Video>
            <Features>
              <div>
                <img className="lock" src="/images/Lock.svg" alt="21" />
                <Text>Safest Platform </Text>
                <a href="localhost:5173">Learn More</a>
              </div>
              <div>
                <img className="reviews" src="/images/Reviews.svg" alt="21" />
                <Text>Millions of Happy Customers</Text>
                <a href="localhost:5173">See what they say</a>
              </div>
            </Features>
          </LeftColumn>
        </Row>
      </Container>
    </HeroSection>
  );
};

export default Hero;
