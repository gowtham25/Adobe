import React, { useMemo, useState } from "react";
import styled from "styled-components";
import "./App.css";
import { cartData } from "./cart";
import AllCartcontainer from "./Common/AllCartcontainer/AllCartcontainer";
import Card from "./Common/Card/Card";
import Headers from "./Common/Header/Header";
import SideFilter from "./Common/SideFilter/SideFilter";
import Sort from "./Common/Sort/Sort";
import Footer from "./Footer";

const CardContainer = styled.div`
    display: ;
`;
function App() {
    const [addCartData, setAddCardData] = useState<any>([]);
    const [sortBy, setSortBy] = useState("LowToHigh");
    const [handleFilter, setHandleFilter] = useState({ min: 0, max: 200000 });
    const [showHome, setShowHome] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");

    // useEffect(() => {
    //     fetch("https://api.myjson.com/bins/qzuzi")
    //         .then(res => res.json())
    //         .then(result => {
    //             console.log(result);
    //         });
    // }, []);
    const data = useMemo(() => {
        let myData: any = [];
        switch (sortBy) {
            case "LowToHigh":
                myData = cartData.items.sort((a: any, b: any) => {
                    return a.price.actual - b.price.actual;
                });
                break;
            case "HighToLow":
                myData = cartData.items.sort((a: any, b: any) => {
                    return b.price.actual - a.price.actual;
                });
                break;
            case "Discount":
                myData = cartData.items.sort((a: any, b: any) => {
                    return b.discount - a.discount;
                });
                break;
        }
        myData = myData.filter((mValue: any, mIndex: any) => {
            const { price = {} } = mValue;
            const { actual } = price || {};
            return actual > handleFilter.min && actual < handleFilter.max;
        });
        if (searchQuery !== "") {
            myData = myData.filter((mValue: any, mIndex: any) => {
                const { name = "" } = mValue || {};
                return (
                    name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
                );
            });
        }
        return myData;
    }, [sortBy, handleFilter, searchQuery]);

    const handleAddCart = (payload: any) => {
        const addItem = [...addCartData, { ...payload, count: 1 }];
        setAddCardData(addItem);
    };

    const handleSearch = () => {
        console.log(searchQuery);
    };
    return (
        <div className="App">
            <div className="header">
                <div className="header-internal-container">
                    <Headers
                        setShowHome={setShowHome}
                        setSearchQuery={setSearchQuery}
                        searchQuery={searchQuery}
                        handleSearch={handleSearch}
                        showHome={showHome}
                    />
                </div>
            </div>
            {showHome ? (
                <div className="internal-container">
                    <div className="filter-container-top">
                        <span className="filter-header">Filter</span>
                        <SideFilter setHandleFilter={setHandleFilter} />
                    </div>
                    <div>
                        <div className="sort-by-container">
                            <Sort setSortBy={setSortBy} sortBy={sortBy} />
                            <div className="sort-by-mobile"></div>
                        </div>
                        <div className="card-container-top-root">
                            {data &&
                                data.length &&
                                data.map((dValue: any, dIndex: number) => {
                                    const {
                                        discount = "",
                                        name = "",
                                        image = "",
                                        price = {}
                                    } = dValue || {};
                                    const { actual = "", display = "" } =
                                        price || {};
                                    return (
                                        <Card
                                            key={dIndex}
                                            itemData={dValue}
                                            discount={discount}
                                            name={name}
                                            image={image}
                                            actual={actual}
                                            display={display}
                                            handleAddCart={handleAddCart}
                                        />
                                    );
                                })}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="all-cart-container">
                    <AllCartcontainer addCartData={addCartData} />
                </div>
            )}
            <Footer />
        </div>
    );
}

export default App;
