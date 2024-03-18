"use client";
import { Col, Row, Spin } from "antd";
import Layout from "antd/es/layout/layout";
import RoomTile from "@/components/RoomTile";
import SchedulerForm from "@/components/SchedulerForm";
import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import HeaderPage from "@/components/header/HeaderPage";
import BuildingDetails from "@/components/BuildingDetails";
import { GET_ITEMS } from "./utilities/queries/queries";

export default function Home() {
  const { data, loading } = useQuery(GET_ITEMS);

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      <HeaderPage />
      <Layout className="px-5 md:px-8 py-[9px]">
        <Row gutter={24}>
          {/* LEFT SIDE */}
          <Col key={0} xs={24} sm={24} lg={14} className="flex flex-col gap-5">
            <SchedulerForm />
            <div>
              <div className="mb-4">
                <p className="mb-0">Found {data?.items.length} spaces</p>
              </div>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                {data?.items.map((item, index) => {
                  return <RoomTile {...item} key={index} />;
                })}
              </div>
            </div>
          </Col>

          {/* RIGHT SIDE */}
          <Col key={1} span={8} lg={10} className="relative hidden lg:block">
            <BuildingDetails />
          </Col>
        </Row>
      </Layout>
    </main>
  );
}
