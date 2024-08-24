import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  StyledProjectDesc,
  StyledProjectDetails,
  StyledProjectTitle,
} from "../../styles";
import { Col, Divider, Row } from "antd";
import { ArrowUpOutlined, GithubOutlined } from "@ant-design/icons";

const ProjectDetails = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Only animate once when in view

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }} // Start off-screen and transparent
      animate={isInView ? { opacity: 1, y: 0 } : {}} // Fade in and slide up when in view
      transition={{ duration: 0.8 }}
      className="w-32 h-32 bg-blue-500 rounded-lg"
    >
      <StyledProjectDetails>
        <StyledProjectTitle>Monstarz</StyledProjectTitle>
        <StyledProjectDesc>
          An e-commerce store to buy cool characters like monsters, avatars,
          robots and more along with admin dashboard.
        </StyledProjectDesc>
        <Divider />
        <div>
          It was a learning project that i designed and developed all by myself
          while learning React. It contains a complete e-commerce flow with
          additional admin dashboard to manage products, customers and orders.
        </div>
        <Divider />
        <Row>
          <Col span={6}>
            <div style={{ fontWeight: "bold" }}>Timeline</div>
            <div>May - Sept 2024</div>
          </Col>
          <Col span={6}>
            <div style={{ fontWeight: "bold" }}>Technologies</div>
            <div>
              React <br /> Typescript <br /> Ant Design <br /> Styled Components
            </div>
          </Col>
          <Col span={6}>
            <div style={{ fontWeight: "bold" }}>Web services</div>
            <div>
              <a
                style={{ color: "black" }}
                href="https://robohash.org/"
                target="_blank"
              >
                Robohash
              </a>
              <br />
              <a
                style={{ color: "black" }}
                href="https://www.chartjs.org/"
                target="_blank"
              >
                Chart.js
              </a>
              <br />
              <a
                style={{ color: "black" }}
                href="https://html2canvas.hertzen.com/"
                target="_blank"
              >
                html2canvas
              </a>
              <br />
              <a
                style={{ color: "black" }}
                href="https://sheetjs.com/"
                target="_blank"
              >
                SheetJS
              </a>
              <br />
            </div>
          </Col>
          <Col span={6}>
            <div style={{ fontWeight: "bold" }}>Links</div>
            <a
              style={{ color: "black", marginRight: "5px" }}
              href="https://monstarz.vercel.app/"
              target="_blank"
            >
              Test it Live!
            </a>
            <ArrowUpOutlined />
            <br />
            <a
              style={{ color: "black", marginRight: "5px" }}
              href="https://github.com/AhmadShamsii/Monstarz/"
              target="_blank"
            >
              Github Repo
            </a>
            <GithubOutlined />
          </Col>
        </Row>
      </StyledProjectDetails>
    </motion.div>
  );
};
export default ProjectDetails;
