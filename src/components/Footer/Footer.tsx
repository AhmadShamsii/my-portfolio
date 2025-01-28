import { CopyrightOutlined } from "@ant-design/icons"
import { Divider, Typography } from "antd"
import { StyledSpace, StyledText } from "./styles";

const Footer = () => {
    const { Text } = Typography;

    return (
        <div>
            <Divider />
            <StyledSpace>
                <Text>Ahmad Shamsi</Text>
                <StyledText>Copyright <CopyrightOutlined /> {new Date().getFullYear()} </StyledText>
            </StyledSpace>
        </div>
    )
}
export default Footer