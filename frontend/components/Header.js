import { useEffect, useState } from "react";
import axios from "axios";
import Images from "next/image"
import styles from "@/styles/Home.module.css";
import Logo from "../public/assets/logo.png"

import Logo from "../public/assets/logo.png";

export default function Header() {
    const [ethPrice, setEthPrice] = useState("");

    useEffect(() => {
        const getEthPrice = async () => {
            const response = await axios.get('http://localhost:5001/getethprice', {});
            setEthPrice( response. data.usdPrice);
        }
        getEthPrice(); 
    });
    return (
        <section className={styles.header}>
            <section className={styles.topHeader}></section>
        </section>

    )
}
