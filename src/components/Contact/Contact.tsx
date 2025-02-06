import React from "react";
import { Form, Input, Button, message } from "antd";
import emailjs from "emailjs-com";
import TextArea from "antd/es/input/TextArea";
import { ArrowRightOutlined, GithubOutlined, InstagramOutlined, LinkedinOutlined } from "@ant-design/icons";
import { StyledText, StyledTitle } from "./styles";
import { desktopBreakpoint, largeDesktopBreakpoint } from "@/utils/constants";
import { useMediaQuery } from "react-responsive";

const ContactForm: React.FC = () => {
    const isDesktop = useMediaQuery({ query: largeDesktopBreakpoint });
    const isSmallDesktop = useMediaQuery({ query: desktopBreakpoint });

    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        emailjs
            .send(
                process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID as string,
                process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID as string,
                values,
                process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY as string
            )
            .then(() => {
                form.resetFields();
                message.success("Message sent successfully!");
            })
            .catch((err) => message.error("Error sending message!"));
    };

    return (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", margin: isDesktop ? "50px 10vw 0 10vw" : "20px 2vw 20px 2vw", gap: "5vw" }}>
            <div style={{ marginTop: "2%" }}>
                <StyledTitle style={{ fontSize: isSmallDesktop ? "1.2vw" : "1.8vw" }}>Let's Talk</StyledTitle>
                <StyledText style={{ fontSize: isSmallDesktop ? "1.2vw" : "1.8vw", color: "gray", marginTop: isDesktop ? "20px" : "10px" }}>
                    I am based in <strong>Islamabad, Pakistan.</strong> <br />
                    You can contact me via form or mail me directly
                </StyledText>

                <StyledTitle style={{ fontSize: isSmallDesktop ? "1.2vw" : "1.8vw" }}>Email</StyledTitle>
                <StyledText style={{ marginTop: isDesktop ? "20px" : "10px", fontSize: isSmallDesktop ? "1.2vw" : "1.8vw" }}>ahmaddshamsii@gmail.com</StyledText>

                <StyledTitle style={{ fontSize: isSmallDesktop ? "1.2vw" : "1.8vw" }}>Connect</StyledTitle>
                <StyledText style={{ marginTop: isDesktop ? "20px" : "10px", fontSize: isSmallDesktop ? "1.2vw" : "1.8vw" }}>
                    <GithubOutlined /> <LinkedinOutlined /> <InstagramOutlined />
                </StyledText>
            </div>

            <Form
                form={form}
                name="basic"
                onFinish={onFinish}
                layout="vertical"
                requiredMark="optional"
                size="small"
            >
                <Form.Item
                    label={<StyledTitle style={{ fontSize: isSmallDesktop ? "1.2vw" : "1.8vw" }}>Name</StyledTitle>}
                    name="name"
                    rules={[{ required: true, message: "Please enter your name!" }]}
                >
                    <Input size="small" variant="borderless" style={{ borderBottom: "1px solid gray" }} />
                </Form.Item>

                <Form.Item
                    label={<StyledTitle style={{ fontSize: isSmallDesktop ? "1.2vw" : "1.8vw" }}>Subject</StyledTitle>}
                    name="subject"
                    rules={[{ required: true, message: "Please enter your subject!" }]}
                >
                    <Input size="small" variant="borderless" style={{ borderBottom: "1px solid gray" }} />
                </Form.Item>

                <Form.Item
                    label={<StyledTitle style={{ fontSize: isSmallDesktop ? "1.2vw" : "1.8vw" }}>Message</StyledTitle>}
                    name="message"
                    rules={[{ required: true, message: "Please enter your message!" }]}
                >
                    <TextArea size="small" variant="borderless" style={{ borderBottom: "1px solid gray" }} rows={3} />
                </Form.Item>

                <Form.Item style={{ display: "flex", justifyContent: "end" }} label={null}>
                    <Button
                        type="text"
                        style={{ borderBottom: "1px solid gray", fontSize: isSmallDesktop ? "1.2vw" : "1.8vw" }}
                        iconPosition="end"
                        icon={<ArrowRightOutlined />}
                        htmlType="submit"
                        size="small"
                    >
                        Send
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default ContactForm;