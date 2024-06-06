import Image from 'next/image';
import { StyledCard } from './styles';
import { Flex, Tag } from 'antd';
import { colors } from '@/utils/colors';
import { StyledText } from '@/app/page';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import useMeasure from 'react-use-measure';

interface ProjectCardProps {
  imageSrc: any;
  imageAltText: string;
  projectTitle: string;
  projectDesc: string;
  projectYear: string;
  tags: any[];
  setImageDimensions: any;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageSrc,
  imageAltText,
  projectTitle,
  projectDesc,
  projectYear,
  tags,
  setImageDimensions,
  index,
}) => {
  const router = useRouter();
  const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

  const [ref, { width, height }] = useMeasure();

  useEffect(() => {
    setImageDimensions((prevDimensions: any) => ({
      ...prevDimensions,
      [index + 1]: { width, height },
    }));
  }, [index, setImageDimensions, width, height]);

  return (
    <>
      <StyledCard>
        <motion.div
          whileHover={{ scaleX: 1.02, scaleY: 1.03 }}
          transition={transition}
        >
          <Image
            ref={ref}
            onClick={() => router.push('/monstarz')}
            style={{
              borderRadius: '5px',
              width: '100%',
              height: '100%',
              opacity: '0.75',
              border: '1px solid #ced4da',
            }}
            src={imageSrc}
            alt={imageAltText}
          />
        </motion.div>
      </StyledCard>
      <Flex
        gap={20}
        style={{ margin: ' 2% 3.5% 1%  3.5%', color: colors.black }}
        justify="space-between"
      >
        <StyledText style={{ fontSize: '16px' }}>
          <span style={{ fontWeight: '300' }}> {projectTitle}</span> -{' '}
          {projectDesc}
        </StyledText>
        <StyledText style={{ fontSize: '16px', minWidth: '35px' }}>
          {projectYear}
        </StyledText>
      </Flex>
      <Flex style={{ marginLeft: '3.5%' }} gap="8px" wrap>
        {tags?.map((item: any) => (
          <Tag color={item.color}>{item?.tag}</Tag>
        ))}
      </Flex>
    </>
  );
};
export default ProjectCard;
