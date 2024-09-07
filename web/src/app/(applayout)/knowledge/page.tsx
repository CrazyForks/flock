"use client";
import {
  Flex,
  Spinner,
  Heading,
  Box,
  SimpleGrid,
  useColorModeValue,
  Badge,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import { UploadsService, type ApiError } from "@/client";
import ActionsMenu from "@/components/Common/ActionsMenu";
import Navbar from "@/components/Common/Navbar";
import useCustomToast from "@/hooks/useCustomToast";
import React from "react";
import { RiListUnordered } from "react-icons/ri";

import { useTabSearchParams } from "@/hooks/useTabSearchparams";
import TabSlider from "@/components/Common/TabSlider";
import {
  FaFileExcel,
  FaFileExport,
  FaFilePdf,
  FaFilePowerpoint,
  FaFileWord,
} from "react-icons/fa";
import { PiFileHtmlFill } from "react-icons/pi";
import { useTranslation } from "react-i18next";

function Uploads() {
  const showToast = useCustomToast();
  const { t } = useTranslation();
  const {
    data: uploads,
    isLoading,
    isError,
    error,
  } = useQuery("uploads", () => UploadsService.readUploads({}));

  if (isError) {
    const errDetail = (error as ApiError).body?.detail;
    showToast("Something went wrong.", `${errDetail}`, "error");
  }
  const rowTint = useColorModeValue("blackAlpha.50", "whiteAlpha.50");
  const options = [
    {
      value: "all",
      text: t(`panestate.kb.all`),
      icon: <RiListUnordered className="w-[14px] h-[14px] mr-1" />,
    },
    {
      value: "pfd",
      text: "pfd",
      icon: <FaFilePdf className="w-[14px] h-[14px] mr-1" />,
    },
    {
      value: "excel",
      text: "excel",
      icon: <FaFileExcel className="w-[14px] h-[14px] mr-1" />,
    },
    {
      value: "word",
      text: "word",
      icon: <FaFileWord className="w-[14px] h-[14px] mr-1" />,
    },
    {
      value: "ppt",
      text: "ppt",
      icon: <FaFilePowerpoint className="w-[14px] h-[14px] mr-1" />,
    },
    {
      value: "md",
      text: "md",
      icon: <FaFileExport className="w-[14px] h-[14px] mr-1" />,
    },
    {
      value: "web",
      text: "web",
      icon: <PiFileHtmlFill className="w-[14px] h-[14px] mr-1" />,
    },
  ];
  const [activeTab, setActiveTab] = useTabSearchParams({
    searchParamName: "tooltype",
    defaultTab: "all",
  });
  return (
    <>
      {isLoading ? (
        // TODO: Add skeleton
        <Flex justify="center" align="center" height="100vh" width="full">
          <Spinner size="xl" color="ui.main" />
        </Flex>
      ) : (
        uploads && (
          <Box
            maxW="full"
            maxH="full"
            display="flex"
            flexDirection={"column"}
            overflow={"hidden"}
          >
            <Box
              display="flex"
              flexDirection={"row"}
              justifyItems={"center"}
              py={2}
              px={5}
            >
              <Box>
                <TabSlider
                  value={activeTab}
                  onChange={setActiveTab}
                  options={options}
                />
              </Box>
              <Box ml={"auto"}>
                <Navbar type={"Knowledge"} />
              </Box>
            </Box>
            <Box mt="2" overflow={"auto"}>
              <Box maxH="full">
                <SimpleGrid
                  columns={{ base: 1, md: 2, lg: 4 }}
                  spacing={8}
                  mx="5"
                >
                  {uploads.data.map((upload) => (
                    <Box
                      key={upload.id}
                      _hover={{ backgroundColor: rowTint }}
                      cursor={"pointer"}
                      p={4}
                      borderRadius="xl"
                      borderWidth="1px"
                      borderColor="gray.200"
                      boxShadow="lg"
                      bg="white"
                    >
                      <Heading size="md">{upload.name}</Heading>
                      <Box
                        overflow="hidden"
                        textOverflow="ellipsis"
                        whiteSpace="nowrap"
                      >
                        {upload.description}
                      </Box>
                      <Box
                        overflow="hidden"
                        textOverflow="ellipsis"
                        whiteSpace="nowrap"
                      >
                        {upload.last_modified}
                      </Box>
                      <Box
                        pt={4}
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                      >
                        <Badge colorScheme="green"> {upload.status}</Badge>
                        <ActionsMenu type={"Skill"} value={upload} />
                      </Box>
                    </Box>
                  ))}
                </SimpleGrid>
              </Box>
            </Box>
          </Box>
        )
      )}
    </>
  );
}

export default Uploads;
