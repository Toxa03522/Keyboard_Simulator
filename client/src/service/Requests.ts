import lessons from "../db/lessons.json";

// Функция для получения упражнений для данного урока
export const getExercisesForLesson = (lessonId: number) => {
    const lesson = lessons.find((lesson) => lesson.id === lessonId);
    return lesson ? lesson.exercises : [];
};

// Функция для получения текста для данного упражнения
export const getTextForExercise = (exerciseId: number) => {
    for (const lesson of lessons) {
        const exercise = lesson.exercises.find(
            (exercise) => exercise.id === exerciseId
        );
        if (exercise) {
            return exercise.text;
        }
    }
    return "";
};