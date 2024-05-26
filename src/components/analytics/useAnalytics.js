import React from "react";

export const useAnalytics = () => {
  const getAmountGraphData = (data, field) => {
    const groupedData = data.reduce((acc, curr) => {
      const key = curr[field];
      if (acc[key]) {
        acc[key] = {
          amount: +acc[key].amount + +curr.amount,
          count: +acc[key].count + 1,
        };
      } else {
        acc[key] = {
          amount: +curr.amount,
          count: 1,
        };
      }
      return acc;
    }, {});

    const graphData = Object.entries(groupedData).map(([key, value]) => ({
      value: value.amount,
      count: value.count,
      type: key,
    }));
    return graphData;
  };

  return {
    getAmountGraphData,
  };
};
