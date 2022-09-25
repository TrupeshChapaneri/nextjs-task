import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";
// import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AppLayout } from "@/layouts/AppLayout";
import { client } from "@/utils/api-client";

function EditUser({ singleUser }) {
  // const { back } = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    if (singleUser?.data.first_name) setFirstName(singleUser?.data.first_name);
    if (singleUser?.data.last_name) setLastName(singleUser?.data.last_name);
  }, [singleUser]);

  return (
    <AppLayout>
      <Center>
        <Box
          maxW="550px"
          w="full"
          bg={useColorModeValue("white", "gray.900")}
          boxShadow="xl"
          rounded="md"
          p={8}
          textAlign="center"
        >
          <form>
            <FormControl isRequired>
              <FormLabel>First name</FormLabel>
              <Input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name"
              />
            </FormControl>
            <FormControl isRequired mt="2">
              <FormLabel>Last name</FormLabel>
              <Input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last name"
              />
            </FormControl>
            <Button
              size="sm"
              colorScheme="teal"
              variant="outline"
              mt="6"
              onClick={() => {
                client(`users/${singleUser?.data.id}`, {
                  data: { name: firstName + " " + lastName },
                })
                  .then(() => {
                    alert(`Updated User: ${firstName + " " + lastName} `);
                    // back()
                  })
                  .catch((e) => console.log(e));
              }}
            >
              Update User
            </Button>
          </form>
        </Box>
      </Center>
    </AppLayout>
  );
}

export async function getServerSideProps({ params }) {
  const uuid = params?.UserDetails;
  const singleUser = await client(`users/${uuid}`);

  if (!singleUser) {
    return {
      props: { notFound: true }, // It will be passed to the page component as props
    };
  }

  return {
    props: { singleUser }, // It will be passed to the page component as props
  };
}

export default EditUser;
