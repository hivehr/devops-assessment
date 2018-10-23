const logger = require("./logger");

const hive = (req, res) => {
    logger.trace({ url: req.url }, "Controller started");

    res.send({
        foo: "bar"
    });

    logger.trace({ url: req.url }, "Controller complete");
};

module.exports = { hive };
