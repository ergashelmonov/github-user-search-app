import { useContext } from "react";
import { FormContext, Status } from "../../App";
import SearchIcon from "../../assets/icons/search.svg";

const Form = () => {
  const { setIsvalue, register, handleSubmit } = useContext(FormContext);
  const { status } = useContext(Status);
  const values = (value) => {
    setIsvalue(value.search);
  };
  return (
    <form
      onSubmit={handleSubmit(values)}
      className="rounded-[15px] h-[69px] gap-[23px] w-full p-2.5 my-6 flex justify-between items-center shadow-xl shadow-[#4660bb33] dark:shadow-[transparent] bg-[#fefefe] dark:bg-[#1e2a47]"
    >
      <SearchIcon className="ml-5 max-[620px]:w-[20px] max-[620px]:h-[20px]" />
      <input
        type="Search"
        className="outline-none h-full bg-transparent  text-[#222731] dark:text-[#fff] grow placeholder:font-normal placeholder:text-[18px] placeholder:leading-[139%]  font-normal text-[18px] leading-[139%] max-[620px]:text-[13px] max-[620px]:leading-[192%] max-[620px]:placeholder:text-[13px] max-[620px]:placeholder:leading-[192%]"
        placeholder="Search GitHub username…"
        {...register("search")}
      />
      {status && (
        <span className="font-bold text-[15px] text-[#f74646]">No results</span>
      )}
      <button className="py-3 px-6 search-btn text-base font-bold text-white bg-[#0079ff] outline-none rounded-[10px] max-[620px]:w-[84px] max-[620px]:h-[46px] max-[620px]:py-[12px] max-[620px]:px-[16px] max-[620px]:text-[14px]">
        Search
      </button>
    </form>
  );
};

export default Form;
