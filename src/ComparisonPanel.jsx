import React, { useState } from 'react';
import axios from 'axios';
import { gql } from '@apollo/client';
import client from './apolloClient'; 

const GET_BOOKS_GRAPHQL = gql`
  query GetBooks {
    books {
      title
      author { name }
    }
  }
`;

const ComparisonPanel = () => {
  const [restData, setRestData] = useState({ time: 0, size: 0 });
  const [gqlData, setGqlData] = useState({ time: 0, size: 0 });

  const fetchREST = async () => {
    try {
      const start = performance.now();
      const response = await axios.get('http://localhost:5000/api/books');
      const end = performance.now();
      
      // Sử dụng cách tính size đơn giản cho trình duyệt
      const size = JSON.stringify(response.data).length;
      setRestData({ time: (end - start).toFixed(2), size });
    } catch (error) {
      console.error("Lỗi gọi REST:", error);
    }
  };

  const fetchGraphQL = async () => {
    try {
      const start = performance.now();
      // 2. Sử dụng trực tiếp biến 'client' đã import ở trên
      const { data } = await client.query({ 
        query: GET_BOOKS_GRAPHQL, 
        fetchPolicy: 'no-cache' 
      });
      const end = performance.now();

      const size = JSON.stringify(data).length;
      setGqlData({ time: (end - start).toFixed(2), size });
    } catch (error) {
      console.error("Lỗi gọi GraphQL:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 text-white">API Performance Comparison</h2>
      <div className="row">
        <div className="col-md-6 mb-3">
          <div className="card shadow p-4 bg-dark text-white border-danger">
            <h3 className="text-danger">RESTful API</h3>
            <hr className="border-secondary" />
            <button className="btn btn-outline-danger btn-lg w-100 mb-4" onClick={fetchREST}>
              Run REST Test
            </button>
            <div className="h5">⏱️ Latency: <span className="text-warning">{restData.time} ms</span></div>
            <div className="h5">📦 Payload Size: <span className="text-warning">{restData.size} bytes</span></div>
            <p className="mt-3 text-muted small">* Trả về toàn bộ Object dư thừa (Over-fetching)</p>
          </div>
        </div>

        <div className="col-md-6 mb-3">
          <div className="card shadow p-4 bg-dark text-white border-success">
            <h3 className="text-success">GraphQL</h3>
            <hr className="border-secondary" />
            <button className="btn btn-outline-success btn-lg w-100 mb-4" onClick={fetchGraphQL}>
              Run GraphQL Test
            </button>
            <div className="h5">⏱️ Latency: <span className="text-warning">{gqlData.time} ms</span></div>
            <div className="h5">📦 Payload Size: <span className="text-warning">{gqlData.size} bytes</span></div>
            <p className="mt-3 text-muted small">* Chỉ lấy Title & Author (Optimized)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonPanel;