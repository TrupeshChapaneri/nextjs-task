import { AppLayout } from "@/layouts/AppLayout";
import { Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <AppLayout>
      <Heading as="h4" size="md" textAlign="center" color="gray.600">
        This is Home page click on Users Button
      </Heading>
    </AppLayout>
  );
}
