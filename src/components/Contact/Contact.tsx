import React from "react";
import { Form, Input, message, Divider } from "antd";
import emailjs from "emailjs-com";
import TextArea from "antd/es/input/TextArea";
import { ArrowRightOutlined, FileTextOutlined, GithubOutlined, InstagramOutlined, LinkedinOutlined, MailOutlined } from "@ant-design/icons";
import { StyledButton, StyledContainer, StyledText, StyledTitle } from "./styles";
import { largeDesktopBreakpoint, mobileBreakpoint } from "@/utils/constants";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";

// Define the props type
interface ContactFormProps {
    isContactPage: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ isContactPage = false }: any) => {
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
        <StyledContainer style={{ minHeight: isContactPage ? "87vh" : "auto", margin: isDesktop ? "50px 10vw 0 10vw" : "20px 2vw 20px 2vw" }}>
            <div style={{ marginTop: "2%", height: isContactPage ? "0px" : "auto"}}>
                <StyledTitle>Let&#39;s Talk</StyledTitle>
                <StyledText style={{ color: "gray", marginBottom: isDesktop ? "20px" : "10px" }}>
                    I am based in <strong>Islamabad, Pakistan.</strong> <br />
                    You can contact me via form or mail me directly
                </StyledText>

                <StyledTitle>Email</StyledTitle>
                <StyledText style={{ marginBottom: isDesktop ? "20px" : "10px" }}>ahmaddshamsii@gmail.com</StyledText>

                <StyledTitle>Connect</StyledTitle>
                <StyledText style={{ marginBottom: isDesktop ? "20px" : "10px", cursor: "pointer", display: "flex", gap: "7px", marginTop: "5px" }}>
                    <Link target="_blank" href="https://github.com/AhmadShamsii"> <GithubOutlined /> </Link>
                    <Link target="_blank" href="https://www.linkedin.com/in/ahmadshamsii/"> <LinkedinOutlined /></Link>
                    <Link target="_blank" href="https://www.instagram.com/ahmadshamsii/"> <InstagramOutlined /></Link>
                    <Link href="mailto:ahmaddshamsii@gmail.com"> <MailOutlined /></Link>
                    <Link rel="noopener noreferrer" target="_blank" href="/resume.pdf"> <FileTextOutlined /></Link>
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

                <Form.Item style={{ display: "flex", justifyContent: "end", marginBottom: "0px" }} label={null}>
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