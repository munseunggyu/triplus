import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Prev from "../../components/Header/Prev";
import SearchInput from "../../components/Header/SearchInput";
import { MainContainer } from "../../components/MainContainer";
import Navbar from "../../components/Navbar";
import UserInfo from "../../components/UserInfo";
import { useGetData } from "../../hooks/useGetData";
import * as S from "./style";

export default function Search() {
  const { data, getData } = useGetData();

  const [searchInputVal, setSearchInputVal] = useState("");
  const url = `${process.env.REACT_APP_API_KEY}/user/searchuser/?keyword=${searchInputVal}`;
  // 작성자가 입력이 완료한 후 0.3초 뒤에 실행하고 싶다. 한번만 데이터 요청
  useEffect(() => {
    if (searchInputVal !== "") {
      const timeId = setTimeout(() => {
        getData(url);
      }, 300);
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
        <S.UserInfoContainer>
          {data &&
            data.map((search) => {
              return (
                <Link key={search._id} to={`/profile/${search.accountname}`}>
                  <UserInfo {...search} />
                </Link>
              );
            })}
        </S.UserInfoContainer>
      </MainContainer>
      <Navbar />
    </>
  );
}
