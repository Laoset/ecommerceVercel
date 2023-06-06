"use client";
import { useContext, useState } from "react";
import styles from "../../styles/checkout.module.css";
import { ModalContext } from "../Context";
import Link from "next/link";
const Page = () => {
  const { cart } = useContext(ModalContext);
  const [modal, setModal] = useState(false);

  const totalMoney = () => {
    let dinero = 0;

    cart.forEach((producto) => {
      dinero = producto.price + dinero;
    });
    return dinero + 8;
  };
  const miDineroTotal = totalMoney();
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.navsito}>
          <span>
            <Link
              href={"./"}
              style={{ textDecoration: "none", color: "black" }}
            >
              X
            </Link>
          </span>
          <h1>Last Details</h1>
        </div>
        <div className={styles.addressSection}>
          <label>Name</label>
          <input className={styles.inputsito} />
          <label>Last Name</label>
          <input className={styles.inputsito} />
          <label>Email</label>
          <input className={styles.inputsito} />
          <label>Address</label>
          <input className={styles.inputsito} />
          <label>City</label>
          <input className={styles.inputsito} />
          <label>Country</label>
          <input className={styles.inputsito} />
          <label>Postal Code</label>
          <input className={styles.inputsito} />
        </div>
      </div>
      <hr style={{ width: "90%", height: "2px", backgroundColor: "black" }} />
      <div className={styles.rightContainer}>
        <div className={styles.nuevo}>
          <div className={styles.nav}>
            <h3 style={{ marginLeft: "10px" }}>Your order</h3>
          </div>
          <div className={styles.itemsContainer}>
            {cart?.map((productos) => (
              <div
                key={`2+${productos.id}`}
                className={styles.productoContainers}
              >
                <img
                  src={productos.image}
                  alt="tobuy"
                  className={styles.imagen}
                />
                <div className={styles.textproductoContainer}>
                  <p>{productos.nombre}</p>
                  <span>${productos.price}</span>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.footer}>
            <hr style={{ border: "1px solid gray", width: "85%" }} />
            <div className={styles.sonFooter}>
              <div className={styles.divDeliver}>
                <p>Delivery</p>
                <span>$8</span>
              </div>
              <div className={styles.divTotalProducts}>
                <h2>Total Product:</h2>
                <h3>${miDineroTotal}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className={styles.butonFinal} onClick={() => setModal(true)}>
        Confirm
      </button>
      {modal ? (
        <>
          <div className={styles.containerModal}>
            <div className={styles.firstSonContainer}>
              <div className={styles.secondSonContainer}>
                <div className={styles.buttonContainer}>
                  <button>
                    <Link
                      href={"/"}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      X
                    </Link>
                  </button>
                </div>
                <div className={styles.modalContainerText}>
                  <p>
                    This last step will transfer you to Mercado Pago, wich is
                    currently in under development.
                  </p>
                  <span>Thanks you for making it this far.</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.opacity}></div>
        </>
      ) : null}
    </div>
  );
};

export default Page;
