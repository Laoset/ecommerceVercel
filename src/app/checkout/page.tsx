"use client";
import { useContext, useState } from "react";
import styles from "../../styles/checkout.module.css";
import { ModalContext } from "../Context";
import Link from "next/link";
import { NavBar } from "@/components/layout";
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
    <>
      <div style={{ backgroundColor: "black" }}>
        <NavBar />
      </div>
      <div className={styles.container}>
        <div className={styles.subcontainer}>
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
              <span style={{ color: "#de354c", fontWeight: "600" }}>
                BILLING DETAILS
              </span>
              <div className={styles.containerlabel}>
                <div>
                  <label className={styles.labelsito}>Name</label>
                  <input className={styles.inputsito} />
                </div>
                <div>
                  <label className={styles.labelsito}>Last Name</label>
                  <input className={styles.inputsito} />
                </div>
                <div>
                  <label className={styles.labelsito}>Email</label>
                  <input className={styles.inputsito} />
                </div>
              </div>

              <span style={{ color: "#de354c", fontWeight: "600" }}>
                SHIPPING INFO
              </span>
              <div className={styles.containerlabel}>
                <div>
                  <label className={styles.labelsito}>Address</label>
                  <input className={styles.inputsito} />
                </div>
                <div>
                  <label className={styles.labelsito}>City</label>
                  <input className={styles.inputsito} />
                </div>
                <div>
                  <label className={styles.labelsito}>Country</label>
                  <input className={styles.inputsito} />
                </div>
                <div>
                  <label className={styles.labelsito}>Postal Code</label>
                  <input className={styles.inputsito} />
                </div>
              </div>
            </div>
          </div>
          <hr className={styles.hr} />
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
    </>
  );
};

export default Page;
