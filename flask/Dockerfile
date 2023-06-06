FROM python:3.8
USER root

WORKDIR /app
ADD . /app

# RUN pip install --no-cache-dir --upgrade pip
# RUN pip install --no-cache-dir numpy scipy matplotlib scikit-learn pandas joblib
# RUN pip install --no-cache-dir --upgrade pip
# RUN pip install tpot
# RUN pip install pycaret
# RUN pip install flask flask_restful flask_cors
RUN pip install --no-cache-dir -r requirements.txt

CMD ["python", "server.py"]
