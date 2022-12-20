import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/Header";
import Prev from "../../components/Header/Prev";
import SearchInput from "../../components/Header/SearchInput";
import { MainContainer } from "../../components/MainContainer";
import Navbar from "../../components/Navbar";
import UserInfo from "../../components/UserInfo";

const UserInfoContainer = styled.ul`
  width: 358px;
  margin: 0 auto;
`;

export default function Search() {
  const [searchList, setSearchList] = useState([]);
  const token = localStorage.getItem("token");

  const [searchInputVal, setSearchInputVal] = useState("");
  const getSearchList = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_KEY}/user/searchuser/?keyword=${searchInputVal}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-type": "application/json",
          },
        }
      );
      setSearchList(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // 작성자가 입력이 완료한 후 1초 뒤에 실행하고 싶다. 한번만 데이터 요청
  useEffect(() => {
    if (searchInputVal !== "") {
      const timeId = setTimeout(() => {
        getSearchList();
      }, 500);
      return () => {
        clearTimeout(timeId);
      };
    }
  }, [searchInputVal]);
  return (
    <>
      <Header>
        <Prev />
        <SearchInput
          searchInputVal={searchInputVal}
          setSearchInputVal={setSearchInputVal}
        />
      </Header>
      <MainContainer>
        <UserInfoContainer>
          {searchList.map((search) => {
            return (
              <Link to={`/profile/${search.accountname}`}>
                <UserInfo {...search} />
              </Link>
            );
          })}
        </UserInfoContainer>
      </MainContainer>
      <Navbar />
    </>
  );
}
