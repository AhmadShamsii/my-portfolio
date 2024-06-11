'use client';
import { StyledCard } from '@/components/ProjectCard/styles';
import { colors } from '@/utils/colors';
import { Flex, Tag } from 'antd';
import { easeIn, easeInOut, motion } from 'framer-motion';
import router from 'next/router';
import { StyledText } from '../page';
import monstarzImg from './../../../public/monstarzImg.png';
import Image from 'next/image';
import { UseSelector, useSelector } from 'react-redux';
import { monstarzSelector } from '@/lib/features/projects/selectors';

const Monstarz = () => {
  const { dimensions } = useSelector(monstarzSelector);
  const transition = { duration: 0.4, easeInOut: [0.6, 0.01, -0.05, 0.9] };
  return (
    <>
      <motion.div
        initial={{
          y: '50%',
          x: '25%',
          width: dimensions?.width,
          height: dimensions?.height,
        }}
        animate={{
          y: 0,
          x: 0,
          width: '100%',
          transition: { delay: 0.2, ...transition },
        }}
      >
        <motion.div initial={{ scale: 1 }}>
          <Image
            style={{
              borderRadius: '5px',
              width: '100%',
              height: '100%',
              opacity: '0.75',
              border: '1px solid #ced4da',
            }}
            src={monstarzImg}
            alt={'imageAltText'}
          />
        </motion.div>
      </motion.div>
    </>
  );
};
export default Monstarz;
