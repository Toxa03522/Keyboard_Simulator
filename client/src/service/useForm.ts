import { useReducer, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { login } from "./userSlice";

interface UserState {
	password: string;
	confirmPassword: string;
	error: string;
}

interface Action {
	type: string;
	payload: string;
}

const formReducer = (state: UserState, action: Action) => {
	switch (action.type) {
		case "SET_PASSWORD":
			return { ...state, password: action.payload };
		case "SET_CONFIRM_PASSWORD":
			return { ...state, confirmPassword: action.payload };
		case "SET_ERROR":
			return { ...state, error: action.payload };
		default:
			return state;
	}
};

const makeRequest = async (url: string, email: string, password: string) => {
	const response = await fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			email,
			password,
		}),
	});

    const data = await response.json();
	console.log(data);

	if (!response.ok) {
		throw new Error(data.error);
	}

	return data;
};

export const useForm = (formType: "authorization" | "registration") => {
	const router = useRouter();
	const dispatch = useDispatch();
	const [state, dispatchForm] = useReducer(formReducer, {
		password: "",
		confirmPassword: "",
		error: "",
	});

	const validateInput = () => {
		if (formType === "registration") {
			if (state.password !== state.confirmPassword) {
				dispatchForm({
					type: "SET_ERROR",
					payload: "Пароли не совпадают",
				});
				return false;
			}
			if (state.password.length < 8) {
				dispatchForm({
					type: "SET_ERROR",
					payload: "Пароль должен содержать более 8 символов",
				});
				return false;
			}
		}
		return true;
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const email = e.currentTarget.elements.namedItem(
			"email"
		) as HTMLInputElement;
		if (!validateInput()) {
			return;
		}
		try {
			const data = await makeRequest(
				`/api/${formType}`,
				email.value,
				state.password
			);
			dispatch(login(data.user.email));
			router.push("/lesson");
		} catch (err) {
			if (err instanceof Error) {
				dispatchForm({ type: "SET_ERROR", payload: err.message });
			} else {
				dispatchForm({
					type: "SET_ERROR",
					payload: "Неизвестная ошибка",
				});
			}
		}
	};

	return {
		password: state.password,
		setPassword: (password: string) =>
			dispatchForm({ type: "SET_PASSWORD", payload: password }),
		confirmPassword: state.confirmPassword,
		setConfirmPassword: (confirmPassword: string) =>
			dispatchForm({
				type: "SET_CONFIRM_PASSWORD",
				payload: confirmPassword,
			}),
		error: state.error,
		handleSubmit,
	};
};
