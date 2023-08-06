
import { Progress, Space } from "antd";

const Dashboard = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-12">
        <div className="">
          <Progress percent={30} />
          <Progress percent={50} status="active" />
          <Progress percent={70} status="exception" />
          <Progress percent={100} />
          <Progress percent={50} showInfo={false} />
        </div>
        <div className="">
          <Progress
            percent={99.9}
            strokeColor={{ "0%": "#108ee9", "100%": "#87d068" }}
          />
          <Progress
            percent={99.9}
            status="active"
            strokeColor={{ from: "#108ee9", to: "#87d068" }}
          />
          <Space wrap>
            <Progress
              type="circle"
              percent={90}
              strokeColor={{ "0%": "#108ee9", "100%": "#87d068" }}
            />
            <Progress
              type="circle"
              percent={100}
              strokeColor={{ "0%": "#108ee9", "100%": "#87d068" }}
            />
          </Space>
        </div>
        <div className="">
          <Space wrap>
            <Progress type="circle" percent={30} size={80} />
            <Progress type="circle" percent={70} size={80} status="exception" />
            <Progress type="circle" percent={100} size={80} />
          </Space>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
