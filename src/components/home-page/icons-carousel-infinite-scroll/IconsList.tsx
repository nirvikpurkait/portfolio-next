import { cls } from "@/utils/tailwind/cls";
import Image from "next/image";
import React from "react";

const iconsName: string[] = [
	"bootstrap",
	"css",
	"express",
	"git",
	"github",
	"html",
	"javascript",
	"material-ui",
	"mongodb",
	"mongoose",
	"nextjs",
	"nodejs",
	"prisma-orm",
	"react-pdf",
	"react",
	"redux",
	"scss",
	"tailwind-css",
	"typescript",
];

export default async function IconsList() {
	return (
		<>
			{iconsName.map((icon, index) => (
				<li
					key={`${icon}${index}`}
					className={cls(
						`max-w-[40px] sm:max-w-[45px] md:max-w-[50px] lg:max-w-[55px]`
					)}
				>
					<Image
						src={`icons/tool-tech/${icon}.svg`}
						alt={icon}
						width={100}
						height={100}
					/>
				</li>
			))}
		</>
	);
}
