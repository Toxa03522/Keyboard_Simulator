import { getExercisesForLesson } from "../service/Requests";
import { NextRouter } from "next/router";

export const navigateToNextLesson = (router: NextRouter) => {
	const nextExerciseId = Number(router.query.exerciseId) + 1;
	const exercises = getExercisesForLesson(Number(router.query.lessonId));
	if (nextExerciseId <= exercises.length) {
		router.push(
			`/lesson/${router.query.lessonId}/exercise/${nextExerciseId}`
		);
	} else {
		const nextLessonId = Number(router.query.lessonId) + 1;
		router.push(`/lesson/${nextLessonId}/exercise/1`);
	}
};
