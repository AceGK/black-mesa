'use client';

import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';

interface HeaderProps {
  title: string;
  backgroundImage: string;
}

const Header: React.FC<HeaderProps> = ({ title, backgroundImage }) => {
  return (
    <header className={styles.header}>
      <div className={styles.background}>
        <Image
          src={backgroundImage}
          alt={title}
          fill
          priority
          quality={100}
          className={styles.image}
        />
      </div>
      <h1 className={styles.title}>{title}</h1>
    </header>
  );
};

export default Header;
