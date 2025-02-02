import { StyledText } from "@/app/page";
import { Col } from "antd";
import Image from "next/image";
import { colors } from "@/utils/colors";
import { animate, motion, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";
import { useEffect, useState } from "react";
import { FAST_SCROLL, largeDesktopBreakpoint, SLOW_SCROLL } from "@/utils/constants";
import { StyledCard } from "./styles";
import { useMediaQuery } from "react-responsive";
// interface TexhnologiesCardProps {
//   logo: any;
//   technology: string;
// }

const TexhnologiesCard = ({ technologies }: any) => {
  const isDesktop = useMediaQuery({ query: largeDesktopBreakpoint });

  const [duration, setDuration] = useState(FAST_SCROLL);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);
  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    const finalPosition = -width / 2 - 8;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls.stop;
  }, [xTranslation, width, duration, rerender]);

  return (
    <motion.div
      style={{ x: xTranslation, margin: "10px 0" }}
      onHoverStart={() => {
        setMustFinish(true);
        setDuration(SLOW_SCROLL);
      }}
      onHoverEnd={() => {
        setMustFinish(true);
        setDuration(FAST_SCROLL);
      }}
      ref={ref}
    >
      <Col style={{ display: "flex", gap: "20px" }}>
        {[...technologies, ...technologies]?.map((item: any) => (
          <StyledCard
            style={{ width: isDesktop ? "130px" : "100px", height: isDesktop ? "150px" : "120px", display: "flex" }}
            hoverable
          >
            <>
              <Image
                style={{
                  width: "100%",
                  height: "auto",
                  padding: "0px",
                }}
                alt="react logo"
                src={item.logo}
              />
              <StyledText
                style={{
                  textAlign: "center",
                  paddingTop: 0,
                  fontSize: "16px",
                  fontWeight: "300",
                  color: colors.darkgray,

                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                }}
              >
                {item.technology}
              </StyledText>
            </>
          </StyledCard>
        ))}
      </Col>
    </motion.div>
  );
};
export default TexhnologiesCard;
