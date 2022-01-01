# ml-deployment

## Notes from Coursera [[ml-ops]]

Generally speaking, two things to keep in mind for deploying ML models:

1. Start small, and ramp/scale up
2. Always be able to rollback to previous versions

What kind of resources we have for deployment should be factored in when choosing an algorithm.

### Shadow mode deployment

Don't rely on proposed system for real decision making yet: the model *shadows* a human's decisions, as to gather data on how the model is behaving (i.e. where models go wrong). Might not have to be a human, can be a previous algorithm&mdash;we just need a baseline.

### Canary deployment

Roll out model on a small fraction of traffic, monitor and ramp up gradually. The canary is meant to signify problems early on before significant consequences.

### Blue green deployment

Old = blue, new = green; data in your pipeline is directed by a router, which can then send data to blue and green. When ready for prime time, router sends traffic to the green version. Advantage of this is being able to rollback easily.

## Deployment example

From [this repo](https://github.com/https-deeplearning-ai/machine-learning-engineering-for-production-public/blob/main/course1/week1-ungraded-lab/server.ipynb), an example would be to use `fastAPI` and `uvicorn` to serve an object detection model. A *client* interacts with a model by sending *requests* to the *server*.

One neat thing with this stack is that you can serve multiple models via different endpoints, for example:

> myawesomemodel.com/count-cars/
> 
> myawesomemodel.com/count-apples/
>
> myawesomemodel.com/count-plants/

Practically, you define callback patterns like `@app.get("/my-endpoint")`. The example in that notebook uses a `/predict/` endpoint, covered by a `prediction` function that takes a model and uploaded file as inputs. The uploaded file is opened as a byte stream, loaded as a NumPy array followed by a `cv2` Image. The ML model then creates a new image with bounding boxes drawn on objects, writes it to disk and sends the image back to the user.

```python
@app.post("/predict") 
def prediction(model: Model, file: UploadFile = File(...)):
    # 1. VALIDATE INPUT FILE
    filename = file.filename
    fileExtension = filename.split(".")[-1] in ("jpg", "jpeg", "png")
    if not fileExtension:
        raise HTTPException(status_code=415, detail="Unsupported file provided.")
    # 2. TRANSFORM RAW IMAGE INTO CV2 image
    # Read image as a stream of bytes
    image_stream = io.BytesIO(file.file.read())
    # Start the stream from the beginning (position zero)
    image_stream.seek(0)
    # Write the stream of bytes into a numpy array
    file_bytes = np.asarray(bytearray(image_stream.read()), dtype=np.uint8)
    # Decode the numpy array as an image
    image = cv2.imdecode(file_bytes, cv2.IMREAD_COLOR)
    # 3. RUN OBJECT DETECTION MODEL
    # Run object detection
    bbox, label, conf = cv.detect_common_objects(image, model=model)
    # Create image that includes bounding boxes and labels
    output_image = draw_bbox(image, bbox, label, conf)
    # Save it in a folder within the server
    cv2.imwrite(f'images_uploaded/{filename}', output_image)
    # 4. STREAM THE RESPONSE BACK TO THE CLIENT
    # Open the saved image for reading in binary mode
    file_image = open(f'images_uploaded/{filename}', mode="rb")
    # Return the image as a stream specifying media type
    return StreamingResponse(file_image, media_type="image/jpeg")
```