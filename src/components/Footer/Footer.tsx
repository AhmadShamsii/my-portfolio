import { CopyrightOutlined } from "@ant-design/icons"
import { Divider, Typography } from "antd"
import { StyledContainer, StyledSpace, StyledText } from "./styles";

const Footer = () => {
    const { Text } = Typography;

    return (
        <StyledContainer>
            <Divider />
            <StyledSpace>
                <StyledText>Ahmad Shamsi</StyledText>
                <StyledText>Copyright <CopyrightOutlined /> {new Date().getFullYear()} </StyledText>
            </StyledSpace>
        </StyledContainer>
    )
}
export default Footer