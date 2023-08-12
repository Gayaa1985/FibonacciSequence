'use strict';

exports.fibonacciSeries = async ctx => {
    const number = ctx.params.number;
    try {
        let n1 = 0, n2 = 1, nextTerm;
        let series = [];
        for (let i = 1; i < number; i++) {
            series.push(n1);
            nextTerm = n1 + n2;
            n1 = n2;
            n2 = nextTerm;
        }
        ctx.status = 200;
        ctx.body = {
            Message : "Fibonacci series generated successfully",
            Series : series
        };
    } catch (err) {
        ctx.status = err.statusCode || err.status || 500;
        ctx.body = {
            message: err.message
        };
    }
}
