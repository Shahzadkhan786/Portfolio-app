"use client";
import React, { useState } from "react";

export const Form = () => {
	const [isMessageSent, setMessageSent] = useState<boolean>(false);

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const target = e.currentTarget;

		const name = target.elements.namedItem("name") as HTMLInputElement;
		const company = target.elements.namedItem("company") as HTMLInputElement;
		const email = target.elements.namedItem("email") as HTMLInputElement;
		const message = target.elements.namedItem("message") as HTMLInputElement;

		const data = {
			name: name.value,
			company: company.value,
			email: email.value,
			message: message.value,
		};

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				body: JSON.stringify(data),
				headers: {
					"Content-Type": "application/json",
				},
			});
			if (!response.ok) {
				throw new Error("HTTP error! status: " + response.status);
			}
			setMessageSent(true);
		} catch (error: any) {
			console.log(
				"There was a problem with the fetch operation " + error.message
			);
		}
	}

	return (
		<>
			<form onSubmit={handleSubmit} className='border-grey rounded-md bg-orange p-10'>
				<div className='mb-4'>
					<label className='label-form' htmlFor='name'>
						<b>Name:</b>
					</label>
					<input
						id='name'
						type='text'
						name='name'
						className='input-form rounded-md '
						required
						minLength={3}
						maxLength={200}
					/>
				</div>

				<div className='mb-4'>
					<label className='label-form' htmlFor='company'>
                    <b>Company:</b>
					</label>
					<input
						id='company'
						type='text'
						name='company'
						className='input-form rounded-md '
						minLength={2}
						maxLength={200}
					/>
				</div>

				<div className='mb-4'>
					<label className='label-form' htmlFor='email'>
                    <b>Email:</b>
					</label>
					<input
						id='email'
						type='email'
						name='email'
						className='input-form rounded-md '
						required
						minLength={2}
						maxLength={200}
					/>
				</div>

				<div className='mb-4'>
					<label className='label-form ' htmlFor='message'>
                    <b>Message:</b>
					</label>
					<textarea
						id='message'
						name='message'
						className='input-form rounded-md '
						required
						minLength={20}
						maxLength={2000}
					/>
				</div>
				<button
					type='submit'
					className='bg-white rounded-full text-black hover:text-orange hover:bg-blue-light min-w-100 px-5 h-12 border border-slate-300 hover:border-black hover:border-1'
				>
					<b>Send Message</b>
				</button>
			</form>
			{isMessageSent && <p> Message has been Sent</p>}
		</>
	);
};