import React from "react";
import { IoSearch } from "react-icons/io5";

interface pageProps { }

const page: React.FC<pageProps> = () => {
	return (
		<div className="p-4">
			<div className="relative w-full">
				<IoSearch
					size={18}
					className="absolute left-5 top-1/2 -translate-y-1/2 text-[#888]"
				/>
				<input
					type="text"
					placeholder="Поиск"
					className="w-full p-3 pl-12 rounded-2xl bg-white dark:bg-[#0a0a0a] dark:text-white placeholder-[#888] border dark:border-[#1e1e1e] focus:outline-none dark:focus:ring-2 dark:focus:ring-[#333] transition-all duration-300"
				/>
			</div>
		</div>
	);
};

export default page;
