import React from "react";
import { Button } from "@nextui-org/react";
import styled from "styled-components";
const SendUsInquiry = () => {
  return (
    <div className="pb-20" style={{ width: "90%", margin: "0 auto" }}>
      <form
        action="submit"
        style={{
          margin: "0 auto",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <div className="flex justify-between mb-4">
          <div style={{ width: "45%" }}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Name"
              style={{
                width: "100%",
                padding: "10px",
                border: "none",
                borderRadius: "4px",
                outline: "none",
              }}
            />
          </div>
          <div style={{ width: "45%" }}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Email"
              style={{
                width: "100%",
                padding: "10px",
                border: "none",
                borderRadius: "4px",
                outline: "none",
              }}
            />
          </div>
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <input
            type="text"
            placeholder="Message"
            style={{
              width: "100%",
              height: "8rem",
              padding: "10px",
              border: "none",
              borderRadius: "4px",
              outline: "none",
            }}
          />
        </div>
        <div className="flex justify-center pt-10">
          <StyledButton>Send Message</StyledButton>
        </div>
      </form>
    </div>
  );
};

export default SendUsInquiry;

const StyledButton = styled(Button)`
  width: 12rem;
  height: 50px;
  background-color: rgba(243, 156, 18, 1);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  color: white;
  transition: background-color 0.3s, color 0.3s;
  &:hover {
    background-color: #f39d12c2;
  }
`;
