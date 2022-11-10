const reverseString = require('./task/task_01');

test(
    'Перевіряємо реверс стрічки', 
    () => {
        expect(reverseString('hello www')).toBe('www olleh');
    }
);