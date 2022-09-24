import {
  Button,
  Center,
  Flex,
  Heading,
  SimpleGrid,
  Spinner,
  Stack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { UserCard } from "../../components/UserCard";
import { AppLayout } from "../../layouts/AppLayout";
import { client } from "../../utils/api-client";

function Users({ userList, notFound }) {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);

  const handlePagination = (page) => {
    const { pathname: currPath, query: currQuery } = router;
    currQuery.page = page;

    router.push({
      pathname: currPath,
      query: currQuery,
    });
  };

  useEffect(() => {
    router.events.on("routeChangeStart", () => setLoading(true));
    router.events.on("routeChangeComplete", () => setLoading(false));

    return () => {
      router.events.off("routeChangeStart", () => setLoading(true));
      router.events.off("routeChangeComplete", () => setLoading(false));
    };
  }, [router.events]);

  if (notFound)
    return (
      <Heading as="h1" textAlign="center">
        Lol Something went worng ...
      </Heading>
    );

  return (
    <AppLayout>
      <Flex alignItems="center" justifyContent="space-between" flexWrap="wrap">
        <Heading as="h1" textAlign="center" mb="6">
          List of Users
        </Heading>

        <Stack direction="row" spacing={5}>
          {Array(userList?.total_pages)
            .fill()
            .map((_, i) => (
              <Button
                key={i}
                size="sm"
                colorScheme="teal"
                variant={userList?.page === i + 1 ? "solid" : "outline"}
                onClick={() => handlePagination(i + 1)}
              >
                {i + 1}
              </Button>
            ))}
        </Stack>
      </Flex>

      <SimpleGrid minChildWidth="240px" spacing="30px">
        {userList?.data?.map(({ id, first_name, last_name, email, avatar }) => (
          <UserCard
            key={id}
            {...{ id, first_name, last_name, email, avatar, isLoading }}
          />
        ))}
      </SimpleGrid>
    </AppLayout>
  );
}

export async function getServerSideProps({ query }) {
  const pageNo = parseInt(query?.page);
  const userList = await client(`users?page=${pageNo || 1}`);

  if (!userList) {
    return {
      props: { notFound: true }, // It will be passed to the page component as props
    };
  }

  return {
    props: { userList }, // It will be passed to the page component as props
  };
}

export default Users;
