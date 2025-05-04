const assert = require('assert');
const fs = require('fs');
const path = require('path');

describe('Проверка структуры проекта', function () {
  it('Должен существовать файл package.json', function () {
    const pkgPath = path.join(__dirname, '../package.json');
    assert.ok(fs.existsSync(pkgPath), 'package.json не найден');
  });

  it('Должен существовать файл gulpfile.js', function () {
    const gulpfilePath = path.join(__dirname, '../gulpfile.js');
    assert.ok(fs.existsSync(gulpfilePath), 'gulpfile.js не найден');
  });

  it('Файл index.js должен успешно загружаться', function () {
    const index = require('../index.js');
    assert.ok(index, 'Не удалось загрузить index.js');
    assert.strictEqual(typeof index.run, 'function', 'Метод run отсутствует в index.js');
  });
});

describe('Проверка gulp задач', function () {
  let gulpTasks;
  before(function () {
    // Загружаем gulpfile, чтобы получить экспортированные задачи
    gulpTasks = require('../gulpfile.js');
  });

  it('Должна быть определена задача по умолчанию', function() {
    // Проверяем, что в экспортированном объекте gulpfile.js имеется свойство default и что это функция
    assert.ok(
      typeof gulpTasks.default === 'function',
      'Задача "default" не определена'
    );
  });
});
