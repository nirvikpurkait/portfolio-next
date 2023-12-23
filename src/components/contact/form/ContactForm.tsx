"use client";

import React from "react";
import { useForm, FieldErrors } from "react-hook-form";
import { validate, ContactFormSchema } from "./contact-form.utils";
import { cls } from "@/utils/tailwind/cls";
import toast, { Toaster } from "react-hot-toast";

export default function ContactForm() {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		reset,
	} = useForm<ContactFormSchema>();

	const onSubmit = async (formData: ContactFormSchema) => {
		// console.log(formData);
		// do task for submitiing the form data
		// try {
		// 	const res = await fetch("/api/contact/send-message", {
		// 		method: "POST",
		// 	});
		// 	if (res.status >= 400 && res.status < 500) {
		// 		console.log(res);
		// 	}
		// 	reset();
		// } catch (error) {}
		// clear form after submission
	};

	const onError = async (fieldError: FieldErrors<ContactFormSchema>) => {
		// show a toast message regarding the error
		if (fieldError.name?.message) {
			toast.error(fieldError.name.message);
		} else if (fieldError.email?.message) {
			toast.error(fieldError.email.message);
		} else if (fieldError.message?.message) {
			toast.error(fieldError.message.message);
		}
	};

	return (
		<>
			<form
				onSubmit={handleSubmit(onSubmit, onError)}
				className={cls(
					`relative font-amaranth w-full max-w-sm dark:bg-white/20 bg-black/20 px-8 py-10 rounded-md flex flex-col gap-3 backdrop-blur-sm`
				)}
				noValidate
			>
				{/* name input field start */}
				<div className={cls(`relative flex flex-col gap-1`)}>
					<label htmlFor="name" className={cls(`pl-2`)}>
						Name:
					</label>
					<input
						type="text"
						placeholder="Enter your name"
						id="name"
						className={cls(
							`text-black px-3 py-1 text-base sm:text-lg lg:text-xl rounded-md placeholder:text-base`
						)}
						{...register("name", validate("name"))}
					/>
					<p className={cls(`relative left-2 text-red-500 text-xs`)}>
						{errors.name?.message}
					</p>
				</div>
				{/* name input field end */}

				{/* email input field start */}
				<div className={cls(`relative flex flex-col gap-1`)}>
					<label htmlFor="email" className={cls(`pl-2`)}>
						Email:
					</label>
					<input
						type="email"
						placeholder="Enter your email"
						id="email"
						className={cls(
							`text-black px-3 py-1 text-base sm:text-lg lg:text-xl rounded-md placeholder:text-base`
						)}
						{...register("email", validate("email"))}
					/>
					<p className={cls(`relative left-2 text-red-500 text-xs`)}>
						{errors.email?.message}
					</p>
				</div>
				{/* email input field end */}

				{/* message input field start */}
				<div className={cls(`relative flex flex-col gap-1`)}>
					<label htmlFor="message" className={cls(`pl-2`)}>
						Message:
					</label>
					<textarea
						rows={4}
						placeholder="Enter your message"
						id="message"
						className={cls(
							`text-black px-3 py-1 text-base sm:text-lg lg:text-xl rounded-md placeholder:text-base`
						)}
						{...register("message", validate("message"))}
					/>
					<p className={cls(`relative left-2 text-red-500 text-xs`)}>
						{errors.message?.message}
					</p>
				</div>
				{/* message input field end */}
				<div className={cls(`relative flex flex-col gap-1`)}>
					<button
						type="submit"
						className={cls(
							`bg-purple-500 px-4 py-2 text-base sm:text-lg lg:text-xl rounded-md ml-auto mt-2 transform duration-150`,
							{
								"bg-purple-500 cursor-not-allowed opacity-25":
									!isValid,
								"active:scale-95 shadow-md shadow-black/20 dark:shadow-white/20 text-white":
									isValid,
							}
						)}
					>
						Submit
					</button>
				</div>
			</form>

			<Toaster />
		</>
	);
}
