import React from "react";
import Image from "next/image";
import { Wrapper } from "../components/Wrapper";
import styles from "../styles/Content.module.scss";

const Index: React.VFC = () => {
  return (
    <Wrapper>
      <img src="/wave001.svg" width="100%" height="100%" alt="Wave" />
      <h1 className={styles.header}>Teelog</h1>
    </Wrapper>
  );
};

export default Index;
