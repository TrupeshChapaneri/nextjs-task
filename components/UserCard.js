import {
  Heading,
  Avatar,
  Box,
  Text,
  Button,
  useColorModeValue,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

function UserCard({ id, first_name, last_name, email, avatar, isLoading }) {
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
      {isLoading ? (
        <React.Fragment>
          <SkeletonCircle size="10" />
          <SkeletonText mt="2" noOfLines={7} spacing="3" />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Avatar size="lg" src={avatar} alt="User Img" mb={4} />
          <Heading fontSize="lg">
            {first_name} {last_name}
          </Heading>
          <Text fontWeight={600} fontSize="sm" color="gray.500" mb={4}>
            {email}
          </Text>
          <Link href={`/`}>
            <Button size="sm" colorScheme="teal" variant="outline">
              View User
            </Button>
          </Link>{" "}
        </React.Fragment>
      )}
    </Box>
  );
}

export { UserCard };
