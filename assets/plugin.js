const fs = require('fs');

module.exports = function (book, page) {
    if (page.title === 'Introduction' || page.level === '1.1') {
        try {
            const data = fs.readFileSync('SUMMARY.md');

            if (data) {
                const lines = data.toString().split('\n');
                lines.shift();
                lines.unshift('> Table of Contents');
                const summary = lines.join('\n');
                page.content = summary + page.content;
            }
        } catch (err) {
            console.error(err.message);
        }

    }

    return page;
}
