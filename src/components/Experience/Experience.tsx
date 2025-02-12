import { Badge, Space, Steps, Typography } from 'antd';
import React, { useRef } from 'react';
import { StyledSpace, StyledText, StyledTitle, StyledTitle2 } from './styles';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { desktopBreakpoint, largeDesktopBreakpoint } from '@/utils/constants';
import { useMediaQuery } from 'react-responsive';

const { Text, Title } = Typography;

const Experience = () => {
    const isDesktop = useMediaQuery({ query: largeDesktopBreakpoint });
    const isSmallDesktop = useMediaQuery({ query: desktopBreakpoint });

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const isInView1 = useInView(ref1, { once: true }); // Only animate once when in view
    const isInView2 = useInView(ref2, { once: true }); // Only animate once when in view

    // const { scrollYProgress: scrollYProgress1 } = useScroll({
    //     target: ref1,
    //     offset: ["0.5 1", "1.33 1"],
    // });

    // const { scrollYProgress: scrollYProgress2 } = useScroll({
    //     target: ref2,
    //     offset: ["0.5 1", "1.33 1"],
    // });


    // const scaleProgress1 = useTransform(scrollYProgress1, [0, 1], [0.9, 1]);
    // const scaleProgress2 = useTransform(scrollYProgress2, [0, 1], [0.9, 1]);

    return (
        <Steps
            style={{ width: isDesktop ? "70vw" : "100%", paddingLeft: isDesktop ? "10vw" : "0vw", margin: isDesktop ? "0vw" : "0 2vw" }}
            progressDot
            current={-1}
            direction="vertical"
            items={[
                {
                    title: (
                        <motion.div
                            ref={ref1}
                            initial={{ opacity: 0, y: 50 }} // Start off-screen and transparent
                            animate={isInView1 ? { opacity: 1, y: 0 } : {}} // Fade in and slide up when in view
                            transition={{ duration: 0.8 }}
                            className="w-32 h-32 bg-blue-500 rounded-lg"
                        >
                            <StyledSpace style={{ width: isDesktop ? "50vw" : "70vw" }}>
                                <Space style={{ rowGap: "0px" }} direction='vertical'>
                                    <StyledTitle>JMM TECHNOLOGIES</StyledTitle>
                                    <StyledTitle2>Software Engineer (ReactJS)</StyledTitle2>
                                </Space>
                                <Space style={{ rowGap: "0px" }} direction='vertical'>
                                    <StyledText >Remote</StyledText>
                                    <StyledText >July 2024 - Present</StyledText>
                                </Space>
                            </StyledSpace>
                        </motion.div>
                    ),
                    description: (
                        <motion.div
                        initial={{ opacity: 0, y: 50 }} // Start off-screen and transparent
                        animate={isInView1 ? { opacity: 1, y: 0 } : {}} // Fade in and slide up when in view
                        transition={{ duration: 0.8 }}
                        className="w-32 h-32 bg-blue-500 rounded-lg"
                        >
                            <StyledText style={{ width: isDesktop ? "50vw" : "70vw", marginTop: "20px", rowGap: "20px", display: "flex", flexDirection: "column", marginBottom: "20px" }}>
                                <Space>
                                    <Badge style={{ marginRight: "10px" }} status="default" />
                                    Developed and maintained HRM software using ReactJS and GraphQL, improving the efficiency of employee
                                    management software
                                </Space>
                                <Space>
                                    <Badge style={{ marginRight: "10px" }} status="default" />
                                    Collaborated with cross-functional teams to integrate GraphQL APIs, reducing query response times and enhancing
                                    user experience across HRM applications.
                                </Space>
                                <Space>
                                    <Badge style={{ marginRight: "10px" }} status="default" />
                                    Implemented reusable React components and hooks for scalable front-end architecture, ensuring consistent UI/UX
                                    in HRM system
                                </Space>
                            </StyledText>
                        </motion.div>
                    ),
                },
                {
                    title: (
                        <motion.div
                        ref={ref2}
                        initial={{ opacity: 0, y: 50 }} // Start off-screen and transparent
                        animate={isInView2 ? { opacity: 1, y: 0 } : {}} // Fade in and slide up when in view
                        transition={{ duration: 0.8 }}
                        className="w-32 h-32 bg-blue-500 rounded-lg"
                        >
                            <StyledSpace style={{ width: isDesktop ? "50vw" : "70vw" }}>
                                <Space style={{ rowGap: "0px" }} direction='vertical'>
                                    <StyledTitle>SMART FORUM</StyledTitle>
                                    <StyledTitle2>Junior Software Engineer</StyledTitle2>
                                </Space>
                                <Space style={{ rowGap: "0px" }} direction='vertical'>
                                    <StyledText>Islamabad, Pakistan</StyledText>
                                    <StyledText>Jan 2023 - July 2024</StyledText>
                                </Space>
                            </StyledSpace>
                        </motion.div>
                    ),
                    description: (
                        <motion.div
                        initial={{ opacity: 0, y: 50 }} // Start off-screen and transparent
                        animate={isInView2 ? { opacity: 1, y: 0 } : {}} // Fade in and slide up when in view
                        transition={{ duration: 0.8 }}
                        className="w-32 h-32 bg-blue-500 rounded-lg"
                        >
                            <StyledText style={{ width: isDesktop ? "50vw" : "70vw", marginTop: "20px", rowGap: "20px", display: "flex", flexDirection: "column" }}>
                                <Space>
                                    <Badge style={{ marginRight: "10px" }} status="default" />
                                    Worked with Qualcomm development team and developed a project management tool for Qualcomm using React and
                                    Typescript ensuring cross-browser compatibility and enhanced user experience.
                                </Space>
                                <Space>
                                    <Badge style={{ marginRight: "10px" }} status="default" />
                                    Integrated RESTful APIs to connect frontend with backend, optimizing data flow and application functionality
                                </Space>
                                <Space>
                                    <Badge style={{ marginRight: "10px" }} status="default" />
                                    Implemented dynamic components and state management solutions in React to streamline user interactions and
                                    improve application performance
                                </Space>
                            </StyledText>
                        </motion.div>
                    ),
                },
            ]}
        />
    );
};

export default Experience;