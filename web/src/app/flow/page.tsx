"use client";

import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { ReactFlowProvider } from "reactflow";
import FlowVisualizer from "./components/FlowVisualizer";
import { nodeTypes } from "./components/CustomNodes";

export default function Home() {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Box h="100vh" w="100vw">
      <Heading as="h2" size="xl" textAlign="center" py={4}>
        Flow Visualization
      </Heading>
      <Box h="calc(100vh - 68px)">
        {isClient && (
          <ReactFlowProvider>
            <FlowVisualizer
              initialNodes={[]}
              initialEdges={[]}
              nodeTypes={nodeTypes}
              defaultEdgeOptions={{ type: "default" }}
            />
          </ReactFlowProvider>
        )}
      </Box>
    </Box>
  );
}
