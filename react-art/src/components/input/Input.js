import { styled } from "styled-components";

// const Label = styled.label`
//   display: block;
//   margin-bottom: 0.5rem;
//   font-size: 0.75rem;
//   font-weight: 700;
//   letter-spacing: 0.1em;
//   text-transform: uppercase;
//   color: ${({ $invalid }) => ($invalid ? "#ef4444" : "#6b7280")};
// `;

// const Input = styled.input`
//   width: 90%;
//   padding: 0.75rem 1rem;
//   line-height: 1.5;
//   background-color: ${({ $invalid }) => ($invalid ? "#fed2d2" : "#d1d5db")};
//   color: ${({ $invalid }) => ($invalid ? "#ef4444" : " #374151")};
//   border: 1px solid ${({ $invalid }) => ($invalid ? "#f73f3f" : "transparent")};
//   border-radius: 0.25rem;
//   box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
// `;

const CustomInput = ({ label, invalid, ...props }) => {
  let labelClass = "block mb-2 text-xs font-bold tracking-wide uppercase";
  let inputClasses = "w-full px-3 py-4 leading-tight border rounded shadow";
  if (invalid) {
    labelClass += "text-red-300";
    inputClasses += "text-red-300 bg-red-300 border-red-700";
  } else {
    labelClass += "text-stone-500";
    inputClasses += "text-grey-700 bg-stone-300";
  }
  return (
    //for upper styles if you want styles like defined earlier
    // <>
    //   <p>
    //     <Label $invalid={invalid}>{label}</Label>
    //     <Input $invalid={invalid} {...props} />
    //   </p>
    // </>
    <>
      <label className={labelClass}>{label}</label>
      <input className={inputClasses} {...props} />
    </>
  );
};

export default CustomInput;
