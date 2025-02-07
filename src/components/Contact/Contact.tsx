import React from "react";
import { Form, Input, message, Divider } from "antd";
import emailjs from "emailjs-com";
import TextArea from "antd/es/input/TextArea";
import { ArrowRightOutlined, GithubOutlined, InstagramOutlined, LinkedinOutlined } from "@ant-design/icons";
import { StyledButton, StyledContainer, StyledText, StyledTitle } from "./styles";
import { largeDesktopBreakpoint, mobileBreakpoint } from "@/utils/constants";
import { useMediaQuery } from "react-responsive";

const ContactForm: React.FC = () => {
    const isDesktop = useMediaQuery({ query: largeDesktopBreakpoint });
    const isMobile = useMediaQuery({ query: mobileBreakpoint });

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
        <StyledContainer style={{ margin: isDesktop ? "50px 10vw 0 10vw" : "20px 2vw 20px 2vw" }}>
            <div style={{ marginTop: "2%" }}>
                <StyledTitle>Let's Talk</StyledTitle>
                <StyledText style={{ color: "gray", marginTop: isDesktop ? "20px" : "10px" }}>
                    I am based in <strong>Islamabad, Pakistan.</strong> <br />
                    You can contact me via form or mail me directly
                </StyledText>

                <StyledTitle>Email</StyledTitle>
                <StyledText style={{ marginTop: isDesktop ? "20px" : "10px" }}>ahmaddshamsii@gmail.com</StyledText>

                <StyledTitle>Connect</StyledTitle>
                <StyledText style={{ marginTop: isDesktop ? "20px" : "10px" }}>
                    <GithubOutlined /> <LinkedinOutlined /> <InstagramOutlined />
                </StyledText>
            </div>

            {isMobile && <Divider />}

            <Form
                form={form}
                name="basic"
                onFinish={onFinish}
                layout="vertical"
                requiredMark="optional"
                size="small"
            >
                <Form.Item
                    label={<StyledTitle >Name</StyledTitle>}
                    name="name"
                    rules={[{ required: true, message: "Please enter your name!" }]}
                >
                    <Input size="small" variant="borderless" style={{ borderBottom: "1px solid gray" }} />
                </Form.Item>

                <Form.Item
                    label={<StyledTitle >Subject</StyledTitle>}
                    name="subject"
                    rules={[{ required: true, message: "Please enter your subject!" }]}
                >
                    <Input size="small" variant="borderless" style={{ borderBottom: "1px solid gray" }} />
                </Form.Item>

                <Form.Item
                    label={<StyledTitle >Message</StyledTitle>}
                    name="message"
                    rules={[{ required: true, message: "Please enter your message!" }]}
                >
                    <TextArea size="small" variant="borderless" style={{ borderBottom: "1px solid gray" }} rows={3} />
                </Form.Item>

                <Form.Item style={{ display: "flex", justifyContent: "end" }} label={null}>
                    <StyledButton
                        type="text"
                        iconPosition="end"
                        icon={<ArrowRightOutlined />}
                        htmlType="submit"
                        size="small"
                    >
                        Send
                    </StyledButton>
                </Form.Item>
            </Form>
        </StyledContainer>
    );
};

export default ContactForm;