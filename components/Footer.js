import { Box, Stack, Text, useColorModeValue, Flex } from "@chakra-ui/react";
import Link from "next/link";

function Footer() {
  return (
    <Box px={4} zIndex='100' bg={useColorModeValue("gray.100", "gray.900")}>
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
      >
        <Stack direction="row" spacing={6}>
          <Link href={`/`}>Home</Link>
          <Link href={`/users`}>Users</Link>
        </Stack>

        <Text>Build with next.js and chakra-ui</Text>
      </Flex>
    </Box>
  );
}

export { Footer };
