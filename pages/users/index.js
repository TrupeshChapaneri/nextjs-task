import { Heading, SimpleGrid } from "@chakra-ui/react";
import { UserCard } from "../../components/UserCard";
import { AppLayout } from "../../layouts/AppLayout";
import { client } from "../../utils/api-client";

function Users({ userList, notFound }) {
  console.log(userList);

  if (notFound) {
    return <h1>something went wrong</h1>;
  }
  
  return (
    <AppLayout>
      <Heading as="h1" textAlign="center" mb="6">
        List of Users
      </Heading>

      <SimpleGrid minChildWidth="240px" spacing="30px">
        {userList.data.map(({ id, first_name, last_name, email, avatar }) => (
          <UserCard
            key={id}
            {...{ id, first_name, last_name, email, avatar }}
          />
        ))}
      </SimpleGrid>
    </AppLayout>
  );
}

export async function getServerSideProps() {
  const userList = await client(`users`);

  if (!userList) {
    return {
      props: { notFound: true }, // it will be passed to the page component as props
    };
  }

  return {
    props: { userList }, // it will be passed to the page component as props
  };
}

export default Users;
