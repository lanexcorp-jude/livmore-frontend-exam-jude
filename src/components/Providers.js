import { ConfigProvider } from "antd";

const ProvidersComponent = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Quicksand",
          colorText: "rgba(3, 6, 32, 0.88)",
        },
        components: {
          Button: {
            colorPrimary: "#2F54EB",
            colorBgContainerDisabled: "rgba(3, 6, 32, 0.04)",
            colorTextDisabled: "rgba(3, 6, 32, 0.25)",
            algorithm: true, // Enable algorithm
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default ProvidersComponent;
