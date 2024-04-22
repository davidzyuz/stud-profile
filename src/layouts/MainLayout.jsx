import { Outlet } from "react-router-dom";
import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";

export default function MainLayout() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" gap={6} bg="#fafafa">
      <GridItem colSpan={2} minHeight="100vh" as="aside" bg="white">
        <Sidebar />
      </GridItem>
      <GridItem colSpan={4}>
        <Outlet />
      </GridItem>
    </Grid>
  );
}
