"use client";
import React from "react";
import Link from "next/link";
import styles from "../../styles/footer.module.css";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerInsideFooter}>
        <div className={styles.firstDiv}>
          <h1>Periféricool</h1>
          <div className={styles.insideFirstDiv}>
            <Link href="/" className={styles.link} prefetch={false}>
              <li>HOME</li>
            </Link>
            <Link href="/Headphones" className={styles.link} prefetch={false}>
              <li>HEADPHONES</li>
            </Link>
            <Link href="/Mouse" className={styles.link} prefetch={false}>
              <li>MOUSE</li>
            </Link>
            <Link href="/Keyboards" className={styles.link} prefetch={false}>
              <li>KEYBOARDS</li>
            </Link>
          </div>
        </div>
        <p>
          Periféricool is an all in one stop to fulfill your audio needs. Were a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <div className={styles.iconContainer}>
          <a href="https://www.facebook.com/" target="_blank">
            <AiFillFacebook size={30} />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <AiOutlineInstagram size={30} />
          </a>
          <a href="https://twitter.com/" target="_blank">
            <AiOutlineTwitter size={30} />
          </a>
        </div>
        <p>Copyright 2021. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
