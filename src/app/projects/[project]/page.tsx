// pages/about.tsx
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import {
  monstarzSelector,
  wordplaySelector,
  traveloSelector,
  nextersSelector,
} from '@/lib/features/projects/selectors';
import monstarzImg from './../../../../public/monstarzImg.png';
import wordplay from './../../../../public/wordplay.png';
import nexters from './../../../../public/nexters.png';
import travelo from './../../../../public/travelo.png';
const Project = ({ params }: { params: { project: string } }) => {
  //selectors
  const { dimensions: monstarzDimensions } = useSelector(monstarzSelector);
  const { dimensions: wordplayDimensions } = useSelector(wordplaySelector);
  const { dimensions: traveloDimensions } = useSelector(traveloSelector);
  const { dimensions: nextersDimensions } = useSelector(nextersSelector);

  const transition = { duration: 0.5, easeInOut: [0.6, 0.01, -0.05, 0.9] };

  const getDimensions = () => {
    if (params.project === 'monstarz') return monstarzDimensions;
    else if (params.project === 'wordplay') return wordplayDimensions;
    else if (params.project === 'travelo') return traveloDimensions;
    else if (params.project === 'nexters') return nextersDimensions;
    return null;
  };

  const getImage = () => {
    if (params.project === 'monstarz') return monstarzImg;
    else if (params.project === 'wordplay') return wordplay;
    else if (params.project === 'travelo') return travelo;
    else if (params.project === 'nexters') return nexters;
    return monstarzImg;
  };

  console.log('debugginh');

  return (
    <>
      <motion.div
        initial={{
          y: '50%',
          x: '50%',
          width: getDimensions()?.width,
          height: getDimensions()?.height,
        }}
        animate={{
          y: 0,
          x: 0,
          width: '100%',
          // height: '50%',
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
            src={getImage()}
            alt={'imageAltText'}
          />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Project;
