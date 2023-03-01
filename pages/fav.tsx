import { Box, Center, Flex, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';

import Contents from 'src/components/Contents';
import Headline from 'src/components/Headline';
import OriginalSpacer from 'src/components/OriginalSpacer';
import SigninGuidance from 'src/components/SigninGuidance';
import StageInfomation from 'src/components/StageInfomation';

import { genreArray, loginState, typeArray } from 'src/libs/signin';
import { stageArray } from 'src/libs/stage';

const Fav: NextPage = () => {
  const NowStage = () => (
    <Flex flexDir={'column'} gap={'16px'}>
      {stageArray.map((item, i) => (
        <Flex
          key={item.name + i}
          gap={'4%'}
          bg={'white'}
          p={'14px'}
          borderRadius={'24px'}
          boxShadow={'0px 0px 15px rgba(0, 0, 0, 0.05)'}
        >
          <Box
            w={'44%'}
            bg={'black600'}
            pt={'calc(45% / 3 * 4.2)'}
            borderRadius={'14px'}
            overflow={'hidden'}
            pos={'relative'}
            boxShadow={'0px 0px 3px rgba(0, 0, 0, 0.1)'}
          >
            <Box
              as={'img'}
              src={`./img/stage_img_${item.img}.jpg`}
              w={'100%'}
              h={'100%'}
              objectFit={'cover'}
              pos={'absolute'}
              inset={'0 0 0 0'}
            />
          </Box>
          <Flex
            flexDir={'column'}
            justifyContent={'space-between'}
            w={'52%'}
            p={'6px 0'}
          >
            <Box>
              <Text
                w={'fit-content'}
                color={'white'}
                bg={typeArray[item.type].color}
                p={'4px 12px'}
                fontSize={'1.1rem'}
                fontWeight={'bold'}
                borderRadius={'9999px'}
              >
                {typeArray[item.type].text}
              </Text>
              <OriginalSpacer size={'4px'} />
              <Text as={'h3'} fontSize={'1.7rem'} fontWeight={'bold'}>
                {item.name}
              </Text>
              <OriginalSpacer size={'4px'} />
              <Flex gap={'4px'}>
                {item.genre.map((genre, i2) => (
                  <Text
                    as={'span'}
                    key={genre + i2}
                    color={'black400'}
                    fontSize={'1.2rem'}
                    fontWeight={'bold'}
                  >
                    #{genreArray[i2 + 1][genre]}
                  </Text>
                ))}
              </Flex>
            </Box>
            <StageInfomation data={item} />
          </Flex>
        </Flex>
      ))}
    </Flex>
  );

  const Component = () => {
    return (
      <>
        {loginState ? (
          <>
            <OriginalSpacer size={'32px'} />
            <Headline text={'公演予定の作品'} top />
            <NowStage />
            <Headline text={'公演が終了した作品'} />
            <Box w={'100%'} overflow={'scroll'}>
              <Flex gap={'12px'} w={`calc(160px * ${stageArray.length})`}>
                {stageArray.map((item, i) => (
                  <Flex
                    key={item.name + i}
                    flexDir={'column'}
                    justifyContent={'space-between'}
                    w={'160px'}
                    bg={'white'}
                    p={'10px 10px 14px'}
                    borderRadius={'16px'}
                    boxShadow={'0px 0px 15px rgba(0, 0, 0, 0.05)'}
                  >
                    <Box>
                      <Box
                        w={'100%'}
                        bg={'black600'}
                        pt={'calc(100% / 3 * 4.2)'}
                        borderRadius={'8px'}
                        overflow={'hidden'}
                        pos={'relative'}
                        boxShadow={'0px 0px 3px rgba(0, 0, 0, 0.1)'}
                      >
                        <Box
                          as={'img'}
                          src={`./img/stage_img_${item.img}.jpg`}
                          w={'100%'}
                          h={'100%'}
                          objectFit={'cover'}
                          pos={'absolute'}
                          inset={'0 0 0 0'}
                        />
                        <Center
                          w={'40px'}
                          h={'40px'}
                          bg={'primaryBlue'}
                          pos={'absolute'}
                          inset={'8px auto auto 4px'}
                          borderRadius={'9999px'}
                        >
                          <Box as={'img'} src={'./img/nav_fav.svg'} />
                        </Center>
                      </Box>
                      <OriginalSpacer size={'8px'} />
                      <Text
                        w={'fit-content'}
                        color={'white'}
                        bg={typeArray[item.type].color}
                        p={'4px 12px'}
                        fontSize={'1.1rem'}
                        fontWeight={'bold'}
                        borderRadius={'9999px'}
                      >
                        {typeArray[item.type].text}
                      </Text>
                      <OriginalSpacer size={'4px'} />
                      <Text as={'h3'} fontSize={'1.4rem'} fontWeight={'bold'}>
                        {item.name}
                      </Text>
                      <OriginalSpacer size={'8px'} />
                    </Box>
                    <StageInfomation data={item} time />
                  </Flex>
                ))}
              </Flex>
            </Box>
            <OriginalSpacer size={'40px'} />
          </>
        ) : (
          <SigninGuidance />
        )}
      </>
    );
  };

  return <Contents component={<Component />} />;
};

export default Fav;
