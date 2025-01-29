import React from "react";
import { Form, Input, Button, message } from "antd";
import emailjs from "emailjs-com";
import TextArea from "antd/es/input/TextArea";
import { ArrowRightOutlined, GithubOutlined, InstagramOutlined, LinkedinOutlined } from "@ant-design/icons";
import { StyledText, StyledTitle } from "./styles";

const ContactForm: React.FC = () => {
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
        <div style={{ display: "flex", justifyContent: "center", gap: "5vw" }}>
            <div style={{ marginTop: "2%" }}>
                <StyledTitle>Let's Talk</StyledTitle>
                <StyledText style={{ fontSize: "14px", color: "gray" }}>
                    I am based in <strong>Islamabad, Pakistan.</strong> <br />
                    You can contact me via form or mail me directly
                </StyledText>

                <StyledTitle style={{ fontSize: "16px" }}>Email</StyledTitle>
                <StyledText>ahmaddshamsii@gmail.com</StyledText>

                <StyledTitle style={{ fontSize: "16px" }}>Connect</StyledTitle>
                <StyledText>
                    <GithubOutlined /> <LinkedinOutlined /> <InstagramOutlined />
                </StyledText>
            </div>

            <Form
                form={form}
                name="basic"
                onFinish={onFinish}
                layout="vertical"
                style={{ width: "30%" }}
                requiredMark="optional"
            >
                <Form.Item
                    label={<StyledTitle>Name</StyledTitle>}
                    name="name"
                    rules={[{ required: true, message: "Please enter your name!" }]}
                >
                    <Input size="small" variant="borderless" style={{ borderBottom: "1px solid gray" }} />
                </Form.Item>

                <Form.Item
                    label={<StyledTitle>Subject</StyledTitle>}
                    name="subject"
                    rules={[{ required: true, message: "Please enter your subject!" }]}
                >
                    <Input size="small" variant="borderless" style={{ borderBottom: "1px solid gray" }} />
                </Form.Item>

                <Form.Item
                    label={<StyledTitle>Message</StyledTitle>}
                    name="message"
                    rules={[{ required: true, message: "Please enter your message!" }]}
                >
                    <TextArea size="small" variant="borderless" style={{ borderBottom: "1px solid gray" }} rows={4} />
                </Form.Item>

                <Form.Item style={{ display: "flex", justifyContent: "end" }} label={null}>
                    <Button
                        type="text"
                        style={{ borderBottom: "1px solid gray" }}
                        iconPosition="end"
                        icon={<ArrowRightOutlined />}
                        htmlType="submit"
                    >
                        Send
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default ContactForm;