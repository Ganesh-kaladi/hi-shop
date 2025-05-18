const catchAsync = require("../utils/catchAsync");
const Product = require("../model/productModel");
const AppError = require("../utils/appError");

const cloudinary = require("../utils/cloudinary");
const streamifier = require("streamifier");

exports.getAllProduct = async (req, res, next) => {
  const reqQuery = { ...req.query };
  const fixedFields = ["limit", "page", "fields", "sort", "productCollection"];
  fixedFields.forEach((el) => delete reqQuery[el]);
  let queryObj = JSON.stringify(reqQuery);
  queryObj = queryObj.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

  let query = Product.find(JSON.parse(queryObj));

  //productCollection
  if (req.query.productCollection) {
    const productCollectionQuery = req.query.productCollection
      .split(",")
      .join(" ");
    query = query.where({ productCollection: productCollectionQuery });
  }

  if (req.query.size) {
    const size = req.query.size;
    query = query.where({ size });
  }

  //category
  if (req.query.category) {
    const categoryQuery = req.query.category.split(",").join(" ");
    query = query.where({ category: categoryQuery });
  }

  //sort
  if (req.query.sort) {
    const sortQuery = req.query.sort.split(",").join(" ");
    query = query.sort(sortQuery);
  } else {
    query = query.sort("createdAt");
  }

  //fields
  if (req.query.fields) {
    const fieldQuery = req.query.fields.split(",").join(" ");
    query = query.select(fieldQuery);
  } else {
    query = query.select(
      "_id title stock price discountPrice category productCollection percentage ratings image size"
    );
  }

  const result = await query;
  res.status(200).json({
    status: "success",
    products: result.length,
    data: {
      doc: result,
    },
  });
};

exports.getProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id).populate({
    path: "reviews",
    select: "-user -createdAt -__v",
  });
  res.status(200).json({
    status: "success",
    data: {
      doc: product,
    },
  });
};

exports.createProduct = catchAsync(async (req, res, next) => {
  const file = req.file.buffer;

  function normalizeArrayField(field) {
    if (!field) return [];
    return Array.isArray(field) ? field : [field];
  }

  // usage:
  const highlights = normalizeArrayField(req.body.highlights);
  const size = normalizeArrayField(req.body.size);
  const color = normalizeArrayField(req.body.color);

  const cloudeResult = await new Promise((resolve, reject) => {
    const streamUpload = cloudinary.uploader.upload_stream(
      {
        folder: "product",
        transformation: [
          { width: 540, height: 540, gravity: "faces", crop: "fill" },
          { quality: "auto", fetch_format: "auto" },
          { background: "lightblue" },
        ],
      },
      (err, result) => {
        if (err) {
          console.log(err);
          return reject(err);
        }
        resolve(result);
      }
    );
    streamifier.createReadStream(file).pipe(streamUpload);
  });

  req.body.image = [cloudeResult.public_id, cloudeResult.secure_url];
  req.body.highlights = highlights;
  req.body.color = color;
  req.body.size = size;

  const product = await Product.create(req.body);
  res.status(200).json({
    status: "success",
    data: {
      doc: product,
    },
  });
});

exports.deleteProduct = async (req, res, next) => {
  await Product.findByIdAndDelete(req.params.id);
  res.status(204).json({
    status: "success",
  });
};

exports.updateProduct = async (req, res, next) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!product) return next(new AppError("Product is not defined", 400));
  res.status(200).json({
    status: "success",
    data: {
      doc: product,
    },
  });
};

// const byteArrayBuffer = fs.readFileSync('shirt.jpg');
// const uploadResult = await new Promise((resolve) => {
//     cloudinary.v2.uploader.upload_stream((error, uploadResult) => {
//         return resolve(uploadResult);
//     }).end(byteArrayBuffer);
// });
