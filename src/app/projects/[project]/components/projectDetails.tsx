import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  StyledProjectDesc,
  StyledProjectDetails,
  StyledProjectTitle,
} from "../../styles";
import { Col, Divider, Image, Row } from "antd";
import {
  ArrowUpOutlined,
  GithubOutlined,
  RocketTwoTone,
  UserOutlined,
} from "@ant-design/icons";

import monstarzCollection from "./../../../../../public/monstarzCollection.png";
import monstarzAdmin from "./../../../../../public/monstarz-admin.png";

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
            <RocketTwoTone />
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
      <Divider />
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <StyledProjectTitle style={{ fontSize: "40px" }}>
          User Side{" "}
          <UserOutlined
            style={{
              fontSize: "30px",
              backgroundColor: "#ebebf2",
              borderRadius: "50%",
              padding: "10px",
            }}
          />
        </StyledProjectTitle>
        <StyledProjectDesc>
          User can add characters to favourites and in cart to proceed to
          checkout and view the receipt
        </StyledProjectDesc>
        <video
          muted
          loop
          playsInline
          style={{
            borderRadius: "5px",
            width: "70%",
            height: "70%",
            opacity: "0.75",
            display: "block",
            margin: "5% auto",
          }}
          autoPlay
        >
          <source
            src="https://res.cloudinary.com/dzxarcdmq/video/upload/v1724613331/monstarzvideo_lungso.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <StyledProjectDesc style={{ margin: "0 15%" }}>
          There are a total of five categries of characters i-e Monstars,
          Robots, Avatars and RoboHeads from which a user can pick to buy. User
          can also add a character to favourite to save it for later. After the
          checkout user can download the receipt of the order.
        </StyledProjectDesc>
        <div style={{ display: "flex", margin: "5% 0", overflow: "hidden" }}>
          <img
            style={{ width: "100%", height: "100%" }}
            src={monstarzCollection.src}
            alt={"imageAltText"}
          />
        </div>
      </div>
      <Divider />
      {/* ==================Admin side=============== */}

      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <StyledProjectTitle style={{ fontSize: "40px" }}>
          Admin Side{" "}
          <UserOutlined
            style={{
              fontSize: "30px",
              backgroundColor: "#d6d6e0",
              borderRadius: "50%",
              padding: "10px",
            }}
          />
        </StyledProjectTitle>
        <StyledProjectDesc>
          Admin can manage customers, products. orders and order details of any
          specific order
        </StyledProjectDesc>
        <video
          muted
          loop
          playsInline
          style={{
            borderRadius: "5px",
            width: "70%",
            height: "70%",
            opacity: "0.75",
            display: "block",
            margin: "5% auto",
          }}
          autoPlay
        >
          <source
            src="https://res.cloudinary.com/dzxarcdmq/video/upload/v1724619650/monstarz-admin_gkz9z7.mkv"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <StyledProjectDesc style={{ margin: "0 15%" }}>
          In the dashboard admin can see the total sales, average value of an
          order, total orders and sales analytics by order price and by
          category. Admin can also manage all of the characters and add a new
          character based on its category. Customers can also be managed and
          order with order details are also in admin access. More than this
          admin can export the data of customers, products and orders in xlsx
          format.
        </StyledProjectDesc>
        <div style={{ display: "flex", margin: "5% 0", overflow: "hidden" }}>
          <img
            style={{ width: "100%", height: "100%" }}
            src={monstarzAdmin.src}
            alt={"imageAltText"}
          />
        </div>
      </div>
      <Divider />
    </motion.div>
  );
};
export default ProjectDetails;
