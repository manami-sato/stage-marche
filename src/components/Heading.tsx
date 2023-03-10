import { FC, SetStateAction, useEffect, useState } from 'react';
import { Box, Button, Center, Flex, Input, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { navContents } from 'src/libs/nav';
import { searchColumnArray, searchStageArray } from 'src/libs/search';

import { navContentsType } from 'src/types/nav';
import { searchType } from 'src/types/search';
import OriginalSpacer from 'src/components/OriginalSpacer';

type Props = {
  path: string;
  back?: boolean;
  search?: boolean;
};

const Heading: FC<Props> = ({ path, back, search }) => {
  const router = useRouter();
  const [nav, setNav] = useState<navContentsType>();
  const [navIndex, setNavIndex] = useState<number>(0);

  const [inputText, setInputText] = useState<string>();
  const [isSearch, setIsSearch] = useState<boolean>(false);

  useEffect(() => {
    if (path) {
      for (let i = 0; i < navContents.length; i++) {
        if (`/${navContents[i].path}` === path) {
          setNav(navContents[i]);
          setNavIndex(i);
        }
      }
    }
  }, []);

  const backFunc = () => {
    router.back();
  };

  const Back = () => (
    <>
      {back && (
        <Box
          w={'24px'}
          h={'24px'}
          pos={'absolute'}
          inset={'auto auto auto 5vw'}
          sx={{
            '&::before': {
              content: '""',
              display: 'block',
              width: '14px',
              height: '3px',
              background: 'black800',
              position: 'absolute',
              inset: '7px 0 auto -2px',
              margin: 'auto',
              borderRadius: '2px',
              transform: 'rotateZ(-45deg)',
            },
            '&::after': {
              content: '""',
              display: 'block',
              width: '14px',
              height: '3px',
              background: 'black800',
              position: 'absolute',
              inset: 'auto 0 6px -2px',
              margin: 'auto',
              borderRadius: '2px',
              transform: 'rotateZ(45deg)',
            },
          }}
          onClick={() => backFunc()}
        />
      )}
    </>
  );
  const HeadingText = () => (
    <>
      {nav && (
        <Text as={'span'}>
          {navIndex === 0 ? '????????????????????????' : nav.name}
        </Text>
      )}
    </>
  );
  const Search = () => (
    <>
      {search && (
        <Box
          w={'20px'}
          h={'100%'}
          pos={'absolute'}
          inset={'auto 5vw auto auto'}
          sx={{
            '&::before': {
              content: '""',
              display: 'block',
              width: '20px',
              height: '20px',
              borderWidth: '3.5px',
              borderStyle: 'solid',
              borderColor: 'black800',
              position: 'absolute',
              inset: '0 0 0 0',
              margin: 'auto',
              borderRadius: '9999px',
            },
            '&::after': {
              content: '""',
              display: 'block',
              width: '7px',
              height: '3.5px',
              background: 'black800',
              position: 'absolute',
              inset: '0 0 -14px 14px',
              margin: 'auto',
              borderRadius: '2px',
              transform: 'rotateZ(45deg)',
            },
          }}
          onClick={() => isSearchFunc()}
        />
      )}
    </>
  );

  const inputTextFunc = (e: {
    currentTarget: { value: SetStateAction<string | undefined> };
  }) => {
    setInputText(e.currentTarget.value);
  };

  const isSearchFunc = () => {
    setIsSearch(!isSearch);
  };

  return (
    <>
      <Center
        as={'header'}
        w={'100vw'}
        h={'64px'}
        bg={'white'}
        fontSize={'1.7rem'}
        fontWeight={'bold'}
        pos={'fixed'}
        inset={'0 0 auto auto'}
        textStyle={'shadow'}
        zIndex={'20'}
      >
        <Back />
        <HeadingText />
        <Search />
      </Center>
      {nav && (
        <Box
          w={'100vw'}
          h={'100vh'}
          bg={'white'}
          pos={'fixed'}
          inset={'0 0 auto auto'}
          zIndex={'30'}
          textAlign={'center'}
          transition={'transform 0.3s'}
          sx={{
            ...(isSearch
              ? {
                  transform: 'translateY(0)',
                }
              : {
                  transform: 'translateY(100%)',
                }),
          }}
        >
          <Center
            w={'100vw'}
            h={'64px'}
            fontSize={'1.7rem'}
            fontWeight={'bold'}
            pos={'relative'}
          >
            <Text
              as={'button'}
              color={'primary'}
              pos={'absolute'}
              inset={'auto auto auto 5vw'}
            >
              ?????????
            </Text>
            {navIndex === 0 ? '????????????' : nav.name}?????????
            <Center
              w={'20px'}
              h={'20px'}
              pos={'absolute'}
              inset={'auto 5vw auto auto'}
              sx={{
                '&::before': {
                  content: '""',
                  display: 'block',
                  width: '22px',
                  height: '3px',
                  background: 'black800',
                  position: 'absolute',
                  margin: 'auto',
                  borderRadius: '9999px',
                  transform: 'rotateZ(-45deg)',
                },
                '&::after': {
                  content: '""',
                  display: 'block',
                  width: '22px',
                  height: '3px',
                  background: 'black800',
                  position: 'absolute',
                  margin: 'auto',
                  borderRadius: '9999px',
                  transform: 'rotateZ(45deg)',
                },
              }}
              onClick={() => isSearchFunc()}
            />
          </Center>
          <OriginalSpacer size={'16px'} />
          <Input
            placeholder={`?????????????????????${
              navIndex === 0 ? '????????????' : nav.name
            }?????????`}
            value={inputText}
            w={'calc(100vw - 5vw * 2)'}
            h={'48px'}
            borderRadius={'9999px'}
            fontSize={'1.6rem'}
            px={'16px'}
            onChange={(e) => inputTextFunc(e)}
            sx={{
              '&:focus-visible': {
                borderColor: 'primary',
                boxShadow: '0 0 0 1px #4AB9C9',
              },
            }}
          />
          <OriginalSpacer size={'24px'} />
          <Flex flexDir={'column'} gap={'24px'} px={'5vw'}>
            {(navIndex === 0 ? searchStageArray : searchColumnArray).map(
              (item: searchType, i) => (
                <Box key={item.condition + i}>
                  <Box
                    w={'fit-content'}
                    color={'primary'}
                    fontSize={'1.8rem'}
                    fontWeight={'bold'}
                  >
                    {item.condition}
                  </Box>
                  <OriginalSpacer size={'12px'} />
                  <Flex gap={'8px'} flexWrap={'wrap'}>
                    {item.item.map((tag: string, i2: number) => (
                      <Box
                        key={tag + i2}
                        color={'black400'}
                        bg={'black100'}
                        textStyle={'tagItem'}
                      >
                        {tag}
                      </Box>
                    ))}
                  </Flex>
                </Box>
              )
            )}
          </Flex>
          <Center
            w={'100vw'}
            h={'64px'}
            color={'white'}
            bg={'primary'}
            fontSize={'1.6rem'}
            fontWeight={'bold'}
            pos={'absolute'}
            inset={'auto auto 0 auto'}
            opacity={0.7}
          >
            3817??????{navIndex === 0 ? '????????????' : nav.name}?????????
          </Center>
        </Box>
      )}
    </>
  );
};

export default Heading;
