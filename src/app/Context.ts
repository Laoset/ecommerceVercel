"use client";
import React, { createContext, useState, useEffect } from "react";
//interface para mis productos
interface Product {
  id: number;
  nombre: string;
  price: number;
  image: string;
  category: string;
  description: string;
  details: Array<string>;
  inBox: Array<string>;
  new: boolean;
}
//Declaro interfaz de como va ser lo que exporto o comparto con los childrens
interface ModalContextData {
  isModalOpen: boolean;
  allProducts: Product[];
  mouse: Product[];
  keyboards: Product[];
  headphones: Product[];
  threeProducts: Product[];
  randomThreeProducts: Product[];
  cart: Product[];
  openModal: () => void;
  closeModal: () => void;
  changeOpenModal: () => void;
  addToCart: (product: Product) => void;
  deleteItemCart: (productId: number) => void;
  clearCart: () => void;
}
//exporto el contexto creandolo en base a mi interfaz
export const ModalContext = createContext<ModalContextData>({
  isModalOpen: false,
  allProducts: [],
  mouse: [],
  keyboards: [],
  headphones: [],
  threeProducts: [],
  cart: [],
  randomThreeProducts: [],
  openModal: () => {},
  closeModal: () => {},
  changeOpenModal: () => {},
  addToCart: () => {},
  deleteItemCart: () => {},
  clearCart: () => {},
});
//exporto el componente que se encarga de Tomar todos mis childrens que a su vez retorna el contexto de Modal
export const ModalProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [mouse, setMouse] = useState<Product[]>([]);
  const [keyboards, setKeyboards] = useState<Product[]>([]);
  const [headphones, setHeadphones] = useState<Product[]>([]);
  const [threeProducts, setThreeProducts] = useState<Product[]>([]);
  const [randomThreeProducts, setRandomThreeProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  //Modal
  const openModal = () => {
    setIsModalOpen(true);
  };
  const changeOpenModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  //Carrito de compras
  const addToCart = (product: Product) => {
    const copia = cart.find((productss) => productss.id === product.id);
    if (!copia) {
      setCart([...cart, product]);
      openModal();
    }
  };
  const deleteItemCart = (productId: number) => {
    const nuevoCart = cart.filter((producto) => producto.id !== productId);
    setCart(nuevoCart);
  };
  const clearCart = () => {
    setCart([]);
  };
  //data apenas carga web
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseOne = await fetch("/api/products");
        const responseTwo = await fetch("/api/category/mouse");
        const respondeThree = await fetch("/api/category/keyboards");
        const respondeFour = await fetch("/api/category/headphones");
        const threeProductos = await fetch("/api/threeProducts");
        const randomThreeProductos = await fetch("/api/randomThreeProducts");

        const data = await responseOne.json();
        const data2 = await responseTwo.json();
        const data3 = await respondeThree.json();
        const data4 = await respondeFour.json();
        const data5 = await threeProductos.json();
        const data6 = await randomThreeProductos.json();
        setAllProducts(data);
        setMouse(data2);
        setKeyboards(data3);
        setHeadphones(data4);
        setThreeProducts(data5);
        setRandomThreeProducts(data6);
      } catch (error) {
        console.error("Error al obtener los productos", error);
      }
    };

    fetchData();
  }, []);
  return React.createElement(
    ModalContext.Provider,
    {
      value: {
        isModalOpen,
        openModal,
        closeModal,
        changeOpenModal,
        allProducts,
        mouse,
        keyboards,
        headphones,
        threeProducts,
        randomThreeProducts,
        cart,
        addToCart,
        deleteItemCart,
        clearCart,
      },
    },
    children
  );
};
