import { FC } from 'react';
import { Text } from '@chakra-ui/react';

import { stageType } from 'src/types/stage';

import { typeArray } from 'src/libs/signin';

type Props = {
  data: stageType;
};

const StageType: FC<Props> = ({ data }) => {
  return (
    <Text
      w={'fit-content'}
      color={'white'}
      bg={typeArray[data.type].color}
      p={'4px 12px'}
      fontSize={'1.1rem'}
      fontWeight={'bold'}
      borderRadius={'9999px'}
    >
      {typeArray[data.type].text}
    </Text>
  );
};

export default StageType;
