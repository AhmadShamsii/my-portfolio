import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";
import TextArea from "antd/es/input/TextArea";
import { ArrowRightOutlined, GithubOutlined, InstagramOutlined, LinkedinOutlined } from "@ant-design/icons";
import Text from "antd/es/typography/Text";
import Title from "antd/es/typography/Title";
import { StyledText, StyledTitle } from "./styles";


const ContactForm: React.FC = () => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        emailjs
            .send("your_service_id", "your_template_id", values, "your_public_key")
            .then(() => {
                form.resetFields();
                alert("Message sent successfully!");
            })
            .catch(() => alert("Failed to send message!"));
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", gap: "5vw", }} >
            <div style={{ marginTop: "2%" }} >
                <StyledTitle >
                    Let's Talk
                </StyledTitle>
                <StyledText style={{ fontSize: "14px", color: "gray" }}> I am based in <strong> Islamabad, Pakistan.</strong> <br />
                    You can contact me via form or mail me directly
                </StyledText>

                <StyledTitle style={{ fontSize: "16px" }}>
                    Email
                </StyledTitle>
                <StyledText>ahmaddshamsii@gmail.com
                </StyledText>
                <StyledTitle style={{ fontSize: "16px" }}>
                    Connect
                </StyledTitle>
                <StyledText>
                    <GithubOutlined /> <LinkedinOutlined /> <InstagramOutlined />
                </StyledText>
            </div>
            <Form
                name="basic"
                onFinish={onFinish}
                layout="vertical"
                style={{ width: "30%" }}
                requiredMark="optional"
            >
                <Form.Item
                    label={<StyledTitle>Name</StyledTitle>}
                    name="name"
                    rules={[{ required: true, message: 'Please enter your name!' }]}
                >
                    <Input size="small" variant="borderless" style={{ borderBottom: "1px solid gray" }} />
                </Form.Item>

                <Form.Item
                    label={<StyledTitle>Subject</StyledTitle>}
                    name="subject"
                    rules={[{ required: true, message: 'Please enter your subject!' }]}
                >
                    <Input size="small" variant="borderless" style={{ borderBottom: "1px solid gray" }} />
                </Form.Item>

                <Form.Item
                    label={<StyledTitle>Message</StyledTitle>}
                    name="message"
                    rules={[{ required: true, message: 'Please enter your message!' }]}
                >
                    <TextArea size="small" variant="borderless" style={{ borderBottom: "1px solid gray" }} rows={4} />
                </Form.Item>

                <Form.Item style={{ display: "flex", justifyContent: "end" }} label={null}>
                    <Button type="text" style={{ borderBottom: "1px solid gray" }} iconPosition="end" icon={<ArrowRightOutlined />} htmlType="submit">
                        Send
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default ContactForm;
