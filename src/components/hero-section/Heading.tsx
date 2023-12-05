import { cls } from "@/utils/tailwind/cls";
import React from "react";
import { Amaranth } from "next/font/google";
import { DownloadResumeButton, LetsConnect } from "../custom-components";

const amaranth = Amaranth({ weight: "400", subsets: ["latin"] });
const amaranthFont = amaranth.className;

export default function Heading() {
	return (
		<div
			className={cls(
				`flex flex-col gap-4 justify-center items-center text-center pt-8`
			)}
		>
			<img src="avatar.svg" alt="" className="w-40 sm:w-60 lg:w-80" />
			<h1>
				<span
					className={cls(
						`text-gray-500 dark:text-gray-400 text-3xl sm:text-4xl`,
						amaranthFont
					)}
				>
					Hi!,&#x1F44B; I'm
				</span>{" "}
				<span
					className={cls(
						`text-accent text-4xl sm:text-5xl`,
						amaranthFont
					)}
				>
					Nirvik Purkait
				</span>
			</h1>
			<h2
				className={cls(
					`text-2xl text-accent sm:text-3xl`,
					amaranthFont
				)}
			>
				Full-stack developer
			</h2>

			<h3 className={cls(`text-lg max-w-lg sm:text-xl`)}>
				I am a full-stack developer, based in India. My main interest
				lies on back-end development. Currently, I'm living in West
				Bengal, India.
			</h3>
			<div
				className={cls(
					`flex flex-wrap gap-x-6 gap-y-2 justify-center items-center pt-4`
				)}
			>
				<DownloadResumeButton />
				<LetsConnect />
			</div>
		</div>
	);
}