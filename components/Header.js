import {
  Box,
  Flex,
  Avatar,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { useRouter } from "next/router";

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { route } = useRouter();

  return (
    <Box boxShadow="md" bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Stack direction="row" spacing={6}>
          <Link href={`/`}>
            <Button
              size="sm"
              colorScheme="teal"
              variant={route === "/" ? "solid" : "outline"}
            >
              Home
            </Button>
          </Link>

          <Link href={`/users`}>
            <Button
              size="sm"
              colorScheme="teal"
              variant={route.includes("/users") ? "solid" : "outline"}
            >
              Users
            </Button>
          </Link>
        </Stack>

        <Flex>
          <Stack direction="row" spacing={7} alignItems="center">
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>

            <Avatar
              size="sm"
              minW={0}
              rounded="full"
              variant="link"
              cursor="pointer"
              src="https://avatars.dicebear.com/api/male/username.svg"
            />
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}

export { Header };
