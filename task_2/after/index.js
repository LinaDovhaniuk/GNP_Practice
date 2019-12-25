
const sortByColor = function(figures) {
    console.log('\n\n************** Sorted by COLOR\n');
    figures
        .sort((a,b) => a.getColor().index - b.getColor().index)
        .map(a => console.log(`\n${a.getInfo()}`))
};

const sortByPerimeter = function(figures) {
    console.log('\n\n************** Sorted by PERIMETER\n');
    figures
        .sort((a,b) => a.getPerimeter() - b.getPerimeter())
        .map(a => console.log(`\n${a.getInfo()}`))
};

const sortByArea = function(figures) {
    console.log('\n\n*************** Sorted by AREA\n');
    figures
        .sort((a,b) => a.getArea() - b.getArea())
        .map(a => console.log(`\n${a.getInfo()}`))
};

const func = function(figures, ...criterion) {
    figures.map(a => console.log(`\n${a.getInfo()}`));
    if (criterion.includes('byColor')) {
        sortByColor(figures);
    }
    if (criterion.includes('byPerimeter')) {
        sortByPerimeter(figures);
    }
    if (criterion.includes('byArea')) {
        sortByArea(figures);
    }
};

export {func};

