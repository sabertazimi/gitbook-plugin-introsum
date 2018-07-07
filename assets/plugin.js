var fs = require('fs');

module.exports = function (book, page) {
        if (page.title === 'Introduction' || page.level === '1.1') {
            try {
                var data = fs.readFileSync('SUMMARY.md');

                if (data) {
                    var summary = data.toString();
                    page.content = summary + page.content;
                }
            } catch (err) {
                console.error(err.message);
            }

        }

        return page;
}