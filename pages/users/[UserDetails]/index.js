import { Center, Heading } from "@chakra-ui/react";
import { UserCard } from "@/components/UserCard";
import { AppLayout } from "@/layouts/AppLayout";
import { client } from "@/utils/api-client";

function UserDetails({ notFound, singleUser }) {
  if (notFound)
    return (
      <Heading as="h1" textAlign="center">
        Lol Something went worng ...
      </Heading>
    );

  return (
    <AppLayout>
      <Heading as="h4" size="md" textAlign="center" mb="6" color="gray.600">
        Hey, This is {singleUser?.data?.first_name}
      </Heading>
      <Center>
        <UserCard
          id={singleUser?.data?.id}
          first_name={singleUser?.data?.first_name}
          last_name={singleUser?.data?.last_name}
          email={singleUser?.data?.email}
          avatar={singleUser?.data?.avatar}
          editUser
        />
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

export default UserDetails;
