import {
  Heading,
  Avatar,
  Box,
  Text,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";

function UserCard({id,first_name,last_name,email,avatar}) {
  return (
    <Box
      maxW="250px"
      w="full"
      bg={useColorModeValue("white", "gray.900")}
      boxShadow="xl"
      rounded="md"
      p={8}
      textAlign="center"
    >
      <Avatar
        size="lg"
        src={
          avatar
        }
        alt="Avatar Alt"
        mb={4}
      />
      <Heading fontSize="lg">
       {first_name} {last_name}
      </Heading>
      <Text fontWeight={600}  fontSize="sm" color="gray.500" mb={4}>
        {email}
      </Text>

      <Link href={`/`}>
        <Button size="sm" colorScheme="teal" variant="outline">
          View User
        </Button>
      </Link>
    </Box>
  );
}

export { UserCard };
