import React from "react";
import {Link} from 'react-router-dom';
//styles
import styles from './landing.module.css';



const Landing = () => {
    return (
        <div className={styles.container}>
            <div className={styles.rightSide}>
                <h3>طلا ، سکه و دلار</h3>
            <Link to='/gold'>شروع کنیم </Link>
            </div>
            <div className={styles.leftSide}>
                <h3>ارزهای دیجیتال</h3>
                <Link to="/Coins">شروع کنیم</Link>
            </div>
        </div>
    )
}

export default Landing;