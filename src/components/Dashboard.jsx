import React, { useEffect, useState } from "react";
import Table from "./table";
import { Col, Row, message } from "antd";
import { getArticles } from "./api/api";
import DashboardFilters from "./DashboardFilters";
import Pagination from "./pagination/Pagination";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sort, setSort] = useState({
    sortBy: "account_holder",
    order: "asc",
  });

  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
  });
  const [filters, setFilters] = useState({
    fromDate: "",
    toDate: "",
    account_holder: "",
    finance_name: "",
  });
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const field = {
        sortBy: sort.sortBy,
        order: sort.order,
        ...filters,
        page: pagination.page,
        limit: 10,
      };
      const data = await getArticles(field);
      setData(data);
      setPagination({
        ...pagination,
        total: 100,
      });
    } catch {
      message.error("Somthing went wrong");
    }

    setIsLoading(false);
  };
  const columns = [
    {
      sort: true,
      title: "Account holder",
      dataIndex: "account_holder",
    },
    {
      sort: true,
      title: "Finance Name",
      dataIndex: "finance_name",
    },
    {
      sort: true,
      title: "Credit Card",
      dataIndex: "finance_credit_card",
    },
    {
      sort: true,
      title: "Account Number",
      dataIndex: "finance_account_number",
    },
    {
      sort: true,
      title: "Amount",
      dataIndex: "amount",
    },
    {
      sort: true,
      title: "Last Transaction Date",
      dataIndex: "last_transaction_date",
    },
  ];
  useEffect(() => {
    fetchData();
  }, [sort, filters, pagination.page]);

  const handleSort = (index, direction) => {
    setSort({
      order: direction,
      sortBy: index,
    });
  };
  const onPaginationChange = (page) => {
    setPagination({
      ...pagination,
      page,
    });
  };
  const onFilter = (values) => {
    setFilters({
      // last_transaction_date: values.date[0].format("YYYY-MM-DD"),
      // toDate: values.date[1].format("YYYY-MM-DD"),
      // account_holder: values.account_holder,
      // finance_name: values.finance_name,
    });
  };
  return (
    <div>
      <div className="page-header">Dashboard</div>
      <DashboardFilters onFilter={onFilter} />

      <Table
        loading={isLoading}
        columns={columns}
        data={data}
        rowId={"id"}
        onSort={handleSort}
      ></Table>
      <Row align={"bottom"} justify={"center"}>
        <Col>
          <Pagination
            limit={pagination.limit}
            total={pagination.total}
            current={pagination.page}
            onChang={onPaginationChange}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
