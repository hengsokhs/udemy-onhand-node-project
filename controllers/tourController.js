const fs = require('fs');

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`),
);

exports.checkID = (req, res, next, id) => {
  if (id > tours.length) {
    return res.status(404).json({
      success: false,
      message: 'Not found',
    });
  }
  next();
};
exports.checkReqBody = (req, res, next) => {
  const body = req.body;
  console.log('🚀 ~ req.body:', body.name, body.price);
  if (!body.name || !body.price) {
    return res.status(400).json({
      success: false,
      message: 'No Req Body',
    });
  }
  next();
};

exports.getAllTours = (req, res) => {
  res.status(200).json({
    requestTime: req.requestTime,
    success: true,
    results: tours.length,
    data: {
      tours: tours.reverse(),
    },
  });
};
exports.getTour = (req, res) => {
  console.log(req);

  const id = req.params.id + 1;

  const tour = tours.find((el) => el.id == id);

  res.status(200).json({
    success: true,
    data: {
      tour,
    },
  });
};
exports.createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const tour = Object.assign({ id: newId }, req.body);

  tours.push(tour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(200).send({
        success: true,
        data: {
          tour,
        },
      });
    },
  );
};
exports.updateTour = (req, res) => {
  const id = req.params.id;

  res.status(200).json({
    success: true,
    message: `Success update tour id: ${id}`,
  });
};
exports.updateEntireTour = (req, res) => {
  const id = req.params.id;

  res.status(200).json({
    success: true,
    message: `Successful update entire tour id: ${id}`,
  });
};
exports.deleteTour = (req, res) => {
  res.status(204).json({
    success: true,
    data: null,
  });
};
