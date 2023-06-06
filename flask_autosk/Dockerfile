FROM python:3.8

WORKDIR /app
ADD . /app

# RUN pip install --no-cache-dir --upgrade pip
# RUN pip install --no-cache-dir numpy pandas joblib
# RUN pip install --no-cache-dir --upgrade pip
# RUN pip install scikit-learn
# RUN pip install auto-sklearn
# RUN pip install flask flask_restful flask_cors
RUN pip install --no-cache-dir -r requirements.txt

CMD ["python", "server.py"]
