import React, { useState } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import "./sideFilter.css";

interface SideFilterProps {
    setHandleFilter: (value: any) => void;
}
const SideFilter: React.FC<SideFilterProps> = ({ setHandleFilter }) => {
    const [rangeValue, setRangeValue] = useState<any>({ min: 0, max: 200000 });
    return (
        <div>
            <InputRange
                formatLabel={value => `₹${value}`}
                maxValue={200000}
                minValue={0}
                value={rangeValue}
                onChange={value => setRangeValue(value)}
            />
            <div style={{ color: "#a0a0a0", fontSize: "14px" }}>Price</div>
            <div>
                <button
                    className="button-filter"
                    onClick={() => {
                        setHandleFilter(rangeValue);
                    }}
                >
                    Apply
                </button>
            </div>
        </div>
    );
};
export default SideFilter;
