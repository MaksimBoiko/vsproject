'use strict';

var path = {
    build: { //Тут мы укажем куда складывать готовые после сборки файлы
        html: 'dist/',
        js: 'dist/js/',
        css: 'dist/css/',
        img: 'dist/img/',
        fonts: 'dist/fonts/'
    },
    src: { //Пути откуда брать исходники
        html: 'resources/*.html', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
        js: 'resources/js/main.js',//В стилях и скриптах нам понадобятся только main файлы
        style: 'resources/style/main.scss',
        img: 'resources/img/**/*.*', //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
        fonts: 'resources/fonts/**/*.*'
    },
    watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
        html: 'resources/**/*.html',
        js: 'resources/js/**/*.js',
        style: 'resources/style/**/*.scss',
        img: 'resources/img/**/*.*',
        fonts: 'resources/fonts/**/*.*'
    },
    clean: './dist'
};

gulp.task('style:build', function () {
    gulp.src(path.src.style) //Выберем наш main.scss
        .pipe(sourcemaps.init()) //То же самое что и с js
        .pipe(sass()) //Скомпилируем
        .pipe(prefixer()) //Добавим вендорные префиксы
        .pipe(cssmin()) //Сожмем
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css)) //И в build
        .pipe(reload({stream: true}));
});

var config = {
    server: {
        baseDir: "./dist"
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: "Frontend_Devil"
};
